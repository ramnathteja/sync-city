# SYNC-CITY

SYNC-CIY  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See 'Running on the Android' for notes on how to deploy the project on a live device.

### Prerequisites

[Node js](https://nodejs.org/en/download/)

[Ionic 3](https://ionicframework.com/docs/intro/installation/)

[Android Studio](https://developer.android.com/studio/install)

[Xcode](https://developer.apple.com/xcode/)



### Installing

A step by step series of examples that tell you how to get a development env running

This installation requires NODE JS to be installed in the system.

Installing Ionic

```
npm install -g ionic cordova
```

Download the zip file of the project or clone it; then go to the project folder
and install required dependencies 

```
npm install
```

## Running the tests

The project could be tested on three different platforms;
* On Web
* On Android
* On IOS

### Running on the WEB

To run tests of the project on the web, go to the project folder and run

```
$ ionic serve - local
```

This would open the project in a browser window;

![Opening Page](https://github.com/ramnathteja/sync-city/blob/master/images/ioni_serve_local_openingPage.PNG)

User can change the device frame of the project by right clicking on the project page and then
selecting inspect.

After that select the required device frame 

![Device Frame](https://github.com/ramnathteja/sync-city/blob/master/images/ionic_serve_local_iphoneXDF.PNG)

### Running on the Android

To run on an android device, Android Platform of the project has to be built using the following command

```
$ ionic cordova platform add android
```

After creating the platform folder you can test the project in either Android studio or through terminal from the project

#### Android Studio

Open Android Studio and click on open existing project and select

```
>projectFolder>SYNC_CITY>platforms>android
```

Tester can run the project after Gradle build is finished either using an emulator or a device.

The emulator or the device should be of version 27 or higher API

![alter text](https://github.com/ramnathteja/sync-city/blob/master/images/emulatorVerion.PNG)

Tester can find the logs in the logcat

#### Terminal
To run the project from the terminal the emulator should be running or the device should be connected in case of running on the device.

From the project terminal run 
```
$ ionic cordova run android
```

## Use Cases



## Built With


## Contributing


## Versioning


## Authors


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
