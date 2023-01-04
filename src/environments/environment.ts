// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: false,
  firebase: {
    apiKey: 'AIzaSyA0xNNXXEnKx2ePP-da2d4uzbZcdBhvJkI',
    authDomain: 'fir-course-419fe.firebaseapp.com',
    projectId: 'fir-course-419fe',
    storageBucket: 'fir-course-419fe.appspot.com',
    messagingSenderId: '691549285348',
    appId: '1:691549285348:web:e5641df55856875d0b35f1',
    measurementId: 'G-7P8WENKHZ0'
  },
  api: {
    createUser: 'https://us-central1-fir-course-419fe.cloudfunctions.net/createUser'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
