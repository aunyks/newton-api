import operations from '../../../../lib/operations.js'

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  // Get the math function operation based
  // on the operation that we're given
  const f = operations[req.query.operation]

  // If the url isn't malformed, send our response
  // with an answer. If not, send an error response
  if (f === undefined) {
    res.statusCode = 400
    res.json({
      error: 'Unknown operation'
    })
  } else {
    // Compute the requested calculation and respond.
    // If we cannot compute it properly (error thrown),
    // then tell the client
    try {
      // The result from passing the data parameter
      // to the operation function
      req.query.data = req.query.data.split('(over)').join('/')
      const computation = f(req.query.data)
      res.statusCode = 200
      res.json({
        operation: req.query.operation,
        expression: req.query.data,
        result: computation
      })
    } catch (err) {
      // Record this error
      console.error(err)
      res.statusCode = 500
      // Let the client know of our inability to
      // perform the requested calculation
      res.json({ error: 'Unable to perform calculation' })
    }
  }
}
