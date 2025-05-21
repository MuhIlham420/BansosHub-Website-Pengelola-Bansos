const express = require('express');
const router = express.Router();
const controller = require('../controllers/penyediaController');
const { verifyToken, penyediaOnly } = require('../middleware/authMiddleware');

router.use(verifyToken, penyediaOnly);

router.get('/dashboard', controller.getDashboardPenyedia);
router.get('/paket', controller.getListPaket);
router.post('/paket', controller.tambahPaket);
router.post('/penyaluran', controller.salurkanBansos);

module.exports = router;
