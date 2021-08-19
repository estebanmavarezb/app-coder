/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const Cita = ({item, eliminarCita}) => {
  const removerCita = (id) => {
    eliminarCita(id);
  };

  return (
    <View style={styles.contenedor}>
      <View  style={styles.cita}>
      <View>
        <Text style={styles.label}>Nombre: </Text>
        <Text style={styles.text}>{item?.nombreCompleto}</Text>
      </View>
      <View>
        <Text style={styles.label}>Email: </Text>
        <Text style={styles.text}>{item?.email}</Text>
      </View>
      <View>
        <Text style={styles.label}>Documento: </Text>
        <Text style={styles.text}>{item?.document}</Text>
      </View>
      <View>
        <Text style={styles.label}>Telefono: </Text>
        <Text style={styles.text}>{item?.cellPhone}</Text>
      </View>
      <View>
        <Text style={styles.label}>Asunto: </Text>
        <Text style={styles.text}>{item?.tipoCita}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => removerCita(item?.id) } style={styles.buttonDelete}>
          <Text style={styles.textButton}>Eliminar</Text>
        </TouchableHighlight>
      </View>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cita:{
    backgroundColor: '#fff',
    borderBottomColor : '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  buttonDelete:{
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
export default Cita;
