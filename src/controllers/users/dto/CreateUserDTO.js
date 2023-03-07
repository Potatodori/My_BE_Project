export class CreatUserDTO {
  loginID;
  password;
  nickname;
  name;
  phonenum;
  selfIntroduce;
  birthday;

  constructor(
    loginID,
    password,
    nickname,
    name,
    phonenum,
    selfIntroduce,
    birthday
  ) {
    (this.loginID = loginID),
      (this.password = password),
      (this.nickname = nickname),
      (this.name = name),
      (this.phonenum = phonenum),
      (this.selfIntroduce = selfIntroduce),
      (this.birthday = birthday);
  }

  getNewUser() {
    return {
      id: new Date().getTime(),
      loginID: this.loginID,
      password: this.password,
      nickname: this.nickname,
      name: this.name,
      phonenum: this.phonenum,
      selfIntroduce: this.selfIntroduce,
      birthday: this.birthday,
    };
  }
}
