// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.sunkay.meteor-boiler',
  name: 'meteor-boiler',
  description: 'Meteor boiler application',
  author: 'sunkay',
  email: 'sunkay11@gmail.com',
  website: 'http://sunkay.github.io'
});

// Set up resources such as icons and launch screens.
App.icons({
  // iOS
  'iphone': 'resources/icons/boiler-wrench/ios/Icon-Small-50.png',
  'iphone_2x': 'resources/icons/boiler-wrench/ios/Icon-Small-50@2x.png',
  'ipad': 'resources/icons/boiler-wrench/ios/Icon-72.png',
  'ipad_2x': 'resources/icons/boiler-wrench/ios/Icon-72@2x.png',

  'android_hdpi':'resources/icons/boiler-wrench/android/ic_launcher_boiler-wrench/drawable-hdpi/ic_launcher_boiler-wrench.png'
  'android_ldpi':'resources/icons/boiler-wrench/android/ic_launcher_boiler-wrench/drawable-ldpi/ic_launcher_boiler-wrench.png'
  'android_mdpi':'resources/icons/boiler-wrench/android/ic_launcher_boiler-wrench/drawable-mdpi/ic_launcher_boiler-wrench.png'
  'android_xhdpi':'resources/icons/boiler-wrench/android/ic_launcher_boiler-wrench/drawable-xhdpi/ic_launcher_boiler-wrench.png'

});

App.launchScreens({

    // iOS
  'iphone': 'resources/splash/ios/Default.png',
  'iphone_2x': 'resources/splash/ios/Default@2x.png',
  'iphone5': 'resources/splash/ios/Default-568h@2x.png',
  //'ipad_portrait': 'resources/splash/splash-768x1024.png',
  //'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  //'ipad_landscape': 'resources/splash/splash-1024x768.png',
  //'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  'android_ldpi_portrait': 'resources/splash/android/images/res-long-port-ldpi/default.png',
  'android_ldpi_landscape': 'resources/splash/android/images/res-long-land-ldpi/default.png',
  'android_mdpi_portrait': 'resources/splash/android/images/res-long-port-mdpi/default.png',
  'android_mdpi_landscape': 'resources/splash/android/images/res-long-land-mdpi/default.png',
  'android_hdpi_portrait': 'resources/splash/android/images/res-long-port-hdpi/default.png',
  'android_hdpi_landscape': 'resources/splash/android/images/res-long-land-hdpi/default.png',
  'android_xhdpi_portrait': 'resources/splash/android/images/res-long-port-xhdpi/default.png',
  'android_xhdpi_landscape': 'resources/splash/android/images/res-long-land-xhdpi/default.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

/*
// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});
*/
