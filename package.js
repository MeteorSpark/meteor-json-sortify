Package.describe({
  name: 'meteorspark:json-sortify',
  summary: 'A deterministic version of JSON.stringify',
  version: '0.1.0',
  git: 'https://github.com/MeteorSpark/meteor-json-sortify'
});

both = ['server', 'client'];
server = 'server';
client = 'client';

Package.onUse(function (api) {
  api.add_files('JSON.sortify/index.js', both);
});
