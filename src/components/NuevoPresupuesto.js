import React, { useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import globalStyles from '../styles'


//V-117,Paso 1.3, creamos el componente
const NuevoPresupuesto = (
    {
        //Paso 2.7
        presupuesto,
        setPresupuesto,
        //Paso 1.23
        handleNuevoPresupuesto
    }
) => {


    return (
        //Paso 1.9, le pones los estilos del contenedor
        <View style={styles.contenedor}>

            <Text style={styles.label}>Definir Presupuesto</Text>

            <TextInput
                //V-118,paso 1.15 
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                //Paso 1.25
                value={presupuesto.toString()}
                onChangeText={setPresupuesto}

            />

            {/*Paso 1.5 */}
            <Pressable
                //paso 1.16
                style={styles.boton}
                //V-119,paso 1.20 
                onPress={() => handleNuevoPresupuesto(presupuesto)}
            >
                <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>


        </View>
    )
}

//paso 1.6
const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
    },
    //Paso 1.17
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3B82F6'
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,

    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10
    },
    botonTexto: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default NuevoPresupuesto

