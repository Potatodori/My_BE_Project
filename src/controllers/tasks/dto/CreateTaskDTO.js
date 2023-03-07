export class CreateTaskDTO {
  title;
  time;
  cost;
  description;
  location;
  isFinished;

  constructor(title, time, cost, description, location, isFinished) {
    (this.title = title),
      (this.time = time),
      (this.cost = cost),
      (this.description = description),
      (this.location = location),
      (this.isFinished = isFinished);
  }

  getNewTask() {
    return {
      id: new Date().getTime(),
      title: this.title,
      time: this.time,
      cost: this.cost,
      description: this.description,
      location: this.location,
      isFinished: this.isFinished,
      createdAt: new Date(),
    };
  }
}
