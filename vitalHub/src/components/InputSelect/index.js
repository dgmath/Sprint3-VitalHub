import RNPickerSelect from "react-native-picker-select";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import moment from "moment";
import { useEffect, useState } from "react";

const InputSelect = ({ setHoraSelecionada }) => {

  const dataAtual = moment().format('YYYY-MM-DD');

  const [arrayOptions, setArrayOptions] = useState(null);

  async function loadOptions() {
    //Capturar a quantidade que faltam para acabar o dia
    const horasRestantes = moment(dataAtual).add(24, 'hours').diff(moment(), 'hours');
    console.log(horasRestantes);

    //Criar um laço que rode a quantidade de horas
    const options = Array.from({ length: horasRestantes }, (_, index) => {
      let valor = new Date().getHours() + (index + 1)

      return {
        label: `${valor}:00`, value: `${valor}:00`
      }
    })

    //para cada hora sera uma nova option

    setArrayOptions(options)

  }

  useEffect(() => {
    loadOptions()
  }, [])
  useEffect(() => {
    console.log(arrayOptions);
  }, [])

  return (
    <View style={{
      width: 350,
      marginBottom: 20
    }}>
      {arrayOptions ? (
        <RNPickerSelect
          style={style}
          Icon={() => {
            return <FontAwesomeIcon icon={faCaretDown} color='#34898F' size={22} />
          }}
          placeholder={{
            label: 'Selecione horário',
            value: null,
            color: '#34898F'
          }}
          onValueChange={(value) => setHoraSelecionada(value)}
          items={arrayOptions}
        />) : (<ActivityIndicator/>)}

    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'MontserratAlternates_600SemiBold'
  },
  iconContainer: {
    top: '25%',
    marginRight: 10
  },
  placeholder: {
    color: '#34898F',
  }
})

export default InputSelect

