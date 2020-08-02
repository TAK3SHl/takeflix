const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://devsoutinhoflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};