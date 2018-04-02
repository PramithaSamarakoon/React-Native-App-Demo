//import  a library to help creating componenents

import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/componenet/header';    //importing the header component(file)
import AlbumList from './src/componenet/AlbumList'; //imporing the album list component
//extension needed when it is not a js file

//create a componenent

const App =()=> (
  <View>
      <Header headerText={'Norpost'}/>
      <AlbumList/>
 </View>
  // returning 2 things wont work
  // go for wrapping with one view tag
  );

//render it to the device

AppRegistry.registerComponent('example',()=>App);
