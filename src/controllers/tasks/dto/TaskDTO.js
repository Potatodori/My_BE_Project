export class TaskDTO {
  id;
  title;
  time;
  cost;
  description;
  location;
  isFinished;
  createdAt;

  constructor(task) {
    this.title = task.title;
    this.time = task.time;
    this.cost = task.cost;
    this.description = task.description;
    this.location = task.location;
    this.isFinished = task.isFinished;
    this.createdAt = task.createdAt;
  }
}
