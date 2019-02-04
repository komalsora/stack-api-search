// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  STACK_API_URL: 'http://api.stackexchange.com/2.2/search?order=desc&sort=relevance&site=stackoverflow&intitle=',
  STACK_API_ANS_URL: 'http://api.stackexchange.com/2.2/questions/',
  STACK_API_ANS_URL2: '/answers?order=desc&sort=activity&site=stackoverflow'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
