export type Todo = {
  _id: string;
  title: string;
  isCompleted: boolean;
};

export type CreateTodoDTO = {
  title: string;
  isCompleted: boolean;
};

export type UpdateTodoDTO = { _id: string } & Partial<CreateTodoDTO>;

export type GetAllTodosDTO = Todo[];
