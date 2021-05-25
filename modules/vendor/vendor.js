'use strict';

require('dotenv').config();
const events = require('../../events.js');
const faker = require('faker');
const timeStamp = require('../../timestamp.js');
const deliveredHandler = require('./deliveredHandler.js');
const inTransitHandler = require('./inTransitHandler.js');


// Simulate a new customer order every 5 seconds
setInterval(()=> {
    let fakeOrder = {
        storeName: process.env.STORE_NAME,
        orderId: faker.datatype.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    events.emit('pickup', {
        event: 'pickup',
        time:timeStamp(),
        payload:fakeOrder
    });
},5000);

// Monitor the system for 'delivered' event
events.on('delivered', deliveredHandler);

// Monitor the system for 'in-transit' event
events.on('in-transit', (event)=> inTransitHandler(event));


