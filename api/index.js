const regex = /^https:\/\/twikoo\.js\.org\/?$/
const localhostRegex = /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d{1,5})?\/?$/

module.exports = async (requestArg, responseArg) => {
  if (regex.test(requestArg.headers.origin) && regex.test(requestArg.headers.referer)) {
    return await require('twikoo-vercel')(requestArg, responseArg)
  } else if (localhostRegex.test(requestArg.headers.origin) && localhostRegex.test(requestArg.headers.referer)) {
    return await require('twikoo-vercel')(requestArg, responseArg)
  } else {
    return responseArg.end('')
  }
}
