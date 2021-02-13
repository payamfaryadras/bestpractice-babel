import winston from 'winston';
import os from 'os';

const {printf} = winston.format;

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({format:'YYYY-MM-DD hh:mm:ss'}),
      winston.format.metadata({
        fillExcept: ['timestamp', 'service', 'level', 'message'],
      }),
      winston.format.prettyPrint(),
      winston.format.colorize(),
      this.winstonConsoleFormat(),
    ),
  }),
  new winston.transports.File({
    filename: "./logs/" + name + ".log",
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.metadata(),
      winston.format.json()
    )
  })
]  

class Logger {
  constructor(name,options={}) {
    this.name = name;
    this.hostname = os.hostname;
    if(process.env.NODE_ENV == 'development')
    this.logger = winston.createLogger({
      level: options.logLevel,
      defaultMeta: { sevice: this.name },
      transports ,
    })
  }

  debug(log, metadata) {
    this.log("debug", log, metadata);
  }

  info(log, metadata) {
    this.log("info", log, metadata);
  }

  warn(log, metadata) {
    this.log("warn", log, metadata);
  }

  error(log, metadata) {
    this.log("error", log, metadata);
  }

  log(level, log, metadata) {
    const metadataObject = {}
    if (metadata) metadataObject.metadata = metadata

    this.logger[level](log, metadataObject)
  }

  winstonConsoleFormat() {
    return printf(({ timestamp, level, message, metadata }) => {
      const metadataString = metadata != null ? JSON.stringify(metadata) : ''

      return `[${timestamp}][${level}][${this.name}@${
        this.hostname
      }] ${message}. ${'metadata: ' + metadataString}`
    })
  }
}

module.exports = Logger;

module.getLogger = (name) => {
  return new Logger(name)
}
