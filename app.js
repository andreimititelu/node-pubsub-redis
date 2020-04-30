const PubSub = require('./pubsub');
const CHANNELS = require('./channels');

/* 
const request = require('request');

const ROOT_NODE_ADDRESS = `http://localhost:3001`;
*/

const testPubSub = new PubSub();

setTimeout(() => testPubSub.publisher.publish(CHANNELS.TEST, 'foo'), 1000);
testPubSub.subscriber.subscribe(CHANNELS.TEST);