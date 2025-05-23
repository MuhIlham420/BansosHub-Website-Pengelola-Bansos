const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerPenerima = async (req,res) =>{

    const {nama_penerima, no_kk, alamat, penghasilan, kontak, username, password} = req.body;
    
    try{
        if (!nama_penerima || !no_kk || !alamat || !penghasilan || !kontak || !username || !password) {
            return res.status(400).json({
            status: 'error',
            message: 'Please fill all of the data'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'INSERT INTO Penerima (nama_penerima, no_kk, alamat, penghasilan, kontak, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [nama_penerima, no_kk, alamat, penghasilan, kontak, username, hashedPassword];

        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error creating user:', err);
                return res.status(500).json({
                    status: 'error',
                    message: 'Gagal membuat user baru'
                });
            }

        res.status(201).json({
            status: 'success',
            message: 'Penerima berhasil dibuat',
            data: {
                id: result.insertId,
                username
            }
        });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan server'
        });
    }
};

exports.registerPenyedia = async (req, res) =>{
    
    const {nama_penyedia, no_organisasi, alamat, kontak, username, password} = req.body;

    try{
        if (!nama_penyedia || !no_organisasi || !alamat || !kontak || !username || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Semua data harus diisi'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);  

        const query = 'INSERT INTO Penyedia (nama_penyedia, no_organisasi, alamat, kontak, username, password) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [nama_penyedia, no_organisasi, alamat, kontak, username, hashedPassword];
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error creating penyedia:', err);
                return res.status(500).json({
                    status: 'error',
                    message: 'Gagal membuat penyedia baru'
                });
            }

            res.status(201).json({
                status: 'success',
                message: 'Penyedia berhasil dibuat',
                data: {
                    id: result.insertId,
                    username
                }
            });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan server'
        });
    }
};

exports.loginPenerima = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Username dan password harus diisi'
            });
        }

        const query = 'SELECT * FROM Penerima WHERE username = ? AND no_kk IS NOT NULL';
        db.query(query, [username], async (err, results) => {
            if (err) {
                console.error('Query error:', err);
                return res.status(500).json({ status: 'error', message: 'Terjadi kesalahan server' });
            }

            if (results.length === 0) {
                return res.status(401).json({ status: 'error', message: 'User tidak ditemukan' });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ status: 'error', message: 'Password salah' });
            }

            const token = jwt.sign({ id_penerima: user.id_penerima, role: 'penerima' }, 'RAHASIA_KEY', { expiresIn: '1d' });

            res.status(200).json({
                status: 'success',
                message: 'Login berhasil',
                token,
                data: {
                    id: user.id,
                    username: user.username,
                    nama: user.nama
                }
            });
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'error', message: 'Terjadi kesalahan server' });
    }
};


exports.loginPenyedia = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Username dan password harus diisi'
            });
        }

        const query = 'SELECT * FROM Penyedia WHERE username = ? AND no_organisasi IS NOT NULL';
        db.query(query, [username], async (err, results) => {
            if (err) {
                console.error('Query error:', err);
                return res.status(500).json({ status: 'error', message: 'Terjadi kesalahan server' });
            }

            if (results.length === 0) {
                return res.status(401).json({ status: 'error', message: 'User tidak ditemukan' });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ status: 'error', message: 'Password salah' });
            }

            const token = jwt.sign({ id_penyedia: user.id_penyedia, role: 'penyedia' }, 'RAHASIA_KEY', { expiresIn: '1d' });

            res.status(200).json({
                status: 'success',
                message: 'Login berhasil',
                token,
                data: {
                    id: user.id,
                    username: user.username,
                    nama: user.nama
                }
            });
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'error', message: 'Terjadi kesalahan server' });
    }
};

