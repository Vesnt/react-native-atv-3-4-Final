import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Header, ListItem, Avatar, Icon } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { firebaseConfig } from "./firebase.js";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";




function ListaScreen({ navigation }) {

  const [list, setList] = useState([]);
  const isFocused = useIsFocused();

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  useEffect(() => {

    async function consultarDados() {

      await axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
          setList(response.data);
          console.log(response.data);
        }).catch(function (error) {
          console.log(error);

        });

    }
    consultarDados();
  }, [isFocused])


  const handleLogout = async () => {
    if (auth.currentUser) {
      try {
        await signOut(auth);
        console.log("Logout bem sucedido!");

        alert('Logout bem sucedido!');
        
        navigation.navigate('Home');


        // Logout bem sucedido
      } catch (error) {
        console.log("Ocorreu um erro ao fazer logout: " + error.message);
        // Ocorreu um erro ao fazer logout
        console.log(error.message);
      }
    } else {
      console.log("Não há usuário logado.");
    }
  };



  return (
    <View >
      <ScrollView>
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
            onPress={handleLogout}
          />}
          rightComponent={<Button
            title="+"
            onPress={() => navigation.navigate('CadastroContato')}
          />}
          centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize: 25 } }}
        />
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={() => navigation.navigate('ALTERARCONTATO',
              {
                nome: l.nome,
                email: l.email,
                id: l.id
              })}>
              <Avatar source={{ uri: 'https://www.shutterstock.com/image-illustration/generic-human-man-face-front-600w-519713383.jpg' }} />
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListaScreen;