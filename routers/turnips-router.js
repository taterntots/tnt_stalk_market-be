const router = require('express').Router();
const Turn = require('../helpers/turnips-model.js');

//************* GET ALL TURNIP PRICES ***************//
router.get('/', (req, res) => {
  Turn.findTurnips()
    .then(turnips => {
      res.json(turnips);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Error getting all turnips.'
      });
    });
});

//************* GET A SINGLE TURNIP PRICE BY ID ***************//

router.get('/:turnipId', (req, res) => {
  const { turnipId } = req.params;

  Turn.findTurnipById(turnipId)
    .then(turnip => {
      res.json(turnip);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Error getting turnip ID.'
      });
    });
});

module.exports = router;