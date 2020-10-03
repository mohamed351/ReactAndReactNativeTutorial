import React, { useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal, StatusBar } from 'react-native';


export default function GoalsInput(props) {
    const [getGoal, setGoal] = useState('');
    const onButtonPress = () => {
      props.onPress(getGoal);
      props.isActiveState(false);
      setGoal("");

    }

  return (
    <Modal  visible={props.isActive} animationType="slide">
      <View style={style.modalContainer}>
    <View style={style.controlsContainer}>
          <TextInput style={style.InputText} placeholder="Goal" value={getGoal} onChangeText={ (e)=> setGoal(e)} ></TextInput>
    <View style={style.button}>
            <Button title="Add" onPress={onButtonPress}></Button>
          
      </View>
        </View>
        <View style={{position:"absolute", left:"85%", top:StatusBar.currentHeight-10}}>
          <Button title="Close" color="#c0392b" onPress={() => props.isActiveState(false)}></Button>
          </View>
        </View>
      </Modal>
  );
}

const style = StyleSheet.create({
    controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  
    },
  
    InputText: {
      flex: 3,
      marginLeft:10,
      marginRight:10,
      borderColor: "#333",
      borderWidth: 2,
      paddingLeft:5
    },
    button: {
      flex: 1,
      marginRight:10,
  },
  modalContainer: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    flex:1
  }
  });
