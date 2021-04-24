const app = require("./app");
const env = require("dotenv").config().parsed;

app.listen(env.PORT, () => {
  console.log(`This app listening on port ${env.PORT}!`);
});
