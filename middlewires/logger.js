const pino = require('pino')
const logger = require('pino-http')({
    // Reuse an existing logger instance
    logger: pino(),
    genReqId: function (req) { return req.id },

})

module.exports=logger