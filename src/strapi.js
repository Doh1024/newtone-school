import Strapi from 'strapi-sdk-javascript';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default strapi;