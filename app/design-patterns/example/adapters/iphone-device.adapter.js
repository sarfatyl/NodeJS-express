class IphoneDeviceAdapter {

    iphone;

    constructor(iphone) {
        this.iphone = iphone;
    }

    charge() {
        this.iphone.lightning();
    }

    open() {
        this.iphone.faceId()
    }

}
module.exports = IphoneDeviceAdapter;

