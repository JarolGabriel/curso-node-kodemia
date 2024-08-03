function logger(request, response, next) {
  console.log(`[${new Date().toISOString}] ${request.method} ${request.url}`);
  next();
}

module.exports = logger;
