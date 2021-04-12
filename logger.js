const log4js = require('log4js');

log4js.configure({
  appenders: { app: { type: 'file', filename: 'logs/app.log' } },
  categories: { default: { appenders: ['app'], level: 'info' } }
});
 
const logger = log4js.getLogger('app');
module.exports = logger;