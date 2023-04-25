import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Header, Icon } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase.js";


const CadastroUsuarioScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const app = initializeApp(firebaseConfig);


  const handleSignup = async () => {
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, {
        displayName: name,
        email: email,
      });
      console.log('Usuário criado com sucesso!', userCredential.user);
      navigation.navigate('Lista');
    } catch (error) {
      console.log('Erro ao criar usuário:', error);
    }
  };

  return (



    <View>
      <Header
        leftComponent={<Button
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
          title=""
          onPress={() => navigation.navigate('Lista')}
        />}


        centerComponent={{ text: 'Cadastrar Usuário', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles.container}>


        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button
            title="SALVAR"
            buttonStyle={styles.button}
            onPress={handleSignup} />


        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  title: {
    marginBottom: 25,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default CadastroUsuarioScreen;
