# Tater & Tots Stalk Market

#### Backend delpoyed at [Heroku](https://tnt-stalk-market-be-production.herokuapp.com/) <br>

## Getting Started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server

### Backend Framework

- Express for flexibility, simple routing, and middleware support
- Postgres for data persistence

## Endpoints

#### Auth Routes

| Method | Endpoint         | Access Control | Description                      |
| ------ | ---------------- | -------------- | -------------------------------- |
| POST   | `/auth/register` | all users      | Register a new user account.     |
| POST   | `/auth/login`    | all users      | Login with a registered account. |

#### Villagers(user) Routes

| Method | Endpoint                                 | Access Control | Description                           |
| ------ | ---------------------------------------- | -------------- | ------------------------------------- |
| GET    | `/villagers/all`                         | all users      | Returns list of all users.            |
| POST   | `/villagers/villagerId/add-turnip-price` | all users      | Returns info for a single user by id. |
| DELETE | `/villagers/villagerId/turnips/:turnipId`| all users      | Delete user's account by id.          |

#### Turnip Routes

| Method | Endpoint            | Access Control | Description                                   |
| ------ | ------------------- | -------------- | --------------------------------------------- |
| GET    | `/turnips`          | all users      | Returns list of all turnip prices.            |
| GET    | `/turnips/:turnipId`| all users      | Returns the information for a single turnip.  |

## Data Model

#### USERS

---

##### EXPECTS

```
{
    "villager_name": "username",
    "island_name": "islandname",
    "password": "password"
}
```

##### RETURNS

```
{
    "villagername": "username",
    "islandname": "islandname",
    "token": "tokenstring",
    "id": 1,
}
```

#### TURNIPS

---

###### EXPECTS

```
{
    "morning_price": 524
}

or

{
    "afternoon_price": 122
}

```

###### RETURNS

```
{
    "turnip_id": 7
    "morning_price": 524
    "afternoon_price": 122,
    "created_at": YYYY-MM-DDTHH:MM:SS"
}
```

## Actions

---

### Villager (user) Actions

`findVillagers()` -> Returns all users

`findVillagersBy(filter)` -> Returns a single user by specified filter.

`findVillagerById(villagerId)` -> Returns all data for a single user by ID.

`addVillager(villager)` -> Creates a new user and returns that user.
<br />

### Turnip Actions

`findTurnips()` -> Returns a list of all turnips.

`findTurnipById(turnipId)` -> Returns all data (pricing) for a single turnip by ID.

`addTurnip(newTurnip)` --> Creates a new turnip price and returns that price. If the turnip already exists it will be overwritten.

`deleteTurnip(id)` -> Deletes the single turnip and all its data.
<br>

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

\_ DB_DEV - Notates the postgres database URL for local development.

<!-- - JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-_=+)') for i in range(50)]) -->

## Documentation

See [Frontend Documentation](https://github.com/taterntots/tnt_stalk_market-fe) for details on the frontend of our project.
