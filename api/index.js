module.exports = require('twikoo-vercel')

module.exports = async (requestArg, responseArg) => {
  console.log(JSON.stringify(requestArg.headers))
  return await require('twikoo-vercel')(requestArg, responseArg)
}
