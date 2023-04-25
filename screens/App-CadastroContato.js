import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const CadastroContatoScreen = ({ navigation }) => {
  const [getNome, setNome] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getTelefone, setTelefone] = useState('');
  const [getCpf, setCpf] = useState('');


  async function inserirDados() {

    await axios.post('http://professornilson.com/testeservico/clientes'
      , {

        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
        email: getEmail,


      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);

      });

  }

  return (


    <View>

      <Header
        leftComponent={<Button
          icon={
            <Icon
              nome="arrow-left"
              size={20}
              color="white"
            />
          }
          title=""
          onPress={() => navigation.navigate('Lista')}
        />}


        centerComponent={{ text: 'Cadastro de Contatos', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles.container}>
        <Input
          placeholder="Nome"
          onChangeText={(text) => setNome(text)}
          value={getNome}
          autoCapitalize="words"
        />

        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          placeholder="Telefone"
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
          keyboardType="decimal-pad"
          autoCapitalize="none"
        />
        <Input
          placeholder="Cpf"
          onChangeText={(text) => setCpf(text)}
          value={getCpf}
          keyboardType="decimal-pad"
          autoCapitalize="none"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="SALVAR"
            buttonStyle={styles.button}
            onPress={inserirDados} />



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
    marginBottom: 60,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});

export default CadastroContatoScreen;
