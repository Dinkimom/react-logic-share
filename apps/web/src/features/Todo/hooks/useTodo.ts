import {
  createUseTodo,
  NotificationService,
} from '@react-logic-share/features';
import { toast } from 'react-toastify';
import { todoApi } from '../api';

const notificationService: NotificationService = {
  notify: (message: string) => toast(message),
};

export const useTodo = createUseTodo({ todoApi, notificationService });
