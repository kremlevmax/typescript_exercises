let a: number = 1;
let b: number = 2;

let res: number = a + b;

const getFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

let office: {
  officeId: number;
  isOpened: boolean;
  contacts: { phone: string; email: string; address: { city: string } };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: "+791000000",
    email: "my@gmail.com",
    address: { city: "Seattle" },
  },
};

const enum StatusCodes {
  SUCCESS,
  IN_PROCESS,
  FAILED,
}

console.log(StatusCodes.FAILED);
