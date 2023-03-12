import { AuthController } from "./auth";
import { UserController, UserSwagger } from "./users";
import { TaskController } from "./tasks";

export const Controllers = [UserController, AuthController, TaskController];
export const Swaggers = {
  // UserSwagger,
};
