const express = require('express');
const router = express.Router();
const controller = require('../controllers/penyediaController');
const { verifyToken, penyediaOnly } = require('../middleware/authMiddleware');

router.use(verifyToken, penyediaOnly);

router.get('/dashboard', controller.getDashboardPenyedia);
router.get('/daftar', controller.getDatabaseBansos);
router.get('/riwayat', controller.getTransaksiBansos);

// router.post('/add', verifyToken, penyediaOnly, controller.addPaket);
// router.post('/edit', verifyToken, penyediaOnly, controller.editPaket);
// router.post('/delete', verifyToken, penyediaOnly, controller.deletePaket);

module.exports = router;