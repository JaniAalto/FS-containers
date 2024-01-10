const express = require('express');
const router = express.Router();

const configs = require('../util/config')

const { getAsync, setAsync } = require('../redis/index')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  await setAsync('visits', visits)
  const value = await getAsync('visits')
  console.log("stored redis visits value: ", value)

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  const todosAdded = await getAsync('added_todos')
  const todosValue = todosAdded ? todosAdded : 0
  console.log("stored redis todosValue: ", todosValue)
  res.send({ "added_todos": todosValue });
});

module.exports = router;