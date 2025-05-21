const db = require('../config/db');

exports.getAllPaket = async (req, res) => {
  try {
    const [paket] = await db.query('SELECT * FROM paket_bansos');
    res.json(paket);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data paket', error });
  }
};

exports.tambahPaket = async (req, res) => {
  const { nama_paket, max_penghasilan } = req.body;
  const id_penyedia = req.user.id_penyedia;

  const sql ='INSERT INTO paket_bansos (nama_paket, max_penghasilan) VALUES (?, ?)';
  try {
    await db.query(sql, [nama_paket, max_penghasilan], (err));
    res.json({ message: 'Paket berhasil ditambahkan' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan paket', error });
  }
};

exports.updatePaket = async (req, res) => {
  const { id_paket } = req.params;
  const { nama_paket, max_penghasilan } = req.body;
  try {
    await db.query('UPDATE paket_bansos SET nama_paket = ?, max_penghasilan = ? WHERE id_paket = ?', [nama_paket, max_penghasilan, id_paket]);
    res.json({ message: 'Paket berhasil diperbarui' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui paket', error });
  }
};

exports.hapusPaket = async (req, res) => {
  const { id_paket } = req.params;
  try {
    await db.query('DELETE FROM paket_bansos WHERE id_paket = ?', [id_paket]);
    res.json({ message: 'Paket berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus paket', error });
  }
};


//riwayat

// Ambil daftar semua paket bansos
exports.getDaftarPaket = (req, res) => {
  const sql = `
    SELECT * FROM paket_bansos
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal ambil paket", error: err });
    res.json(results);
  });
};

// Tambah paket baru
exports.tambahPaket = (req, res) => {
  const { nama_paket, stok, max_penghasilan } = req.body;

  const sql = `
    INSERT INTO paket_bansos (nama_paket, stok, max_penghasilan)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [nama_paket, stok, max_penghasilan], (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal tambah paket", error: err });
    res.status(201).json({ message: "Paket bansos ditambahkan" });
  });
};

// Edit paket
exports.editPaket = (req, res) => {
  const { id_paket } = req.params;
  const { nama_paket, stok, max_penghasilan } = req.body;

  const sql = `
    UPDATE paket_bansos SET nama_paket = ?, stok = ?, max_penghasilan = ?
    WHERE id_paket = ?
  `;
  db.query(sql, [nama_paket, stok, max_penghasilan, id_paket], (err) => {
    if (err) return res.status(500).json({ message: "Gagal update paket", error: err });
    res.json({ message: "Paket bansos diperbarui" });
  });
};

// Hapus paket
exports.hapusPaket = (req, res) => {
  const { id_paket } = req.params;
  const sql = `DELETE FROM paket_bansos WHERE id_paket = ?`;
  db.query(sql, [id_paket], (err) => {
    if (err) return res.status(500).json({ message: "Gagal hapus paket", error: err });
    res.json({ message: "Paket bansos dihapus" });
  });
};

// Ambil transaksi yang statusnya pending
exports.getPendingTransaksi = (req, res) => {
  const sql = `
    SELECT t.*, w.nama_lengkap, pb.nama_paket
    FROM transaksi_bansos t
    JOIN warga w ON t.id_warga = w.id_warga
    JOIN paket_bansos pb ON t.id_paket = pb.id_paket
    WHERE t.status = 'pending'
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal ambil data transaksi", error: err });
    res.json(results);
  });
};

// Konfirmasi distribusi bansos
exports.konfirmasiTransaksi = (req, res) => {
  const { id_transaksi } = req.params;

  const sql = `
    UPDATE transaksi_bansos SET status = 'diterima'
    WHERE id_transaksi = ?
  `;
  db.query(sql, [id_transaksi], (err) => {
    if (err) return res.status(500).json({ message: "Gagal konfirmasi", error: err });
    res.json({ message: "Transaksi dikonfirmasi" });
  });
};