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
    backgroundColor: '#00368C',
    borderColor: '#00368C',
    borderWidth: 1,
    flex: 1,
    margin: '3%',
    padding: '3%',
    width: '35%',
  },
  buttonText: {
    color: '#FFFFFF',
  },
  buttonView: {
    flexDirection: 'row',
  },
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
    borderRadius: 4,
    marginTop: '1%',
    marginHorizontal: '2%',
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
    navigation.navigate('CreateAccount');
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
        <View style={styles.buttonView}>
          <Pressable
            title={'Submit'}
            onPress={handleSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable
            title={'Create Account'}
            onPress={handleCreate}
            style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckIn;
