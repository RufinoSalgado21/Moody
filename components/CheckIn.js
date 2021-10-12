import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: '#5D76CB',
    height: '100%',
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
  textinput: {
    backgroundColor: '#FFFFFF',
  },
});

const CheckIn = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  function handleSubmit() {
    return;
  }
  function handleCreate() {
    return;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.scrollview}>
        <Text style={styles.text}>Log In</Text>
        <TextInput
          placeholder={'Username'}
          style={styles.textinput}
          maxLength={20}
          value={user}
          onChange={event => setUser(event.target.value)}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.textinput}
          maxLength={20}
          value={pass}
          secureTextEntry={true}
          onChange={event => setPass(event.target.value)}
        />
        <Button title={'Submit'} onPress={handleSubmit}>
          Submit
        </Button>
        <Button title={'Create Account'} onPress={handleCreate}>
          Create Account
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckIn;
