import * as React from 'react';
import { StatusBar, TextInput, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class App extends React.Component {
  state = {
    inputValue: ''
  
  };
  render() {
    return (
      <LinearGradient colors={['#667eea','#764ba2']} style={{flex:1}}>
      <StatusBar barStyle="light-content"/>
      <View>
        <TextInput
    style={styles.input}
    placeholder="Hi Type here to add a to do."
    placeholderTextColor={'#efff'}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={'white'}
    maxLenght={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    />
    </View>
      </LinearGradient>

    );
  }
}

const styles ={
  input:
  {
    marginTop: 30,
    paddingTop:10,
    paddingRight:15,
    paddingLeft:15,
    fontSize:34,
    color:'white',
    fontWeight:'500'
  }
}

