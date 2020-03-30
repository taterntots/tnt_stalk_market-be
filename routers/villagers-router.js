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
// router.post(
//   '/:villagerId/add-turnip-price', (req, res) => {
//     const { villagerId } = req.params;
//     let turnips = req.body;
//     turnips = { ...turnips, villager_id: villagerId };

//     Turn.addTurnip = (turnips)
//       .then(newTurnip => {
//         res.status(201).json(newTurnip);
//       })
//       .catch(err => {
//         res.status(500).json({ error: 'There was an error adding the turnip price' });
//       });
//   }
// );

router.post(
  '/:villagerId/add-turnip-price', (req, res) => {
    const { villagerId } = req.params;

    let turnip = req.body;
    turnip = { ...turnip, villager_id: villagerId };

    console.log(`LOOK HERE`, villagerId)
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

/**************************************************************************/

module.exports = router;