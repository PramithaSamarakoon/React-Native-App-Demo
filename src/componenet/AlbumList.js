//**state: is how react handle changing the content which shown in the screen
// state will automatically rerender once the contenthas changed to he screen

import React,{Component}from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'; //install and import axios

//const AlbumList =() => {
class AlbumList extends Component{
//this method fetches data, loading data

state={albums:[]};//empty object, and an empty array
//class level property
  ComponentWillmount(){
     //console.log('this is ComponentWillmount');
     axios.get('https://rallycoding.herokuapp.com/api/music_albums');  //get request
     //open the debigger and check the output(list) -lec 34 6.00
     // .then(response=>console.log(response));
    .then(response=>this.setState({albums:response.data}));
    //this.setState is a specified method from COmponent,and albums walata pass wenawa data
  }
  render() {
    console.log(this.state);
    return (
        <View>
            <Text> Driver List</Text>
        </View>
    );

  }
}

export default AlbumList;
