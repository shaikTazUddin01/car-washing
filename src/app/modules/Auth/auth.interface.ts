export type TUserRole = "user" | "admin";

export type TAuth = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: TUserRole;
  address: string;
};
export type TAuthLogin = {
  email: string;
  password: string;
};
