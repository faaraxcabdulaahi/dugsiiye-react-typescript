export type LoginBody = {
  email: string;
  password: string;
};

export type LoginParams = {};

export type LoginQuery = {};

export type LoginResponse = {
  message: string;
  error?: string;
};
