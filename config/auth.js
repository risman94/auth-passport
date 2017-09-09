// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1997750373833005', // your App ID
        'clientSecret'  : '8ab182f8e76956a3368fc9c3e543004d', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '339531750668-m6ne2j8kv6pp58e2gtt4d89kj9nrc6sp.apps.googleusercontent.com',
        'clientSecret'  : 'Ihqi7Cym5f9sl-aOVTTBlp_X',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }//,

    // 'twitterAuth' : {
    //     'consumerKey'       : 'your-consumer-key-here',
    //     'consumerSecret'    : 'your-client-secret-here',
    //     'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    // }
};