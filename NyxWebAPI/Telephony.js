'use strict';
define('NyxWebAPI/Telephony', [], function() {
  if (!window.navigator.mozTelephony) {
    // Throwing an exception to interrupt the whole application,
    // because we have an unsatisfied requirement, so the program
    // should not run anymore;
    throw new Error('required a non-exist API: Telephony');
  }
  return window.navigator.mozTelephony;
});
