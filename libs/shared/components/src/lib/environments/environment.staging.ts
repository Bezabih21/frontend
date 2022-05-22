// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  debug: true,
  urls: {
    api: 'http://178.62.19.85',
    auth_api: 'http://178.62.19.85',
  },
  auth: {
    client_id: 'quickapp_spa',
    client_secret: 'no_password',
  },
  ports: {
    internalHotels: ':9000/api',
    bookingPort: ':9001/api',
    paymentPort: ':9003/api',
    locationPort: ':9002/api',
    identityPort: ':5000'
  }
};
