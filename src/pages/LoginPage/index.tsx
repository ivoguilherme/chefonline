import {
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import Logo from '../../assets/logo.svg';
import { Input } from "../../components";
import styles from "./styles";

export const LoginPage = ({ navigation }: any) => {
  const handleAccess = () => alert('Acesso liberado')


  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../../assets/background.jpeg')} style={styles.background} />

      <View style={styles.container}>
        <Logo width="63%" />

        <Input
          placeholder="Informe seu e-mail ou telefone"
          style={{ marginTop: 36 }}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCompleteType="email"
        />

        <Input
          placeholder="Informe sua senha"
          style={{ marginTop: 16 }}
          secureTextEntry
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleAccess}
        >
          <Text style={styles.createAccount}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}