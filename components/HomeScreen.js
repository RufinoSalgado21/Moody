import React from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section from './Sections';
import logo from '../resources/Free_Sample_By_Wix.png';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 7,
    borderWidth: 2,
    flex: 1,
    marginHorizontal: '9%',
    padding: '0%',
    width: '80%',
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    marginTop: '3%',
    marginBottom: '5%',
  },
  buttonView: {
    flexDirection: 'row',
  },
  container: {
    marginTop: 0,
    backgroundColor: '#242A36',
    height: '100%',
  },
  form: {
    paddingTop: '10%',
  },
  navigationBar: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    paddingVertical: '3%',
  },
  scrollview: {
    margin: '0%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: '40%',
  },
});

/*
 * Homepage component.
 */
const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.navigationBar}>
          <Text></Text>
        </View>
        <View style={styles.form}>
          <Pressable title={'Submit Info'} style={styles.button}>
            <Text style={styles.buttonText}>Monthly Check In!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
