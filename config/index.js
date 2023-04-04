const OS = require("os");

module.exports = {
  port: 8082,
  IPv4: "localhost",
  agentSev: "http://192.168.0.111:1111",
  getAgent: function () {
    return {
      "/api/*": {
        target: this.agentSev
      }
    };
  },
  getIP: function () {
    try {
      const network = OS.networkInterfaces(); //获得网络接口列表。
      this.IPv4 = network[Object.keys(network)[0]][1].address;
    } catch (e) {
      this.IPv4 = "127.0.0.1";
    } finally {
      const httpStr = "http://" + this.IPv4 + ":" + this.port;

      // const opn = require("opn"); //需要使用opn插件设置自动打开浏览器，
      // opn(httpStr);
      // eslint-disable-next-line no-unsafe-finally
      return this.IPv4;
    }
  }
};
