import { Router } from "express";
import { CreateTaskDTO } from "./dto";
import { TaskDTO } from "./dto/TaskDTO";

// Router
class TaskController {
  router;
  path = "/tasks";
  tasks = [
    {
      id: "1",
      title: "강아지 산책",
      time: "3월 10일 오전 11시 20분",
      cost: 20_000,
      description: "말티즈 산책시키기입니다.",
      location: "서울 마포구 타임하우스",
      isFinished: false,
      createdAt: "2023-02-22",
    },
  ];
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.getTasks.bind(this));
    this.router.get("/detail/:id", this.getTask.bind(this));
    this.router.post("/", this.createTask.bind(this));
  }
  getTasks(req, res, next) {
    try {
      const tasks = this.tasks.map((task) => new TaskDTO(task));

      res.status(200).json({ tasks: this.tasks });
    } catch (err) {
      next(err);
    }
  }

  getTask(req, res, next) {
    try {
      const { id } = req.params;

      const targetTask = this.tasks.find((task) => task.id === Number(id));

      if (!targetTask) {
        throw { status: 404, message: "알바 글을 찾을 수 없습니다." };
      }
      const task = new TaskDTO(targetTask);

      res.status(200).json({ task });
    } catch (err) {
      next(err);
    }
  }

  createTask(req, res, next) {
    try {
      const { title, time, cost, description, location, isFinished } = req.body;

      const newTask = new CreateTaskDTO(
        title,
        time,
        cost,
        description,
        location,
        isFinished
      ).getNewTask();

      this.tasks.push(newTask);

      res.status(201).json({ tasks: this.tasks });
    } catch (err) {
      next(err);
    }
  }
}

const taskController = new TaskController();
export default taskController;
