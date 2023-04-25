import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/App-LOGIN';
import ListaScreen from './screens/App-ListaContatos';
import CadastroUsuarioScreen from './screens/AppCadastroUsuario';
import CadastroContatoScreen from './screens/App-CadastroContato';
import AlterarContatoScreen from './screens/App-AlterarContato';




const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={LoginScreen} options={{headerShown: false}} />
<Stack.Screen name="Lista" component={ListaScreen} options={{headerShown: false}}  />
<Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen}  options={{headerShown: false}}  />
<Stack.Screen name="CadastroContato" component={CadastroContatoScreen}  options={{headerShown: false}}  />
<Stack.Screen name="ALTERARCONTATO" component={AlterarContatoScreen}  options={{headerShown: false}}  />





</Stack.Navigator>
</NavigationContainer>
);
}

export default App;