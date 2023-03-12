import database from "../../../database";

export class TaskService {
  //findById, findMany, create, update, delete

  async findTaskById(id) {
    const task = await database.task.findUnique({
      where: {
        id,
      },
    });

    if (!task)
      throw { status: 404, message: "알바 모집글을 찾을 수 없습니다." };
    return task;
  }

  async findTasks({ skip, take }) {
    const tasks = await database.task.findMany({
      skip,
      take,
    });

    const count = await database.task.count();

    return {
      tasks,
      count,
    };
  }

  async createTask(props) {
    const newTask = await database.task.create({
      data: {
        title: props.title,
        time: props.time,
        cost: props.cost,
        description: props.description,
        detailAddress: props.detailAddress,
        address: props.address,
        isFinished: props.isFinished,
        createdAt: props.createdAt,
        TaskEmployee: props.TaskEmployee,
      },
    });

    return newTask.id;
  }

  async updateTask(id, props) {
    const isExist = await database.task.findUnique({
      where: {
        id,
      },
    });

    if (!isExist)
      throw { status: 404, message: "알바 모집글을 찾을 수 없습니다." };

    await database.task.update({
      where: {
        id: isExist.id,
      },
      data: {
        title: props.title,
        time: props.time,
        cost: props.cost,
        description: props.description,
        isFinished: props.isFinished,
        TaskEmployee: props.TaskEmployee,
      },
    });
  }

  async deleteTask(id) {
    const isExist = await database.task.findUnique({
      where: {
        id,
      },
    });

    if (!isExist)
      throw { status: 404, message: "알바 모집글을 찾을 수 없습니다." };

    await database.task.delete({
      where: {
        id: isExist.id,
      },
    });
  }
}
