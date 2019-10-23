#!/usr/bin/env node

require('./env.js');

const program = require('commander');
const Twitter = require('twitter');
const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
};
const twitter = new Twitter(config);


/*
 * COMMANDER
 * */

program.version('0.0.1');

program
  .option('-s, --search <query | count>', 'query and [optional] count', searchStatuses)
  .option('-h', 'TODO: add help', () => 'howdy!');

program.parse(process.argv);



/*
 * HELPER FNS
 * */

function searchStatuses (valueString) {
  const [ query, count ] = valueString.split(' | ');
  const params = {
    q: query,
    count: count || 10,
    result_type: 'recent',
    lang: 'en',
  };

  twitter.get('search/tweets', params, function (err, data, response) {
    if (!err) {
      data.statuses.forEach(d => {
        console.log(`${d.user.screen_name} :: ${d.text}\n\n`);
      });
    } else {
      console.log('err', err);
    }
  });
}

