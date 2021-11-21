const log4js = require('log4js');

log4js.configure({
  appenders: { everything: { type: 'file', filename: 'server.log' } },
  categories: { default: { appenders: ['everything'], level: 'ALL' } }
});

const logger = log4js.getLogger();
logger.info("Logger created");

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const isDevMode = process.env.NODE_ENV !== 'production'
const port = process.env.PORT ? process.env.PORT : 50253

// Create the Express-Next App
const app = next({ dev: isDevMode })
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      handle(req, res, parsedUrl);
      logger.info("pathname", pathname);
    }).listen(port, (err) => {
      if (err) throw err;
      logger.info(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    logger.error(ex.stack);
    process.exit(1);
  });
