import {
  createUseTodo,
  NotificationService,
} from '@react-logic-share/features';
import { todoApi } from '../api';
import Toast from 'react-native-toast-message';

const notificationService: NotificationService = {
  notify: (message: string) =>
    Toast.show({
      type: 'success',
      text1: message,
    }),
};

export const useTodo = createUseTodo({ todoApi, notificationService });
