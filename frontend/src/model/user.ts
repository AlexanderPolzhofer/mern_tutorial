export interface UserModel {
  userName: string;
  email?: string;
  password: string;
}

export const userInitialValues = {
  userName: "",
  email: "",
  password: "",
};
