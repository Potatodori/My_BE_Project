export class CreateTaskDTO {
  title;
  time;
  cost;
  description;
  address;
  detailaddress;
  isFinished;

  constructor(task) {
    (this.title = task.title),
      (this.time = task.time),
      (this.cost = task.cost),
      (this.description = task.description),
      (this.address = task.address),
      (this.detailaddress = task.description),
      (this.isFinished = task.isFinished);
  }
}
