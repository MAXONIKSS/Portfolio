(function () {
  function isConfigValid(config) {
    if (!config) {
      return false;
    }
    var required = ["apiKey", "authDomain", "projectId", "appId"];
    return required.every(function (key) {
      return typeof config[key] === "string" && config[key].trim().length > 0 && !config[key].startsWith("PUT_");
    });
  }

  var config = window.__firebaseConfig;

  if (typeof firebase === "undefined") {
    window.__adminAuth = {
      isConfigured: false,
      reason: "Firebase SDK не завантажено"
    };
    return;
  }

  if (!isConfigValid(config)) {
    window.__adminAuth = {
      isConfigured: false,
      reason: "Firebase config не заповнено у firebase-config.js"
    };
    return;
  }

  try {
    var app = firebase.apps && firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(config);
    var auth = app.auth();
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(function () {
      return null;
    });

    window.__adminAuth = {
      isConfigured: true,
      signIn: function (email, password) {
        return auth.signInWithEmailAndPassword(email, password);
      },
      signInWithGoogle: function () {
        return auth.signInWithPopup(googleProvider);
      },
      signOut: function () {
        return auth.signOut();
      },
      onChange: function (callback) {
        return auth.onAuthStateChanged(callback);
      }
    };
  } catch (error) {
    window.__adminAuth = {
      isConfigured: false,
      reason: error && error.message ? error.message : "Помилка ініціалізації Firebase"
    };
  }
})();
