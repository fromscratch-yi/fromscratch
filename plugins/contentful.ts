const contentful = require('contentful');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const isProdcution = process.env.NODE_ENV === 'production';
const config = isProdcution
  ? {
      space: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    }
  : {
      space: process.env.CTF_SPACE_ID,
      host: 'preview.contentful.com',
      accessToken: process.env.CTF_CDA_PREVIEW_TOKEN,
    };

// export `createClient` to use it in page components

export default function createClient() {
  return contentful.createClient(config);
}
