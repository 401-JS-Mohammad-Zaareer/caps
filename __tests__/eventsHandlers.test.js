'use strict';

require('dotenv').config();
const timeStamp = require('../timestamp');
const faker = require('faker');
const events = require('../events');
const pickupHandler = require('../modules/driver/pickupHandler');
const deliveredHandler = require('../modules/vendor/deliveredHandler');
const inTransitHandler = require('../modules/vendor/inTransitHandler');

const fakeOrder = {
    storeName: process.env.STORE_NAME,
    orderId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress()
}

describe('System\'s monitor working well', ()=>{
    let spyCons;
    beforeEach(()=>{
        spyCons = jest.spyOn(console, 'log').mockImplementation();
        jest.useFakeTimers();
    });
    afterEach(()=>{
        spyCons.mockRestore();
    });

    test('pickupHandler',()=>{
        pickupHandler({
            event: 'pickup',
            time:timeStamp(),
            payload:fakeOrder
        });
        jest.runAllTimers();
        expect(spyCons).toHaveBeenCalled();
    });
    
    test('deliveredHandler', ()=>{
        deliveredHandler();       
        jest.runAllTimers();
        expect(spyCons).toHaveBeenCalled();
    });
    
    test('inTransitHandler', ()=>{
        inTransitHandler({
            event: 'pickup',
            time:timeStamp(),
            payload:fakeOrder
        });
        jest.runAllTimers();
        expect(spyCons).toHaveBeenCalled();
    });
});