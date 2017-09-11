## authentication with passport
documentation : [passportjs](http://passportjs.org/docs)

#### passport strategies :
* passport-local
* passport-facebook
* passport-google-oauth

install
```
npm install
```

add file *config/config.json* for connect database
```json
{
	"test": {
		"PORT": "your-port",
		"MONGODB_URI": "mongodb://localhost/'your-database'"
	}
}
```

add file *config/auth.js*
```javascript
module.exports = {
    'facebookAuth' : {
        'clientID'      : '...', // your App ID
        'clientSecret'  : '...', // your App Secret
        'callbackURL'   : 'http://localhost:"your-port"/auth/facebook/callback'
    },
    'googleAuth' : {
        'clientID'      : '...', // your App ID
        'clientSecret'  : '...', // your App Secret
        'callbackURL'   : 'http://localhost:"your-port"/auth/google/callback'
    }
};
```

and run npm 
```
npm start
```