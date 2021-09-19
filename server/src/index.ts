import express from "express";

const port = 4000;

const main = async () => {
  const app = express();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  app.get("/", (_, res) => {
    res.send("Hello World!");
  });
};
main();
