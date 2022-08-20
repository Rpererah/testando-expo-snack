import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View>
        <Text style={{textAlign:'center'}}>Login</Text>
        <Text>Email:</Text>
        <TextInput
        placeholder='email@exemplo.com'
        />
        <Text>Senha:</Text>
        <TextInput
        secureTextEntry
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
