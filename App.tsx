import React from 'react';
import AlertWeb from "react-native-awesome-alerts";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo"
var board = ["plus","plus","plus","plus","plus","plus","plus","plus","plus"]

export default class App extends React.Component {
  
  constructor(props: any){
    super(props)
    this.state = {
      isCross:true
    }
  }
  drawItem(number: any){
    if(board[number]=="plus" && this.winGame()==""){
      if(this.state.isCross){
        board[number] = "cross" 
      }
      else  
        board[number] = "circle"


      this.setState({isCross:!this.state.isCross})  
      if(this.winGame()!="")
        Alert.alert(this.winGame()+" Won The Game")   
    }
   
  }

  resetGame = () => {
    this.setState({isCross:true}) 
    board=["plus","plus","plus","plus","plus","plus","plus","plus","plus"]
  }

  chooseItemColor = (number: any) => {
    if(board[number]=="cross")
      return "#FF3031"
    else if(board[number]=="circle")
      return "#45CE30"
      
    return "#B4F8C8"  
  }

  winGame = () => {
    if(board[0] != "plus" && board[0] == board[1] && board[1] == board[2]){
      return board[0]
    }else if(board[3] != "plus" && board[3] == board[4] && board[4] == board[5]){
      return board[3]
    }else if(board[6] != "plus" && board[6] == board[7] && board[7] == board[8]){
      return board[6]
    }else if(board[0] != "plus" && board[0] == board[3] && board[3] == board[6]){
      return board[0]
    }else if(board[1] != "plus" && board[1] == board[4] && board[4] == board[7]){
      return board[1]
    }else if(board[2] != "plus" && board[2] == board[5] && board[5] == board[8]){
      return board[2]
    }else if(board[0] != "plus" && board[0] == board[4] && board[4] == board[8]){
      return board[0]
    }else if(board[2] != "plus" && board[2] == board[4] && board[4] == board[6]){
      return board[2]
    }else{
      return ""
    }
  }

  render(){
   
    return (
      <View style={styles.container}>
        <Text style={{color:"#FFC0CB",margin: 15 ,fontSize:50, fontWeight:"bold", fontFamily: "Cochin",textShadowColor:'#000', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10}}>Tic Tac Toe</Text>
        <View style={{flexDirection:"row"}}>   
        <View style={styles.line}></View>        
        <View style={[styles.line, {transform: [{translateX:210},{translateY:20}]}]} ></View>        
        <View style={styles.col} ></View>  
        <View style={[styles.col, {transform: [{translateY:220},{translateX:8}]}]} ></View>  
        <TouchableOpacity style={{margin:10,padding:10}} onPress={() => this.drawItem(0)}>
          <Entypo name={board[0]} size={64} color={this.chooseItemColor(0)} />
        </TouchableOpacity>          
        <TouchableOpacity style={{margin:10,padding:10}}  onPress={() => this.drawItem(1)}>
          <Entypo name={board[1]} size={64} color={this.chooseItemColor(1)} />
        </TouchableOpacity>          
        <TouchableOpacity style={{margin:10,padding:10}} onPress={() => this.drawItem(2)}>
          <Entypo name={board[2]} size={64} color={this.chooseItemColor(2)} />
        </TouchableOpacity>          
        </View>              
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{margin:10,padding:10}} onPress={() => this.drawItem(3)}>
            <Entypo name= {board[3]} size={64} color={this.chooseItemColor(3)} />
          </TouchableOpacity>          
          <TouchableOpacity style={{margin:10,padding:10}}  onPress={() => this.drawItem(4)}>
            <Entypo name={board[4]} size={64} color={this.chooseItemColor(4)} />
          </TouchableOpacity>          
          <TouchableOpacity style={{margin:10,padding:10}} onPress={() => this.drawItem(5)}>
            <Entypo name={board[5]} size={64} color={this.chooseItemColor(5)} />
          </TouchableOpacity>          
          </View>     
                      
          <View style={{flexDirection:"row"}}>              
          <TouchableOpacity style={{margin:10,padding:10}} onPress={() => this.drawItem(6)}>
            <Entypo name={board[6]} size={64} color={this.chooseItemColor(6)} />
          </TouchableOpacity>          
          <TouchableOpacity style={{margin:10,padding:10}}  onPress={() => this.drawItem(7)}>
            <Entypo name={board[7]} size={64} color={this.chooseItemColor(7)} />
          </TouchableOpacity>          
          <TouchableOpacity style={{margin:10,padding:10}} onPress={() => this.drawItem(8)}>
            <Entypo name={board[8]} size={64} color={this.chooseItemColor(8)} />
          </TouchableOpacity>          
                  
          </View>              
    
          <TouchableOpacity style={{margin:30,flexDirection:"row",padding:20,backgroundColor:"#FFc0CB",width:200,borderRadius:20}} onPress={()=>this.resetGame()}>
            <Entypo name="ccw" size={32} color="#000" style={{transform:[{translateX:60},{translateY:-10}]}}/> 
             <Text style={{color:"#000",fontSize:25, fontWeight:"bold", fontFamily: "Cochin", marginLeft:5}}>{'\nRestart'}</Text>
          </TouchableOpacity>                 
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4F8C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#000',
    height: 300,
    width: 3,
    position: 'absolute',
    transform: [{ translateX: 100}, {translateY: 20}],
    
  },
  col: {
    backgroundColor: '#000',
    height: 3,
    width: 300,
    position: 'absolute',
    transform: [{translateY: 100}, {translateX: 8}],
    
  }
});

