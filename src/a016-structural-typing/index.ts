type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {
  userName: string;
  password: string;
};

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return user.userName === sentValue.userName && user.password === sentValue.password;
};

const bdUser = { userName: 'joão', password: '12345' };
const sentValue = { userName: 'joão', password: '12345' };

const logged = VerifyUser(bdUser, sentValue);
console.log(logged);
