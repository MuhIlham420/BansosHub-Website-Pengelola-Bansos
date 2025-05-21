const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// register
router.post('/register/penyedia', authController.registerPenyedia);
router.post('/register/penerima', authController.registerPenerima);

// login
router.post('/login/penerima', authController.loginPenerima);
router.post('/login/penyedia', authController.loginPenyedia);

router.post('/register/penerima', (req, res) => {
  console.log('✅ Route /register/penerima kena');
  res.send('Berhasil');
});

module.exports = router;
