'use strict';

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || 'mongodb://MongoLab-i:8Lu9GZSXvdiVCqOTDGRZL7CHOS4XN.FzDpCqHCeTKhc-@ds052827.mongolab.com:52827/MongoLab-i' || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
    options: {
      user: '',
      pass: ''
    }
  },
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'combined',
    // Stream defaults to process.stdout
    // Uncomment to enable logging to a log on the file system
    options: {
      stream: 'access.log'
    }
  },
  assets: {
    lib: {
      css: [
      ],
      js: [
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/lodash/dist/lodash.min.js',
        'public/lib/angular-google-maps/dist/angular-google-maps.min.js',
        'public/lib/angularjs-geolocation/src/geolocation.js',
        'public/lib/spin.js/spin.js',
        'public/lib/angular-spinner/angular-spinner.min.js',
        'public/lib/fastclick/lib/fastclick.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || '968149419880980',
    clientSecret: process.env.FACEBOOK_SECRET || 'fc60727d78e8fcd2e975822c8eef619e',
    callbackURL: '/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_KEY || 'k186DeKdHcNN4Vlk8lB9MmjBW',
    clientSecret: process.env.TWITTER_SECRET || '9V0X34pyjBuixI8bRwuGf639spcOWs91Q1Fb9Iq4qjDPRgsCf7',
    callbackURL: '/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || '768801944338-ms3g3ic84auevq51a2t4cld7ept7ffos.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || '5xxSzR-ltreqF7EloyCt9JVC',
    callbackURL: '/auth/google/callback'
  },
  mailer: {
    from: process.env.MAILER_FROM || 'ontappapp@gmail.com',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'ontappapp@gmail.com',
        pass: process.env.MAILER_PASSWORD || 'Cs0cs5#BVfrBR5a&ZK@Z'
      }
    }
  },
  brewerydb: {
    api: '87f92c3b32c0d8e031f828b0d03c2c2a'
  },
  predictionio: {
    eventServerIP: 'http://54.183.105.216:7070',
    resultsServerIP: 'http://54.183.105.216:8000',
    api: 'hmQhiIak1jIyaE4haGDSzUBhTd43XKZxkTfTRcyL9MPueUohvQcVdFnAB0smNQb6'
  }
};
