import { Router } from "express";
import { CreatUserDTO } from "./dto";
import { UserDTO } from "./dto/UserDTO";

// Router
class UserController {
  router;
  path = "/users";
  users = [
    {
      id: "1",
      loginID: "azi6511",
      password: "12341234",
      nickname: "불타는채소",
      name: "김경빈",
      phonenum: "01012345678",
      selfIntroduce: "안녕하세요 잘 부탁드립니다.",
      birthday: "1995 - 01 - 11",
    },
  ];
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.getUsers.bind(this));
    this.router.get("/detail/:id", this.getUser.bind(this));
    this.router.post("/", this.createUser.bind(this));
  }
  getUsers(req, res, next) {
    try {
      const users = this.users.map((user) => new UserDTO(user));

      res.status(200).json({ users: this.users });
    } catch (err) {
      next(err);
    }
  }

  getUser(req, res, next) {
    try {
      const { id } = req.params;

      const targetUser = this.users.find((user) => user.id === Number(id));

      if (!targetUser) {
        throw { status: 404, message: "유저를 찾을 수 없습니다." };
      }
      const user = new UserDTO(targetUser);

      res.status(200).json({ user });
    } catch (err) {
      next(err);
    }
  }

  createUser(req, res, next) {
    try {
      const {
        loginID,
        password,
        nickname,
        name,
        phonenum,
        selfIntroduce,
        birthday,
      } = req.body;

      const newUser = new CreatUserDTO(
        loginID,
        password,
        nickname,
        name,
        phonenum,
        selfIntroduce,
        birthday
      ).getNewUser();

      this.users.push(newUser);

      res.status(201).json({ users: this.users });
    } catch (err) {
      next(err);
    }
  }
}

const userController = new UserController();
export default userController;
