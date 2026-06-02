import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigation.jsx';
// import { store } from './src/redux/store';
// import { Provider } from 'react-redux';


const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator />
    </GestureHandlerRootView>
    // <Provider store={store}>
    //   <AppNavigator />
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})