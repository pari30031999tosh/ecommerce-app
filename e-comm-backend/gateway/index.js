const gateway = require('fast-gateway')

const server = gateway({
  routes: [{
    prefix: '/users',
    target: 'http://127.0.0.1:8081'
  },{
    prefix: '/products',
    target: 'http://127.0.0.1:8082'
  }]
})



server.start(8080).
then(res => console.log("gateway is running at 8080"))
.catch(err => console.log(err))