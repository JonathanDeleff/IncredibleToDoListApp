import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: '100%',
      },
});

export default MainLayout;