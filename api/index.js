const regex = /^https:\/\/twikoo\.js\.org\/?$/

module.exports = async (requestArg, responseArg) => {
  if (regex.test(requestArg.headers.origin) && regex.test(requestArg.headers.referer)) {
    return await require('twikoo-vercel')(requestArg, responseArg)
  } else {
    return responseArg.end('');
  }
}
