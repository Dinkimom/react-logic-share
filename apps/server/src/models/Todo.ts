import { Todo } from '@react-logic-share/types';
import { model, Schema } from 'mongoose';

const todoSchema = new Schema<Todo>({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = model<Todo>('Todo', todoSchema);
