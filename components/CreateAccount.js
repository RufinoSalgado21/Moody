import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: '#5D76CB',
    height: '100%',
  },
  form: {
    paddingTop: '20%',
  },
  scrollview: {
    margin: '0%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '40%',
  },
  textinput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginTop: '1%',
    marginHorizontal: '2%',
  },
});
const CreateAccount = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.scrollview}>
        <View style={styles.form}>
          <Text style={styles.text}>Enter Your Information</Text>
          <TextInput placeholder={'First Name'} style={styles.textinput} />
          <TextInput placeholder={'Last Name'} style={styles.textinput} />
          <TextInput placeholder={'Phone Number'} style={styles.textinput} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateAccount;
