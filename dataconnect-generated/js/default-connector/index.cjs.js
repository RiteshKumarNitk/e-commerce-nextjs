const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'e-commerce-nextjs-master',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

