import winston from "winston";
import { Logger } from "winston";
import { ENVIRONMENT } from "./secrets";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug"
    }),
    new winston.transports.File({ filename: "debug.log", level: "debug" })
  ]
});

export default logger;
