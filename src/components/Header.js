import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

//V-116,paso 1.0
const Header = () => {
    return (
        <SafeAreaView>
            <Text style={styles.texto}>Planificador de Gastos</Text>
        </SafeAreaView>
    )
}

//Paso 1.2,ponemos los estilos
const styles = StyleSheet.create({

    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 20
    }
})

export default Header
