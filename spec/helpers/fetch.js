// import 'whatwg-fetch';

// const { Response, Request, Headers, fetch } = require('whatwg-fetch');
// global.Response = Response;
// global.Request = Request;
// global.Headers = Headers;
// global.fetch = fetch;

// import { fetch as fetchPolyfill } from 'whatwg-fetch';
// glocal.fetch = fetchPolyfill.fetch;

global.fetch = () => Promise.resolve({ json: () => [] });
