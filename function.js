"use strict";
var Status;
(function (Status) {
    Status["PUPBLISHED"] = "published";
    Status["DRAFT"] = "draft";
    Status["DELETED"] = "deleted";
})(Status || (Status = {}));
// async function getFaqs(req: { topicId: number; status: Status }): Promise<
//   {
//     question: string;
//     answer: string;
//     tags: string[];
//     likes: number;
//     status: Status;
//   }[]
// > {
//   const res = await fetch("/faq", {
//     method: "POST",
//     body: JSON.stringify(req),
//   });
//   const data = await res.json();
//   return data;
// }
