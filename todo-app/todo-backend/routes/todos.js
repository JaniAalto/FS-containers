const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const { getAsync, setAsync } = require('../redis/index')


/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  console.log("req.body", req.body)
  
  const todosAdded = await getAsync('added_todos')
  console.log("stored redis todosValue: ", todosAdded)
  let todosValue = todosAdded ? todosAdded : 0
  todosValue++
  console.log("new redis todosValue: ", todosValue)
  await setAsync('added_todos', todosValue)

  res.send(todo);
});


const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const todo = await Todo.replaceOne({ _id: req.todo._id }, {
    text: req.body.text,
    done: req.body.done
  })
  res.send(todo);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;