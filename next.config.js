// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://afe47cabd8457497fbc403ec51c1c83a-1958255376.ap-east-1.elb.amazonaws.com:9001/seccam/view',
        },
      ]
    },
};