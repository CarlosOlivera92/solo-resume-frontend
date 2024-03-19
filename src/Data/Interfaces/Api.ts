export interface IApiProps {
  apiEndpoint: string;
  config: IConfigProps;
  isAuthenticated: boolean;
}
export interface IConfigProps {
  httpVerb: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: [];
}
export interface HeadersInterface {
  headers: Record<string, string>;
  setAuthorization(token: string): void;
  addHeader(key: string, value: string): void;
}
