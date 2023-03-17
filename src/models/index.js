import { AuthController } from "./auth";
import { UserController, UserSwagger } from "./users";
import { TaskController } from "./tasks";
import { CategoryController } from "./task_categories";

export const Controllers = [
  UserController,
  AuthController,
  TaskController,
  CategoryController,
];
export const Swaggers = {
  // UserSwagger,
};
