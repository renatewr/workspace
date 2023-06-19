import { Router } from "express";
import exampleView from "../src/views/example.view.js";
import brickHelloworld from "../src/views/brick-helloworld.js";
import brickInput from "../src/views/brick-input.js";
import brickToggle from '../src/views/brick-toggle.js';

var router = Router();
const catchExceptions = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    if (error.code === 404) {
      res.status(404);
    }
    next(error);
  }
};
router.get("/example", (req, res) => {
  res.type("text/html");
  const html = exampleView({ geeks: "geeks" });
  res.end(html);
});

router.get("/brick-input", (req, res) => {
  res.type("text/html");
  const html = brickInput();
  res.end(html);
});

router.get("/brick-toggle", (req, res) => {
  res.type("text/html");
  const html = brickToggle();
  res.end(html);
});

router.get("/brick-helloworld", (req, res) => {
  res.type("text/html");
  const html = brickHelloworld();
  res.end(html);
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.type("text/html");
  res.end(`some links`);
});

export default router;
