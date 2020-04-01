const router = require('express').Router();

const Villager = require('../helpers/villagers-model.js');
const Turn = require('../helpers/turnips-model.js');

//*************** GET ALL VILLAGERS *****************// - Remove for production or create new auth for admin only access to this endpoint
router.get('/all', (req, res) => {
  Villager.findVillagers()
    .then(villagers => {
      res.json(villagers);
    })
    .catch(err => {
      res.status(500).json({ error: 'There was an error getting all villagers to display' });
    });
});

/**************************************************************************/

//    for all turnip endpoints beginning with /villagers/:villagerId      //

/**************************************************************************/

//***************** ADD NEW TURNIP *******************//

router.post('/:villagerId/add-turnip-price', (req, res) => {
  const { villagerId } = req.params;

  let turnip = req.body;
  turnip = { ...turnip, villager_id: villagerId };

  if (Number(req.villager.id) === Number(villagerId)) {
    Turn.addTurnip(turnip)
      .then(newturnip => {
        res.status(201).json(newturnip);
      })
      .catch(err => {
        res.status(500).json({
          error: 'There was an error. Check id or turnip fields'
        });
      });
  } else {
    return res.status(404).json({ error: 'Wrong villager' });
  }
}
);

//************* DELETE A TURNIP PRICE BY USER ID ***************//

router.delete('/:villagerId/turnips/:turnipId', (req, res) => {
  const { turnipId } = req.params;
  Turn.deleteTurnip(turnipId)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Was not able to delete the turnip price'
      });
    });
}
);

/**************************************************************************/

module.exports = router;