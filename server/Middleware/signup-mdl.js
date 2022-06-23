import { UserModel } from "../Models/UserModel";

const CheckForExistingUserBase = async (UserName) => {
  const data = UserModel.findOne({ Username: UserName });
  if (data === null) {
    return true;
  }
  return false;
};

export const RegisterMiddleware = (req, res, next) => {
  const { Username, Password, Confirm, Email } = req.body;
  if (Password === Confirm && Password.length > 8) {
    const regex = /[@#$%^&0-9]/;
    if (regex.exec(Password) !== null) {
      if (Username.length > 5 && Email.length > 11) {
        if (CheckForExistingUserBase()) {
            next();
        }
      }
    }
  }
};
