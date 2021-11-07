import React, {useState} from 'react';
import {
  Pressable,
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
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    margin: '3%',
    padding: '3%',
    width: '35%',
  },
  buttonText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
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
    paddingTop: '20%',
  },
  scrollview: {
    margin: '0%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '25%',
  },
  textinput: {
    backgroundColor: '#242A36',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderRadius: 7,
    marginTop: '1%',
    color: '#FFFFFF',
    marginHorizontal: '2%',
  },
});
const CreateAccount = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [phone, setPhone] = useState('');
  function handleSubmitInfo() {
    navigation.navigate('Home');
  }
  function handleGoBack() {
    navigation.navigate('Checkin');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.scrollview}>
        <View style={styles.form}>
          <Text style={styles.text}>Enter Your Information</Text>
          <TextInput
            placeholder={'Username'}
            placeholderTextColor={'white'}
            value={user}
            style={styles.textinput}
            maxLength={20}
            onChange={event => setUser(event.target.value)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'Password'}
            placeholderTextColor={'white'}
            value={pass}
            style={styles.textinput}
            onChange={event => setPass(event.target.value)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'Confirm Password'}
            placeholderTextColor={'white'}
            value={passConfirm}
            style={styles.textinput}
            onChange={event => setPassConfirm(event.target.value)}
          />
          <TextInput
            placeholder={'Phone Number'}
            placeholderTextColor={'white'}
            value={phone}
            style={styles.textinput}
            onChange={event => setPhone(event.target.value)}
          />
          <View style={styles.buttonView}>
            <Pressable
              title={'Submit Info'}
              onPress={handleSubmitInfo}
              style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable
              title={'Go Back'}
              onPress={handleGoBack}
              style={styles.button}>
              <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateAccount;
