import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import Logo from '../../assets/logo.svg';

export const LoginPage = ({ navigation }: any) => {
  const handleAccess = () => {
    alert('Acesso liberado')
  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../../assets/background.jpeg')} style={styles.background} />

      <View style={styles.container}>
        <Logo width="63%" />

        <TextInput
          placeholder="Informe seu e-mail ou telefone"
          style={[styles.input, { marginTop: 36 }]}
          placeholderTextColor="#A6A3A3"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCompleteType="email"
        />

        <TextInput
          placeholder="Informe sua senha"
          style={[styles.input, { marginTop: 16 }]}
          placeholderTextColor="#A6A3A3"
          secureTextEntry
        />

        <TouchableOpacity activeOpacity={0.8} onPress={handleAccess}>
          <Text style={styles.createAccount}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    opacity: .7,
    position: 'absolute',
    backgroundColor: 'red'
  },
  input: {
    backgroundColor: '#fff',
    height: 45,
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  createAccount: {
    width: 268,
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#BD1616',
    borderRadius: 7,
    marginTop: 36,
    color: '#fff',
    fontWeight: 'bold',
  }
})