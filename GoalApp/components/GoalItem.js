import React from 'react';
import { TouchableOpacity, View,Text, StyleSheet} from 'react-native';

export default function GoalItem({ item, OnDeleteGoal}) {
  return (
    <TouchableOpacity onLongPress={()=> OnDeleteGoal(item)}>
            <View style={styles.GoalItemContainer}>
            <Text style={{color:"#fff"}}>{item.goal}</Text>
              </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    GoalItemContainer: {
        padding: 10,
        backgroundColor: "#2c3e50",
        color: "#fff",
        borderColor: "#000",
        borderWidth: 2,
        margin: 1,
        marginBottom:10
        
      }
})
