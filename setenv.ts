const { writeFile } = require('fs');

const targetPath = './src/environments/environment.ts';

// we have access to our environment variables in the process.env
const environmentFileContent = `
export const environment = {
  production: true
};

export const Config = {
  api_key: '${process.env.ANGULAR_APP_CONTENTSTACK_API_KEY}',
  delivery_token: '${process.env.ANGULAR_APP_CONTENTSTACK_DELIVERY_TOKEN}',
  environment: '${process.env.ANGULAR_APP_CONTENTSTACK_PUBLISH_ENVIRONMENT}',
  region: '${process.env.REGION || 'us'}'
};`;

// write the content to the respective file if env exists
if (process.env.ANGULAR_APP_CONTENTSTACK_API_KEY
    && process.env.ANGULAR_APP_CONTENTSTACK_DELIVERY_TOKEN
    && process.env.ANGULAR_APP_CONTENTSTACK_PUBLISH_ENVIRONMENT)
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
  });