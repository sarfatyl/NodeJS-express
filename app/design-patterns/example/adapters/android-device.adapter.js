class AndroidDeviceAdapter {

    android;

    constructor(android) {
        this.android = android;
    }

    charge() {
        this.android.typeC();
    }

    open() {
        this.android.fingerprint();
    }

}
module.exports = AndroidDeviceAdapter;

