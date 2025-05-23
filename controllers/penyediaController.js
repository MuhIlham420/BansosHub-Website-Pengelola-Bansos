const db = require('../config/db');

exports.getDashboardPenyedia = async (req, res) => {
  try{
    const id_penyedia = req.user.id_penyedia; 
  
    const sql = `
      SELECT
        (SELECT SUM(stok) 
          FROM paket_bansos
          WHERE id_penyedia = ?) AS jumlah_stok,
  
        (SELECT COUNT(DISTINCT tb.id_transaksi)
          FROM transaksi_bansos tb
          JOIN paket_bansos pb ON tb.id_paket = pb.id_paket
          WHERE pb.id_penyedia = ?) AS telah_terdistribusi;
      `;
    const [results] = await db.promise().query(sql, [id_penyedia, id_penyedia]);
    const row = results[0];
    
      res.json({
        jumlah_stok: row.jumlah_stok || 0,
        telah_terdistribusi: row.telah_terdistribusi || 0,
      });
  }catch(err){
    res.status(500).json({message:"Gagal ambil data dashboard", error:err});
  }
};

exports.getTransaksiBansos = async(req, res) => {
  try{
    const id_penyedia = req.user.id_penyedia;
  
    const sql = `
      SELECT tb.id_transaksi, tb.id_penerima, tb.id_paket, tb.last_pengambilan, tb.next_pengambilan
      FROM transaksi_bansos tb
      JOIN paket_bansos pb ON tb.id_paket = pb.id_paket
      WHERE pb.id_penyedia = ?
      ORDER BY id_transaksi DESC
    `;
    const [results] = await db.promise().query(sql, [id_penyedia]);

    res.json(results);    
  }catch(err){
    res.status(500).json({message:"Gagal ambil riwayat", error:err});
  }
};

exports.getDatabaseBansos = async(req, res) => {
  try{
    const id_penyedia = req.user.id_penyedia;
  
    const sql = `
      SELECT id_paket, nama_paket, stok, terakhir_diperbarui 
      FROM paket_bansos
      WHERE id_penyedia = ?
      ORDER BY id_paket ASC
    `;
    const [results] = await db.promise().query(sql, [id_penyedia]);

    res.json(results);    
  }catch(err){
    res.status(500).json({message:"Gagal ambil daftar paket", error:err});
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