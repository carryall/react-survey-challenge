export type APIError = {
  errors: ErrorDetail[];
};

export type ErrorDetail = {
  code: string;
  detail: string;
  source: ErrorSource;
};

type ErrorSource = {
  parameter: string;
};
