'use strict';

const Events = require('events');

// create global event loop for caps system
const capsEvents = new Events();

module.exports = capsEvents;