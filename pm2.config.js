module.exports = [
  {
    script: 'bin/www.js',
    name: 'tick-n-vote',
    exec_mode: 'cluster',
    instances: 2,
    watch: false
  }];
