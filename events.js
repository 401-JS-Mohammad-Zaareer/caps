'use strict';

const EventEmitter = require('events');

// Create global events pool(shared by all modules)
const capsEvents = new EventEmitter();

module.exports = capsEvents;