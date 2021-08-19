/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import Cita from './components/Cita';
import FormApp from './components/form';

const App = () => {
  const [mostrarForm, setmortrarForm] = useState(false);
  //definir citas
  const [citas, setCitas] = useState([]);

  ////funcion eliminar paciente
  const eliminarCita = id =>{
    const citasFiltradas = citas.filter( cita => cita.id !== id );
    setCitas(citasFiltradas);
  };

  /// funcion mostrar y ocultar
  const btnMostrar = () => {
    setmortrarForm(!mostrarForm);
  };

  /// funcion para cerrar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de citas</Text>
          <TouchableHighlight onPress={() => btnMostrar()} style={styles.buttonMostrar}>
            <Text style={styles.textButton}>{mostrarForm ? 'Cancelar Cita' : 'Agenda una cita'}</Text>
          </TouchableHighlight>
          <View style={styles.content}>
          {mostrarForm ? (
            <>
              <Text style={styles.text}>Crear una Cita</Text>
              <FormApp 
                citas={citas}
                setCitas={setCitas}
                setmortrarForm={setmortrarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.text}>{citas?.length > 0 ? 'Detalles de tus citas' : 'No hay citas agendadas'}</Text>
              <FlatList
                data={citas}
                renderItem={ ({item}) => <Cita item={item} eliminarCita={eliminarCita}/>}
                keyExtractor={ cita => cita?.id}
                style={styles.listado}
              />
            </>
          )}
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  content: {
    flex: 1,
    margin: '5%',
  },
  listado: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 65,
    paddingBottom: 10,
  },
  text:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonMostrar:{
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;