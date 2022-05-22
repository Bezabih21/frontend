// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  debug: true,
  urls: {
    api: 'https://staging.eltnt.com/api',
    booking_api: 'https://booking.eltnt.com/api',
    auth_api: 'https://auth.eltnt.com',
  },
  auth: {
    client_id: 'quickapp_spa',
    client_secret: 'no_password',
  },
  ports: {
    internalHotels: ':9000/api',
    bookingPort: ':9000/api',
    paymentPort: ':9003/api',
    locationPort: ':9002/api',
    identityPort: ':5001',
  },
};
