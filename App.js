import { StatusBar } from 'expo-status-bar';
import { Button , Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Principal() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Cadastro" component={Cadastro}/>
        <Drawer.Screen name="Listar" component={Listar}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Cadastro() {
  return (
    <View>
      <Text>Cadastro de Clientes</Text>
      <Text></Text>
      <Text>Nome:</Text>
      <TextInput/>
      <Text>Telefone:</Text>
      <TextInput/>
      <Button title="Salvar"/>
    </View>
  );
}


function App() {
  return (
    <View>
      <Text>Principal</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Listar() {
  return (
    <View>
      <Text>Listar Clientes</Text>
      <Text></Text>
      <Text>João Silva</Text>
      <Text>(11)2342-2434</Text>
      <Text></Text>
      <Text>Maria Silva</Text>
      <Text>(11)3453-4564</Text>
      <Text></Text>
      <Text>Alfredo José</Text>
      <Text>(11)6453-3452</Text>
    </View>
  )
}

export default Principal;