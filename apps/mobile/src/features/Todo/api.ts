import { createTodoApi } from "@react-logic-share/features";
import { httpClient } from "../../services/httpClient";

export const todoApi = createTodoApi(httpClient);
