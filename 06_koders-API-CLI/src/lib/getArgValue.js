function getArg(argName) {
  const argString = process.argv.find((arg) => arg.includes(argName));
  //const value = argString.split("=")[1];
  const [_, value] = argString.split("=");
  return value;
}

module.exports = getArg;
