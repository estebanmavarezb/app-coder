/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, ScrollView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const FormApp = ({citas, setCitas, setmortrarForm}) => {
  /////tiempo y hora
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  //validacion
  const [nombreCompleto, setnombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [tipoCita, settipoCita] = useState('');
  /////tiempo y hora
  const [fechaDate, setfechaDate] = useState('');
  const [fechaTime, setfechaTime] = useState('');

  /// funciones de hora y fecha
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDate = (date) => {
    const optionDate = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    setfechaDate(date.toLocaleDateString('es-ES', optionDate));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmTime = (time) => {
    const optionTime = {
      hour: '2-digit',
      minute: '2-digit',
    };
    setfechaTime(time.toLocaleString('en-US', optionTime));
    hideTimePicker();
  };

  ///funcion de agendar las citas
  const agendarCita = () =>{
    if (
      nombreCompleto.trim() === '' ||
      email.trim() === '' ||
      document.trim() === '' ||
      cellPhone.trim() === '' ||
      tipoCita.trim() === '' ) {
      mostrarAlerta();
      return;
    }
    const crearCita = {
      nombreCompleto,
      email,
      document,
      cellPhone,
      tipoCita,
    };

    crearCita.id = shortid.generate();
    console.log(crearCita)
    const citasNew = [...citas, crearCita];
    setCitas(citasNew);

    ///ocualtar y resetear form
    setmortrarForm(false);
  };

  ///muestra una alerta si no se llenan los campos
  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
      [{
        text: 'OK',
      }],
    );
  };
    return (
       <>
        <ScrollView style={styles.contenedorForm}>
          <View>
              <Text style={styles.label}>Nombre Completo:</Text>
              <TextInput
                style={styles.input}
                onChangeText={texto => setnombreCompleto(texto)}
                autoCorrect={false}
              />
          </View>
          <View>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => setEmail(texto)}
                autoCorrect={false}
                keyboardType={'email-address'}
              />
          </View>
          <View>
              <Text style={styles.label}>Documento:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => setDocument(texto)}
                autoCorrect={false}
                keyboardType={'numeric'}
              />
          </View>
          <View>
              <Text style={styles.label}>Telefono:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => setCellPhone(texto)}
                autoCorrect={false}
                keyboardType={'phone-pad'}
              />
          </View>

          <View style={styles.buttoDate}>
            <Text style={styles.labelHora}>Fecha:</Text>
            <Button title="Selecciona fecha" onPress={showDatePicker}/>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={confirmDate}
              onCancel={hideDatePicker}
            />
            <Text style={styles.label}>{`${fechaDate}`}</Text>
          </View>
          <View style={styles.buttoDate}>
            <Text style={styles.labelHora}>Hora:</Text>
            <Button title="Selecciona hora" onPress={showTimePicker}/>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={confirmTime}
              onCancel={hideTimePicker}
            />
            <Text style={styles.label}>{`${fechaTime}`}</Text>
          </View>
          <View>
              <Text style={styles.label}>Asunto:</Text>
              <TextInput
                style={styles.input}
                multiline
                onChangeText={(texto) => settipoCita(texto)}
                autoCorrect={false}
              />
          </View>
          <View>
            <TouchableHighlight onPress={() => agendarCita()} style={styles.buttonSubmit}>
              <Text style={styles.textButton}>Agendar cita</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
       </>
    );
};
const styles = StyleSheet.create({
    contenedorForm:{
      backgroundColor: '#fff',
      padding: 10,
    },
    label: {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 16,
    },
    input: {
      height: 50,
      borderColor: '#e1e1e1',
      borderWidth: 2,
      borderStyle: 'solid',
      paddingHorizontal: 5,
    },
    buttoDate: {
      marginVertical: 5,
    },
    labelHora:{
      marginBottom: 5,
      fontWeight: 'bold',
      color: '#000',
      fontSize: 18,
    },
    buttonSubmit:{
      marginTop: 5,
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
export default FormApp;
