import express from "express";
import { Symptom } from "../../models";

const app = express();

app.get("/:symptom", async (req, res) => {
  const { symptom } = req.params;
  const inform = await Symptom.findAll({
    row: false,
    attributes: [
      "symptomName",
      "firstAid",
      "notice",
      "firstImage",
      "noticeImage",
    ],
    where: {
      symptomName: symptom,
    },
  });

  // 조건에 맞는 정보가 없는 경우
  if (!inform.length) {
    return res.send({
      error: "There is no information to meet the conditions.",
    });
  }
  res.json({ data: inform });
});

export default app;
