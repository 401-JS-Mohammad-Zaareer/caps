'use strict';

function deliveredHandler() {
    setTimeout(()=>{
        console.log('VENDOR: Thank you');
    });
}

module.exports = deliveredHandler;