//import libraries to making a componenent
import React from 'react';
import {Text,View} from 'react-native';


const style={
      viewStyle:{
          backgroundColor:'#F8F8F8'
      },
      textStyle:{
          fontSize:30,
          justifyContent:'center'
      }
};
//make a component
const header = (props) => {                          // name of the file?
const {viewStyle, textStyle}=style;

      return (
            <View style ={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
      );                                                     // style is a prop
};

//make compo avail to other parts of the app
export default header;
