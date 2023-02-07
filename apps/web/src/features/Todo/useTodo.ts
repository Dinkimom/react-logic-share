import { createUseTodo } from '@react-logic-share/features';
import { todoApi } from './api';

export const useTodo = createUseTodo({ todoApi });
