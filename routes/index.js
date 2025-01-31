const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('C:/Users/HP/Codings/project trials/Introduction' + '/index.html');
});


module.exports = router;