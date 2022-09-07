/* ...External Module imported... */
const express = require("express");
const app = express();

/* ...Core Module imported... */
const user = require("./routes/user");
const PORT = process.env.PORT || 5000;

/* ...External User Route... */
app.use(express.json());
app.use("/user", user);

/* ...Main Or default routes... */
app.get("/", (req, res) => {
  res.send("Welcome our random user generator api ");
});

/* ...Server Connection... */
app.listen(PORT, () => {
  console.log(`Server is open in ${PORT} Port`);
});
