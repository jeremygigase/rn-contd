class User {
  constructor(
    id,
    name,
    firstName,
    email,
    password,
    department,
    created,
    picture,
    role,
    lastLogin
  ) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
    this.department = department;
    this.created = created;
    this.picture = picture;
    this.role = role; //paying user, basic user etc...
    this.lastLogin = lastLogin;
  }
}

export default User;
