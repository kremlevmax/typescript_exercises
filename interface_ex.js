"use strict";
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["FAILED"] = "failed";
})(Status || (Status = {}));
const isResponseSuccess = (response) => {
    return response.status === Status.SUCCESS;
};
const isResponseFailed = (response) => {
    return response.status === Status.FAILED;
};
const getResponseType = (response) => {
    if (isResponseFailed(response)) {
        console.log("Response is failed");
    }
    else if (isResponseSuccess(response)) {
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
