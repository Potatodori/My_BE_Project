import { AuthController } from "./auth";
import { UserController, UserSwagger } from "./users";
import { TaskController } from "./tasks";
import { CategoryController } from "./task_categories";
import { TodoWorkController } from "./todoworks";

export const Controllers = [
  UserController,
  AuthController,
  TaskController,
  CategoryController,
  TodoWorkController,
];
export const Swaggers = {
  // UserSwagger,
};
