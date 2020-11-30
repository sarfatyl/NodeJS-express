const Device = require('../services/device.service')


class DeviceProxy {
    static instance = null;
    device = Device;
    numOfAvailablePorts = 3;

    constructor() {
        if(!DeviceProxy.instance) {
            DeviceProxy.instance = this;
        }
        return DeviceProxy.instance;
    }

    charge(device){
        if(this.numOfAvailablePorts>0) {
            this.numOfAvailablePorts--;
            this.device.charge(device);
        }else {
            console.log('There are missing ports',);

        }
    }

    open(){

    }
}
const instance = new DeviceProxy();
// Object.freeze(instance);
module.exports = instance;


