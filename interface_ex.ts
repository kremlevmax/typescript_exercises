interface Request {
  sum: number;
  from: number;
  to: number;
}

interface PaymentRequest extends Request {}

interface SuccessResponseData extends PaymentRequest {
  databaseId: number;
}

interface FailedResponseData {
  errorMessage: string;
  errorCode: number;
}

enum Status {
  SUCCESS = "success",
  FAILED = "failed",
}

interface ResponseSuccess {
  status: Status.SUCCESS;
  data: SuccessResponseData;
}

interface ResponseFailed {
  status: Status.FAILED;
  data: FailedResponseData;
}
