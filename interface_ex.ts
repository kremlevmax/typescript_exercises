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

const isResponseSuccess = (
  response: ResponseSuccess | ResponseFailed
): response is ResponseSuccess => {
  return response.status === Status.SUCCESS;
};

const isResponseFailed = (
  response: ResponseSuccess | ResponseFailed
): response is ResponseFailed => {
  return response.status === Status.FAILED;
};

const getResponseType = (response: ResponseSuccess | ResponseFailed) => {
  if (isResponseFailed(response)) {
    console.log("Response is failed");
  } else if (isResponseSuccess(response)) {
    console.log("Response is successed");
  }
};

// const skills = ["Java", "TypeScript"];

// interface user {
//   userSkills: string[];
// }

// const user: user = {
//   userSkills: [],
// };

// skills.forEach((skill) => user.userSkills.push(skill));
// console.log(user);
// console.log(skills);
