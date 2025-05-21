const db = require("../config/db");

exports.getDashboardPenerima = (req, res) => {
  const id_warga = req.user.id_warga; 

  const sql = `
    SELECT
      (SELECT COUNT(DISTINCT id_paket) FROM paket_bansos) AS tipe_bansos_tersedia,
      
      (SELECT status FROM transaksi_bansos 
        WHERE id_penerima = ? 
        ORDER BY tanggal_penyaluran DESC 
        LIMIT 1) AS status_terakhir,

      (SELECT tanggal_penyaluran FROM transaksi_bansos 
        WHERE id_penerima = ? 
        ORDER BY tanggal_penyaluran DESC 
        LIMIT 1) AS tanggal_terakhir
  `;

  db.query(sql, [id_warga, id_warga], (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal ambil data dashboard", error: err });

    const row = results[0];

    let perkiraan_selanjutnya = null;
    if (row.tanggal_terakhir) {
      const tanggal = new Date(row.tanggal_terakhir);
      tanggal.setDate(tanggal.getDate() + 30); // +30 hari
      perkiraan_selanjutnya = tanggal.toISOString().split("T")[0]; // YYYY-MM-DD
    }

    res.json({
      tipe_bansos_tersedia: row.tipe_bansos_tersedia || 0,
      status_terakhir: row.status_terakhir || "Belum Pernah Menerima",
      perkiraan_bantuan_selanjutnya: perkiraan_selanjutnya || "Belum Ada"
    });
  });
};

exports.getDaftarBansos = (req, res) => {
  const sql = `
    SELECT pb.id_paket, pb.nama_paket, pb.max_penghasilan, COUNT(t.id_paket) AS stok
    FROM paket_bansos pb
    LEFT JOIN transaksi_bansos t ON pb.id_paket = t.id_paket AND t.status = 'pending'
    GROUP BY pb.id_paket
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal mengambil data", error: err });
    res.json(results);
  });
};

exports.requestBansos = (req, res) => {
  const { id_paket } = req.body;
  const id_warga = req.user.id_warga; // diasumsikan dari middleware auth

  const sql = `
    INSERT INTO transaksi_bansos (id_warga, id_paket, tanggal_penyaluran, status)
    VALUES (?, ?, CURDATE(), 'pending')
  `;

  db.query(sql, [id_warga, id_paket], (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal request bansos", error: err });
    res.status(201).json({ message: "Berhasil request bansos" });
  });
};

exports.getRiwayatBansos = (req, res) => {
  const id_warga = req.user.id_warga;

  const sql = `
    SELECT t.id_transaksi, t.id_paket, pb.nama_paket, t.tanggal_penyaluran, t.status
    FROM transaksi_bansos t
    JOIN paket_bansos pb ON t.id_paket = pb.id_paket
    WHERE t.id_warga = ?
    ORDER BY t.id_transaksi DESC
  `;

  db.query(sql, [id_warga], (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal ambil riwayat", error: err });
    res.json(results);
  });
};
