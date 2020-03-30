const router = require('express').Router();

const Villager = require('../helpers/villagers-model.js');

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

module.exports = router;