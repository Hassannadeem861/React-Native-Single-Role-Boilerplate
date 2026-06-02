import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../assets/SplashScreen/SplashScreenBackground1.png');

const AuthScreenWrapper = ({ children, style, contentContainerStyle }) => {
  const safeAreaStyle = StyleSheet.flatten([styles.safeArea, style]);
  const safeAreaTransparent = { ...safeAreaStyle, backgroundColor: 'transparent' };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <SafeAreaView style={safeAreaTransparent}>
        <View style={[styles.contentContainer, contentContainerStyle]}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
  },
});

export default AuthScreenWrapper;
