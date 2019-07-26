const todosController = require('../controller').todos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todo', todosController.create);
  app.get('/api/todo', todosController.getAll)
  app.put('/api/todo/:todoId', todosController.updateTodo)
};