import React,{Component}from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'; //import axios

//const AlbumList =() => {
class AlbumList extends Component{
  render() {
    return (
        <View>
            <Text> Driver List</Text>
        </View>
    );

  }
  ComponentWillmount(){   //loading data
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response=>console.log(response)); //a promise
      console.log('within willmount and this class executed');
    //  debugger;
  }

}

export default AlbumList;
