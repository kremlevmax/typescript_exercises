enum Status {
  PUPBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

const enum constEnum {
  PUBLISHED = "published",
  DRAFT = "draft",
}

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
