'use strict';

function inTransitHandler(event) {
    setTimeout(()=>{
        console.log('VENDOR: Thank you for delivering ' + event.payload.orderId);
    });
}

module.exports = inTransitHandler;