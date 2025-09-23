import winston from 'winston'

const { configure, format, transports } = winston

configure({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json()
  ),
  transports: [new transports.File({ filename: process.env.API_LOG_FILENAME })]
})
