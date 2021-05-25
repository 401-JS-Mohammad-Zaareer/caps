'use strict';
const timeStamp = require('../../timestamp.js');
const events = require('../../events.js');

function pickupHandler(event) {
    setTimeout(()=> {
        console.log('DRIVER: picked up ' + event.payload.orderId);
    
        events.emit('in-transit', {
            event: 'in-transit',
            time:timeStamp(),
            payload: event.payload
        });
        console.log('DRIVER: delivered up ' + event.payload.orderId);
        
        setTimeout(()=>{
            events.emit('delivered', {
                event: 'delivered',
                time:timeStamp(),
                payload:event.payload   
             });
             console.log('DRIVER: delivered');
        },3000);
    },1000); 
}

module.exports = pickupHandler;