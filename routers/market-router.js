const router = require('express').Router();
const Mar = require('../helpers/market-model.js');

//************* GET ALL TURNIPS ***************//
router.get('/', (req, res) => {
  Mar.findTurnips()
    .then(turnips => {
      res.json(turnips);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Error getting all turnips.'
      });
    });
});

//***************** ADD NEW TURNIP *******************//
router.post(
  '/:villagerId/add-turnip-price', (req, res) => {
    const { villagerId } = req.params;
    let prices = req.body;
    prices = { ...prices, villager_id: villagerId };

    Mar.addTurnipPrice(prices)
      .then(newTurnipPrice => {
        res.status(201).json(newTurnipPrice);
      })
      .catch(err => {
        res.status(500).json({ error: 'There was an error adding the turnip price' });
      });
  }
);

module.exports = router;