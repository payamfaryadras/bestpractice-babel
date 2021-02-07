import winston from 'winston'
const {printf} = winston.format;
class Logger {
  constructor(name,logConfig={}) {
    this.logger = winston.createLogger({
      level: logConfig.level,
      defaultMeta: { sevice: name },
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp('yyyy-mm-dd'),
            winston.format.metadata({
              fillExcept: ['timestamp', 'service', 'level', 'message'],
            }),
            winston.format.colorize(),
            this.winstonConsoleFormat(),
          ),
        }),
      ],
    })
  }

  info(log, metadata) {
    this.logger.info(log, metadata)
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

module.exports = new Logger(process.env.APP_NAME)

module.getLogger = (name) => {
  return new Logger(name)
}
