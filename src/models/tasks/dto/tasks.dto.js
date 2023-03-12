export class TasksDTO {
  id;
  title;
  time;
  cost;
  description;
  address;
  detailaddress;
  isFinished;
  createdAt;
  TaskEmployee;

  constructor(task) {
    (this.id = task.id),
      (this.title = task.title),
      (this.time = task.time),
      (this.cost = task.cost),
      (this.description = task.description),
      (this.address = task.address),
      (this.detailaddress = task.detailaddress),
      (this.isFinished = task.isFinished),
      (this.createdAt = task.createdAt),
      (this.TaskEmployee = task.TaskEmployee);
  }
}
