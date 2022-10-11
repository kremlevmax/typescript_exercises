"use strict";
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 0] = "SUCCESS";
    StatusCodes[StatusCodes["IN_PROCESS"] = 1] = "IN_PROCESS";
    StatusCodes[StatusCodes["FAILED"] = 2] = "FAILED";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.FAILED);
