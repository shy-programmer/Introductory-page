const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const zone = path.join(__dirname, '../', 'index.html');
  res.sendFile(zone);
});
router.get('/projects', (req, res) => {
  const zone = path.join(__dirname, '../', '/pages/projects.html');
  res.sendFile(zone);
});

router.get('/socials', (req, res) => {
  const zone = path.join(__dirname, '../', '/pages/socials.html');
  res.sendFile(zone);
});

module.exports = router;