const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// imports
const Villager = require('../helpers/villagers-model.js');
// token
const { jwtSecret } = require('../config/secret.js');

/**************************************************************************/

//               for endpoints beginnings with /api/auth                  //

/*************************** BEGIN REGISTER *******************************/

router.post('/register', (req, res) => {
  let villager = req.body;
  const hash = bcrypt.hashSync(villager.password, 3);
  villager.password = hash;

  Villager.addVillager(villager)
    .then(newVillager => {
      const token = signToken(newVillager);
      const { id, villager_name, island_name } = newVillager;
      res.status(201).json({ villager_name, island_name, token, id });
    })
    .catch(err => {
      console.log('LOOK HERE', err)

      res.status(500).json({ error: 'There was an error signing up.' });
    });
});
/*************************** END REGISTER *******************************/

/*************************** BEGIN LOGIN *******************************/

router.post('/login', (req, res) => {
  let { villager_name, password } = req.body;

  Villager.findVillagersBy({ villager_name })
    .first()
    .then(villager => {
      if (villager && bcrypt.compareSync(password, villager.password)) {
        const token = signToken(villager);
        const { id, villager_name, island_name } = villager;

        res.status(200).json({ villager_name, island_name, token, id });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'There was an error signing in' });
    });
});

/*************************** END LOGIN *******************************/

/************************* BEGIN CREATE TOKEN *****************************/

//Create TOKEN
function signToken(villager) {
  const payload = {
    id: villager.id,
    villager_name: villager.villager_name
  };

  const options = {
    expiresIn: '8h'
  };
  return jwt.sign(payload, jwtSecret, options);
}

/************************* END CREATE TOKEN *****************************/

module.exports = router;