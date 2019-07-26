const Todo = require('../models').Todo;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        description: req.body.description,
        status: "not completed"
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  getAll(req, res) {
    return Todo.findAll().then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error))
  },

  updateTodo(req, res) {
    const { todoId } = req.params;

    Todo.findOne({
      where: {
        id: todoId
      }
    }).then((todo) => {
      let previousMeal = todo;
      todo.update({...previousMeal, ...req.body}).then(() => {
        res.status(200).send({
          success: true,
          message: "todo created successfully"
        })
      }).catch(() => {
        res.status(400).send({
          success: true,
          message: 'update fail',
        });

      })
    }).catch(() => res.status(404).send({
        success: false,
        message: 'No todo with that ID',
    }))
  }
};
