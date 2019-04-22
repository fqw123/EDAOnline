const serverInfoRecorder = require('./serverInfoRecorder');
const rootServerInfoRecorder = require('./rootServerInfoRecorder');

module.exports.getServerName = function () {
    return serverInfoRecorder.serverName;
}
module.exports.getServerToken = function () {
    return serverInfoRecorder.serverToken;
}
module.exports.setRootServerIp = function (ip) {
    rootServerInfoRecorder.setIp(ip);
}
module.exports.getRootServerIp = function () {
    return rootServerInfoRecorder.getIp();
}
module.exports.setRootServerPort = function (port) {
    rootServerInfoRecorder.setPort(port);
}
module.exports.getRootServerPort = function () {
    return rootServerInfoRecorder.getPort();
}