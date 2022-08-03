let proxyObj={};
proxyObj['/ws']={
  ws:true,
  target:"ws://172.168.180.131:8082"
};
proxyObj['/']={
  ws:false,
  target:'http://172.168.180.131:8082',
  changeOrigin: true,
  pathRewrite:{
    '^/':''
  }
}
module.exports={
  devServer:{
    // host:'localhost',
    port:8080,
    proxy:proxyObj
  }
}
