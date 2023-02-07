import { CreateTodoDTO, UpdateTodoDTO } from '@react-logic-share/types';
import { Request, Router } from 'express';
import { TodoController } from '../controllers/Todo';

export const todoRouter = Router();

todoRouter.post('/', async (req: Request<undefined, CreateTodoDTO>, res) => {
  try {
    await TodoController.create(req.body);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});

todoRouter.put('/', async (req: Request<undefined, UpdateTodoDTO>, res) => {
  try {
    await TodoController.update(req.body);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});

todoRouter.delete('/:id', async (req, res) => {
  try {
    await TodoController.delete(req.params.id);

    res.sendStatus(200);
  } catch {
    res.sendStatus(400);
  }
});

todoRouter.get('/getAll', async (req, res) => {
  try {
    const todos = await TodoController.getAll();

    res.status(200).send(todos);
  } catch {
    res.sendStatus(400);
  }
});
