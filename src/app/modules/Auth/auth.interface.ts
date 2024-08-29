

export type TUserRole = "user" | "admin";

export type TAuth = {
  image:string;
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
export type TJwtpayload = {
  AuthId: string,
  email: string,
  role: TUserRole,
};
