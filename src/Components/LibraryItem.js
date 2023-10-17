import React, { Component } from "react";
import { StyleSheet, Text,View,TouchableWithoutFeedback,LayoutAnimation} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../Action";

class ListItem extends Component{

    handleAnimation = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      
        this.props.selectLibrary(this.props.library.item.id);
      };

    renderDiscription(){
        const {library,expanded} =this.props;
        if(expanded){
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            return(
                <CardSection>
                      <Text style={{flex:1,color:'black',paddingLeft:10}}>{library.item.description}</Text>
                </CardSection>
              
            );
        }
    }

    render(){
        const { id,title} = this.props.library.item;
        return (
            <TouchableWithoutFeedback
            onPress={()=>this.props.selectLibrary(id)}
            >
            <View>
           <CardSection>
                <Text 
                style={styles.titleStyle}>
                {title}
                </Text>
            </CardSection>
            {this.renderDiscription()}
           </View>
            </TouchableWithoutFeedback>
      
        );
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
         paddingLeft:20,
         color:'black',
         fontWeight:'500'
    }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

export default connect(mapStateToProps,actions)(ListItem);