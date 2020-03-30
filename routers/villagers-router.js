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

//*************** GET USER BY ID *****************//
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  User.findUserById(userId)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'There was an error getting user' });
    });
});

//*************** UPDATE USER INFO ******************//
router.put('/:userId', (req, res) => {
  const { email, password, username, track_id } = req.body;
  const { userId } = req.params;
  id = userId;
  User.findUsersBy({ id }).then(userInfo => {
    const user = userInfo;
    if (
      email === user[0].email &&
      username === user[0].username &&
      password === user[0].password &&
      track_id === user[0].track_id
    ) {
      return res.status(200).json({ message: 'No changes to update' });
    } else {
      User.updateUser(id, { email, password, username, track_id })
        .then(updatedInfo => {
          if (updatedInfo) {
            res
              .status(202)
              .json({ updatedInfo: { email, password, username, track_id } });
          } else {
            res.status(404).json({ message: 'Error locating user info' });
          }
        })
        .catch(err => {
          res.status(500).json({ message: 'Error updating user info' });
        });
    }
  });
});

//****************** DELETE ACCOUNT ********************//
router.delete('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findUserById(userId);
    if (user) {
      const deleted = await User.deleteUser(userId);
      res.status(200).json({ message: 'User account deleted' });
    } else {
      res.status(404).json({ message: 'Error locating user.' });
    }
  } catch {
    res.status(500).json({
      message: 'There was an error deleting this account.'
    });
  }
});

/**************************************************************************/

module.exports = router;