import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity }from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      panjang:0,
      lebar:0,
      hasil :0
    };
  }
  
  hitungLuas = () =>{
    let hasil1 = parseFloat(this.state.panjang) * parseFloat(this.state.lebar)
    this.setState({hasil:hasil1})
  }

  render() { 
    return (  
      <View style={{
        flex:1
      }}>
        {/* header */}
        <View style={{
          backgroundColor:'#125D98',
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text style={{color:'#fff', fontWeight:'bold', fontSize:20}}>Menghitung Luas Persegi Panjang</Text>
        </View>


        <View style={{
          backgroundColor:'#DDDDDD',
          flex:7
        }}>
          <TextInput
          value={this.state.panjang}
          style={{
            marginHorizontal:40,
            paddingVertical:10,
            backgroundColor : '#D5D5D5',
            marginTop:20,
            borderRadius: 30,
            textAlign:'center'
          }}
          placeholder='Input Nilai Panjang'
          keyboardType='number-pad'
          onChangeText={(value)=> this.setState({panjang :value})}
           />

<TextInput
          value={this.state.lebar}
          style={{
            marginHorizontal:40,
            paddingVertical:10,
            backgroundColor : '#D5D5D5',
            marginTop:10,
            borderRadius: 30,
            textAlign:'center'
          }}
          placeholder='Input Nilai Lebar'
          keyboardType='number-pad'
          onChangeText={(value)=> this.setState({lebar : value})}
          />
          <TouchableOpacity style={{
            backgroundColor: '#92A9BD',
            marginTop:30,
            marginHorizontal:40,
            paddingVertical:10,
            paddingHorizontal:15,
            borderRadius:20,
            alignItems:'center',
            elevation:3
          }}
          onPress={() => this.hitungLuas()}
          >
            <Text style={{fontWeight:'bold'}}>Hitung Nilai Luas</Text>
          </TouchableOpacity>

          <View style={{
            marginHorizontal:40,
            marginTop: 30,
            paddingVertical:50,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{fontSize:40, fontWeight:'bold'}}>
              {this.state.hasil}
            </Text>
          </View>
        </View>

        {/* footer */}
        <View style={{
          backgroundColor:'#334257',
          flex:1,
          elevation:10,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text style={{color :'#fff'}}>Tugas Akhir React-Native</Text>
          <Text style={{color :'#fff'}}>M. Ainur Rozikin</Text>
        </View>
      </View>
    );
  }
}
 
export default App;