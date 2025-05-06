import { Image, Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import React from "react";

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+";

export default function Index() {

  const gerarSenha = () => {
    let senha = '';
    let numeroCaracteres = caracteres.length;

    // Para a quantidade de caracteres que o usuário escolheu, vai pegar um caracter aleatório e colocar na senha
    for (let i = 0; i < char; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * numeroCaracteres));
    }

    // Define a senha
    setSenha(senha);
  }

  const [char, setChar] = React.useState(10);
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require("../assets/images/cadeado.png")}
      />
      <Text>{char} caracteres</Text>

      <Slider
        style={styles.sliders}
        minimumValue={6}
        maximumValue={20}
        step={1}
        value={char}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="red"
        onValueChange={(value) => {
          setChar(value);
        }}
      />

      <TouchableOpacity style={styles.botao} onPress={gerarSenha}>
        <Text style={{ color: 'white' }}>Gerar senha</Text>
      </TouchableOpacity>

      <Text style={styles.senha}>
        {senha || "Nenhuma senha gerada ainda"}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: -20,
  },
  sliders: {
    width: 200,
    height: 40
  },
  senha: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  }
});
