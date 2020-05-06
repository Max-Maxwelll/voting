const express = require("express");
const app = express();
const jsonParser = express.json();
const concertController = require("./controllers/concertController");
const trackController = require("./controllers/trackController");
const homeController = require("./controllers/homeController"); 
const userController = require("./controllers/userController"); 
const statisticController = require("./controllers/statisticController");
 
// определяем роутеры
const trackRouter = express.Router();
const concertRouter = express.Router();
const homeRouter = express.Router();
const userRouter = express.Router();
const statisticRouter = express.Router();
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

userRouter.post("/login", jsonParser, userController.login);
userRouter.post("/register", jsonParser, userController.register);
app.use("/user", userRouter);

trackRouter.post("/create", jsonParser, trackController.create);
trackRouter.get("/delete", trackController.delete);
trackRouter.get("/", trackController.get);
app.use("/tracks", trackRouter);

concertRouter.get("/delete", concertController.delete);
concertRouter.get("/", concertController.get);
app.use("/concerts", concertRouter);

homeRouter.get("/vote", homeController.vote);
homeRouter.get("/stop", homeController.stop);
app.use("/", homeRouter);

statisticRouter.get("/author", statisticController.author);
statisticRouter.get("/genre", statisticController.genre);
statisticRouter.get("/year", statisticController.year);
statisticRouter.get("/album", statisticController.album);
statisticRouter.get("/language", statisticController.language);
app.use("/statistic", statisticRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000);