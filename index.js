import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import { createServer } from "http";
import path from "path";
import requestIp from "request-ip";
import { rateLimit } from "express-rate-limit";
import session from "express-session";
import fileUpload from "express-fileupload";
import { Server } from "socket.io";
import adminRoutes from "./routes/adminRoutes/adminroutes.js";
import chatRoutes from "./routes/chatRoutes/chat.routes.js";
import userRoutes from "./routes/userRoutes/user.routes.js";
import { initializeSocketIO } from "./socket/index.js";
import { fileURLToPath } from "url";
import messageRouter from "./routes/chatRoutes/message.routes.js";
import registerRouter from"./routes/registerRoutes/register.route.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public")); // configure static file to save images locally
app.use(cookieParser());

dotenv.config({
  path: "./.env",
});

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

const httpServer = createServer(app);
// app.use(cors());
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true, // Adjust the origin to match your client URL
    methods: ["GET", "POST"],
  },
});

app.set("io", io); // using set method to mount the `io` instance on the app to avoid usage of `global`

// global middlewares
app.use(
  cors({
    origin:[ "http://localhost:5173","https://65c276b796121e1f34eb8524--fantastic-gingersnap-891f8e.netlify.app"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(requestIp.mw());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5000, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req, res) => {
    return req.clientIp; // IP address from requestIp.mw(), as opposed to req.ip
  },
  handler: (_, __, ___, options) => {
    throw new ApiError(
      options.statusCode || 500,
      `There are too many requests. You are only allowed ${
        options.max
      } requests per ${options.windowMs / 60000} minutes`
    );
  },
});

// Apply the rate limiting middleware to all requests
app.use(limiter);
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
); // session secret // persistent
initializeSocketIO(io);

//*********/ write all routes here *********
app.use("/v1/api/admin", adminRoutes);
app.use("/v1/api/chats", chatRoutes);
// app.use("/v1/api/users", userRoutes);
app.use("/v1/api/chats/messages", messageRouter);
app.use("/v1/api/users", registerRouter)

httpServer.listen(8000, () => {
  connect();
  console.log("Connected to backend");
});
