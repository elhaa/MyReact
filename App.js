import React, {Component} from 'react';
import {StyleSheet, ImageBackground,Alert, View, TextInput, Image, Text, TouchableOpacity,AppRegistry} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstValue: '',
            secondValue: '',
            thirdValue:'',
            sum: '',
        };
    }

    calculateSum = () => {
        const { firstValue, secondValue ,thirdValue } = this.state;

        this.setState({
            sum: (Number(firstValue) + Number(secondValue) + Number(thirdValue))/3
        });
    };

    render() {
        var klasifikasi;

      if(this.state.sum <= 0){
        klasifikasi = 'Klasifikasi : __'
      } else if(this.state.sum <= 25){
        klasifikasi = 'Klasifikasi : D'
      }else if(this.state.sum <= 50){
        klasifikasi = 'Klasifikasi : C'
      }else if(this.state.sum <= 75){
        klasifikasi = 'Klasifikasi : B'
      }else if(this.state.sum <= 100){
        klasifikasi = 'Klasifikasi : A'
      }else if(this.state.sum < 0){
        klasifikasi = 'Klasifikasi : E'

      }
        return(
            <ImageBackground source={require('Z:/Lesson/ReactNative/MyReact/img/hi.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container} >
                    <Image
                        style={styles.image}
                        source={require('Z:/Lesson/ReactNative/MyReact/img/images.png')}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        keyboardType={'email-address'}
                    />

                    <Text style={{marginTop: 10,fontSize: 15}}>YOUR SCORE</Text>

                    <TextInput
                        style={styles.textInput}
                        placeholder="ENGLISH"
                        value={this.state.firstValue}
                        onChangeText={(firstValue) => this.setState({firstValue})}
                        keyboardType='numeric'
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="MATH"
                        value={this.state.secondValue}
                        onChangeText={(secondValue) => this.setState({secondValue})}
                        keyboardType='numeric'
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="SCIENCE"
                        value={this.state.thirdValue}
                        onChangeText={(thirdValue) => this.setState({thirdValue})}
                        keyboardType='numeric'
                    />

                    <TouchableOpacity onPress={this.calculateSum} style={styles.button}>
                        <Text style={styles.text}>AVERAGE</Text>
                    </TouchableOpacity>

                    <Text>{`${this.state.sum}`}</Text>

                    <View><Text>{klasifikasi}</Text></View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    textInput:{
        height: 45,
        width: '75%',
        borderColor: 'pink',
        borderBottomWidth: 2,
        marginTop:8,

    },
    image:{
        height: 100,
        width: 80,
        borderRadius:35,
    },
    text:{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        margin: 10,
        marginRight:10,
        color:"grey",
    },
    button:{
        backgroundColor:'transparent',
        borderWidth: 2,
        borderColor:"pink",
        margin: 10,
        width: '40%',
        height: 50,
    },
})

AppRegistry.registerComponent('App', () => UselessTextInput);