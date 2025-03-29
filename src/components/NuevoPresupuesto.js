import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'


//V-117,Paso 1.3, creamos el componente
const NuevoPresupuesto = (
    { 
        //Paso 1.23
       // presupuesto, 
       // setPresupuesto, 
        handleNuevoPresupuesto 
    }
) => {
    //paso 1.21
    const [ presupuesto, setPresupuesto ] = useState(0)
    
    return (
        //Paso 1.9, le pones los estilos del contenedor
        <View style={styles.contenedor}>

            <Text style={styles.label}>Definir Presupuesto</Text>

            <TextInput
                //V-118,paso 1.15 
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                //Paso 1.24
                value={ presupuesto.toString() }
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
    //Paso 1.8
    contenedor: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        //Paso 1.13, para ponere encimado
        transform: [{ translateY: 50 }],
        //Paso 1.14, le ponemos sombras
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
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



// import React from 'react'
// import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
// import globalStyles from '../styles'

// //Vid 117 
// const NuevoPresupuesto = ({ 
//     //Vid 122
//     presupuesto, 
//     setPresupuesto, 
//     handleNuevoPresupuesto 
// }) => {

//     return (
//         <View style={styles.contenedor}>
//             <Text style={styles.label}>Definir Presupuesto</Text>

//             <TextInput
//                 //Vid 118 
//                 keyboardType='numeric'
//                 placeholder='Agrega tu presupuesto: Ej. 300'
//                 style={styles.input}
//                 //Vid 119
//                 value={ presupuesto.toString() }
//                 onChangeText={setPresupuesto}
                
//             />

//             <Pressable
//             //Vid 117 
//                 style={styles.boton}
//                 //Vid 119 
//                 onPress={() => handleNuevoPresupuesto(presupuesto)}
//             >
//                 <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
//             </Pressable>
            
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     contenedor: {
//         ...globalStyles.contenedor
//     },
//     label: {
//         textAlign: 'center',
//         fontSize: 24,
//         color: '#3B82F6'
//     },
//     input: {
//         backgroundColor: '#1048A4',
//         padding: 10,
//         borderRadius: 10,
//         textAlign: 'center',
//         marginTop: 30,
       
//     },
//     boton: {
//         marginTop: 30,
//         backgroundColor: '#1048A4',
//         padding: 10,
//         borderRadius: 10
//     },
//     botonTexto: {
//         color: '#FFF',
//         textAlign: 'center',
//         textTransform: 'uppercase',
//         fontWeight: 'bold'
//     }
// })


// export default NuevoPresupuesto
