export class UserDTO {
  id;
  loginID;
  password;
  nickname;
  name;
  phonenum;
  selfIntroduce;
  birthday;

  constructor(user) {
    this.id = user.id;
    this.loginID = user.loginID;
    this.password = user.password;
    this.nickname = user.nickname;
    this.name = user.name;
    this.phonenum = user.phonenum;
    this.selfIntroduce = user.selfIntroduce;
    this.birthday = user.birthday;
  }
}
