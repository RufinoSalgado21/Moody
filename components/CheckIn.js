import React, {useState} from 'react';
import {
  Image,
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
    borderRadius: 7,
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
  header: {
    color: '#FFFFFF',
    fontSize: 50,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'center',
    marginTop: '20%',
  },
  image: {
    marginHorizontal: '25%',
  },
  scrollview: {
    margin: '0%',
    height: '50%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '1%',
  },
  textinput: {
    backgroundColor: '#242A36',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderRadius: 4,
    color: '#FFFFFF',
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
      <ScrollView style={styles.scrollview}>
        <Text style={styles.header}>Moody</Text>
        <Text style={styles.text}>Log In</Text>
        <TextInput
          placeholder={'Username'}
          placeholderTextColor={'white'}
          style={styles.textinput}
          maxLength={20}
          value={user}
          onChange={event => setUser(event.target.value)}
        />
        <TextInput
          placeholder={'Password'}
          placeholderTextColor={'white'}
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
