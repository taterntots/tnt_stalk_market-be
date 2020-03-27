const router = require('express').Router();
const Revs = require('../helpers/market-model.js');

//************* GET ALL TURNIPS ***************//
router.get('/', (req, res) => {
  Revs.findTurnips()
    .then(turnips => {
      res.json(turnips);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Error getting all turnips.'
      });
    });
});

module.exports = router;