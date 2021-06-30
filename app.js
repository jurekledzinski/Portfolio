const compression = require("compression");
const helmet = require("helmet");
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const port = process.env.PORT || 5000;

const {
  atlasUrl,
  nodeEnv,
  sessionName,
  secretSession,
} = require("./configs/config");

mongoose.connect(atlasUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

let errDb = false;
let openDb = true;

db.on("error", (err) => {
  errDb;
});
db.once("open", () => {
  console.log("Baza dziala poprawnie");
});

const emailRouter = require("./routes/email");

const app = express();

app.use(compression());
app.use(helmet());
app.disable("x-powered-by");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: sessionName,
    secret: secretSession,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: atlasUrl,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
      secure: false,
      sameSite: nodeEnv === "production" ? "lax" : "lax",
    },
  })
);

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' firebasestorage.googleapis.com *.firebasestorage.googleapis.com mongodb.com *.mongodb.com; img-src * 'self' data: https:;font-src *; object-src 'self';script-src 'self';style-src 'self' 'unsafe-inline' fontawesome.com *.fontawesome.com fonts.google.com *.fonts.google.com fonts.googleapis.com *.fonts.googleapis.com;"
  );
  next();
});

app.use("/email", emailRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    where: error.message,
    statusCode: error.status,
    alert: error.msgError,
  });
});

app.listen(port, () => {
  console.log(`Server dziala na porcie ${port}`);
});

module.exports = app;
