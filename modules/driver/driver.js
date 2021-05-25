'use strict';

const events = require('../../events.js');

const pickupHandler = require('./pickupHandler.js');

// Monitor the system for 'pickup' event
events.on('pickup', (event)=>pickupHandler(event));