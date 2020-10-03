import React,{useState} from 'react';
import { StyleSheet, TextInput, View , Button ,Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalsInput from './components/GoalsInput';




export default function App() {

  const [getGoals, setGoals] = useState([]);
  const [isActiveGoal, setIsActiveGoal] = useState(false);
  const OnPressGoal = (data) => {
    setGoals(a => [...a, {key:`${data.length}-${data}-${Math.floor((Math.random() *100)+1)}`,goal:data}]);
   
  }
  const OnDeleteGoal = (data) => {
    setGoals(a => a.filter(c => c.key != data.key));
  }
  return (
 
    <View style={style.container}>
      <Button onPress={()=> setIsActiveGoal(true)} title="Add New Goal"></Button>
      <GoalsInput isActive={isActiveGoal} isActiveState={setIsActiveGoal} onPress={OnPressGoal}/>
      <View>
        <FlatList data={getGoals} renderItem={({ item }) => {
          return (
            <GoalItem OnDeleteGoal={OnDeleteGoal} item={item}></GoalItem>
          );
        }}></FlatList>
      </View>
      </View>
     
  );
}
const style = StyleSheet.create({

  container: {
    marginTop:StatusBar.currentHeight
  },


});


