'use strict';

const events = require('./events.js');

// require clients
require('./modules/vendor/vendor.js');
require('./modules/driver/driver.js');

events.on('pickup', (event)=>{
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  NEW ORDER  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    console.log('EVENT', event);
});
events.on('in-transit', (event)=> {
    console.log();
    console.log('EVENT', event);
});
events.on('delivered', (event)=>{
    console.log();
    console.log('EVENT', event);
});