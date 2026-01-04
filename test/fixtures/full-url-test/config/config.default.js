'use strict';

exports.keys = 'foo';

exports.passportWeibo = {
  key: process.env.EGG_PASSPORT_WEIBO_CLIENT_ID || 'weibo-client-id',
  secret: process.env.EGG_PASSPORT_WEIBO_CLIENT_SECRET || 'weibo-client-secret',
};

exports.passportTwitter = {
  key: process.env.EGG_PASSPORT_TWITTER_CONSUMER_KEY,
  secret: process.env.EGG_PASSPORT_TWITTER_CONSUMER_SECRET,
};

exports.passportGithub = {
  key: 'wrong-client-id',
  secret: 'wrong-client-secret',
};
