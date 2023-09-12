import React, {Component} from 'react';
import {Image, View, Text, StyleSheet,TouchableOpacity} from "react-native";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            img: require('./assets/biscoito.png')
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.reiniciaBiscoito = this.reiniciaBiscoito.bind(this);

        this.frases = [
            'O amor é uma flor roxa que nasce no coração dos trouxas.',
            'Não deixe uma frase motivacional arruinar o seu dia de merda.',
            'Ainda bem que eu não sou você.',
            'Ninguém vai te julgar se você trancar o curso.',
            'Meu nome é Ari e eu não tô nem ai.',
            'E quem disse que isso é problema meu?.',
            'Se alguém te ofendeu sem você merecer volte lá e mereça.',
            'O não você já tem, corra atrás da humilhação.',
            'Você tem cara de quem gosta de genshin impact'
        ];
        
        this.endf = [
            ''
        ];
    }



    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        this.setState({
            textoFrase: this.frases[numeroAleatorio],
            img: require('./assets/biscoitoAberto.png')
        })
    }

    reiniciaBiscoito(){
        let aas = "";
        this.setState({
            textoFrase: this.endf[0],
            img: require('./assets/biscoito.png')
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Image source={this.state.img} style={style.imgStyle} />
                <Text style={style.textoFrase}>"{this.state.textoFrase}"</Text>
                <TouchableOpacity style={style.btn} onPress={this.quebraBiscoito}>
                    <View style={style.btnArea}>
                        <Text style={style.btnTexto}>Quebrar o biscoito</Text>
                    </View>
                </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={this.reiniciaBiscoito}>
                <View style={style.btnArea}>
                    <Text style={style.btnTexto}>Reiniciar o Biscoito</Text>
                </View>
            </TouchableOpacity>
            </View> 
        );
    }



}



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "20px"
    },
    textoFrase: {
        textAlign: 'center',
        fontSize: 25,
        margin: 35,
        color: '#dd7b22',
        fontStyle: 'italic'
    },
    imgStyle:{
        width: 350,
        height: 350
    },
    btn:{
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
    },
    btnArea:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
   },
    btnTexto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
});