import { CreateTodoDTO, UpdateTodoDTO, GetAllTodosDTO } from "@react-logic-share/types";
import { AxiosInstance } from "axios";

export const createTodoApi = (httpClient: AxiosInstance) => ({
  create: async (data: CreateTodoDTO) => {
    await httpClient.post("/", data);
  },
  update: async ({ _id, ...data }: UpdateTodoDTO) => {
    await httpClient.put(`/${_id}`, data);
  },
  delete: async (id: string) => {
    await httpClient.delete(id);
  },
  getAll: async (): Promise<GetAllTodosDTO> => {
    const response = await httpClient.get<GetAllTodosDTO>("/getAll");

    return response.data;
  }
});
