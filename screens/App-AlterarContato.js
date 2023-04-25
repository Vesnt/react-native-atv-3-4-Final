import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

function AlterarContatoScreen({ route, navigation }) {
  const [getNome, setNome] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getId, setId] = useState('');

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { email } = route.params;
      const { id } = route.params;

      setNome(nome);
      setEmail(email);
      setId(id);
    }
  }, []);

  function alterarDados() {
    axios.put('http://professornilson.com/testeservico/clientes/'+ getId, {
      nome: getNome,
      email: getEmail,
    })
      .then(function (response) {
        
        navigation.navigate('Lista');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function excluirDados() {


   
            axios.delete('http://professornilson.com/testeservico/clientes/' + getId)
              .then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');

                showMessage({
                  message: "Registro Excluido com sucesso",
                  type: "danger",
                });
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
         
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
            title="ALTERAR CONTATO"
            onPress={() => navigation.navigate('Lista')}
          />}

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
            autoCapitalize="none"
          />
         
        
          <View style={styles.buttonContainer}>
            <Button
              title="ALTERAR"
              buttonStyle={styles.button}
              onPress={alterarDados} />

            <Button
              title="EXCLUIR"
              buttonStyle={styles.button}
              onPress={excluirDados} />

          </View>
        </View>
      </View>
    );
  }

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
      marginTop: 70,
    },
    button: {
      paddingHorizontal: 25,
      borderRadius: 25,
    },
  });

  export default AlterarContatoScreen;
