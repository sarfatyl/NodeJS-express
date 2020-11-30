require('dotenv').config()
var mongooseService = require('./services/mongoose.service');
var deviceService = require('./services/device.service');
var express = require('express');
var AndroidDeviceAdapter = require('./adapters/android-device.adapter');
var IphoneDeviceAdapter = require('./adapters/iphone-device.adapter');
var AndroidClass = require('./classes/android.class');
var IphoneClass = require('./classes/iphone.class');
const DeviceProxy = require('./proxies/device.proxy');

var app = express();
app.use(require('./routes'));
mongooseService.connect();

var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
});


deviceService.open(new AndroidDeviceAdapter(new AndroidClass()));
deviceService.open(new IphoneDeviceAdapter(new IphoneClass()));

DeviceProxy.charge(new AndroidDeviceAdapter(new AndroidClass()));
DeviceProxy.charge(new IphoneDeviceAdapter(new IphoneClass()));

DeviceProxy.charge(new AndroidDeviceAdapter(new AndroidClass()));
DeviceProxy.charge(new IphoneDeviceAdapter(new IphoneClass()));
