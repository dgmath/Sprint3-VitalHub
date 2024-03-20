import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const InputSelect = () => {
  return (
    <View style={{ 
      width : 350,
      marginBottom: 20
      }}>
      <RNPickerSelect
        style={style}
        Icon={() => {
          return <FontAwesomeIcon icon={faCaretDown} color='#34898F' size={22}/>
        }}
        placeholder={{
          label : 'Selecione horário',
          value : null,
          color : '#34898F'
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "14:00", value: "14:00" },
          { label: "15:00", value: "15:00" },
          { label: "16:00", value: "16:00" },
          { label: "17:00", value: "17:00" },
          { label: "18:00", value: "18:00" },
          { label: "19:00", value: "19:00" },
        ]}
      />
    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems : 'center',
    justifyContent : 'center',
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent : 'center',
    
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  iconContainer : {
    top : '25%',
    marginRight : 10
  },
  placeholder : {
    color: '#34898F',
  }
})

export default InputSelect

