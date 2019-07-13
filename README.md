## Installation Guides for Application:
### react-native-firebase setup:
```
npm install --save react-native-firebase
```

```
react-native link react-native-firebase
```

### Set up firebase project and initialize android project: 
```
a) Set the package name to the package name specified in android/app/src/main/AndroidManifest.xml
b) copy and paste google-services.json into android/app/
```

### File configurations and modifications:
```
a) Add "classpath ..." into android/build.gradle
b) Add "apply plugin ..." into android/app/build.gradle
c) Add firebase modules into android/app/build.gradle
d) Update the gradle URL "../gradle-4.10.1-all.zip" in android/gradle/wrapper/gradle-wrapper.properties
e) Check that google() exists in android/build.gradle
f) Update Android build tools to version 3.3.2 android/build.gradle
g) Update all compile statements to be implementation in android/app/build.gradle
h) Add the required reference to the repositories section of the project level build.gradle (android/build.gradle)
    (Google Play services from 11.2.0 onwards require their dependencies to be downloaded from Google's Maven respository)
```

### Adding RNFirebaseFirestorePackage:

a) Add implementation "com.google.firebase:firebase-firestore:17.0.2" into android/app/build.gradle<br/>
b) Add the following lines into android/app/src/main/java/com/rn_firestore_android/MainApplication.java:
```
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
new RNFirebaseFirestorePackage(),
```
[Latest Firebase SDKs' versions]: https://firebase.google.com/support/release-notes/android

### Bug Fixing
Add the "multiDexEnabled true" app/build.gradle:

```Gradle
android {
    defaultConfig {
       multiDexEnabled true
    }
}
```

## Start using Firebase firestore:
```javascript
import firebase from 'react-native-firebase';
```

# NOTE: JUST SHARING. AT LEAST WORK FOR ME xD
