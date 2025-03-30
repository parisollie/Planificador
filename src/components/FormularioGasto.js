import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, Pressable } from 'react-native'
//import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const FormularioGasto = () => {
    return (
        //v-127,Paso 2.26
        <SafeAreaView style={styles.contenedor}>

            <View style={styles.contenedorBotones}>
                <Pressable
                // onLongPress={() => {
                //     //Vid 129
                //     setModal(false)
                //     //Vid 141
                //     setGasto({})
                // }}
                // style={[styles.btn, styles.btnCancelar]}
                >
                    <Text style={styles.btnTexto}>Cancelar</Text>
                </Pressable>

                {/* {!!id && (//Vid 150 !! esta vacio es un registro nuevo

                    <Pressable
                        style={[styles.btn, styles.btnEliminar]}
                        onLongPress={() => eliminarGasto(id)}
                    >
                        <Text style={styles.btnTexto}>Eliminar</Text>
                    </Pressable>
                )
                } */}

            </View>

            <View View style={styles.formulario}>
                {/*Paso 2.27 */}
                <Text>Nombre gasto </Text>
                {/* <Text style={styles.titulo}>
                    {gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}
                </Text> */}

                <View style={styles.campo} >
                    {/*Paso 2.28 */}
                    <Text style={styles.label}>Nombre Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del gasto. ej. Comida'
                    //Vid 130
                    //onChangeText={setNombre}
                    //value={nombre}
                    />
                </View>

                {/**Paso 2.29 */}
                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad Gasto</Text>
                    <TextInput
                        //Vid 127
                        style={styles.input}
                        placeholder='Cantidad del gasto. ej. 300'
                        keyboardType='numeric'
                    //Vid 130
                    // onChangeText={setCantidad}
                    // value={cantidad}
                    />
                </View>

                {/* <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <Picker
                        selectedValue={categoria}
                        onValueChange={(valor) => {
                            setCategoria(valor)
                        }}
                        
                    >
                        <Picker.Item label="-- Seleccione --" value="" />
                        <Picker.Item label="Ahorro" value="ahorro" />
                        <Picker.Item label="Comida" value="comida" />
                        <Picker.Item label="Casa" value="casa" />
                        <Picker.Item label="Gastos Varios" value="gastos" />
                        <Picker.Item label="Ocio" value="ocio" />
                        <Picker.Item label="Salud" value="salud" />
                        <Picker.Item label="Suscripciones" value="suscripciones" />
                    </Picker>
            </View>

            <Pressable 
                style={styles.submitBtn}
                //Vid 131 y 143
                onPress={() => handleGasto({ nombre, cantidad, categoria, id, fecha })}
            
            >
                <Text style={styles.submitBtnTexto}>
                        {gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto'} 
                </Text>
            </Pressable> */}
            </View>
        </SafeAreaView >

    )
}

//V-127,paso 2.28
const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1E40AF',
        flex: 1
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
        flex: 1
    },
    btnCancelar: {
        backgroundColor: '#DB2777',
    },
    btnEliminar: {
        backgroundColor: 'red'
    },
    btnTexto: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFF'
    },
    formulario: {
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#E1E8F3'
    },
    campo: {
        marginVertical: 10
    },
    label: {
        color: '#E1E8F3',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#3B82F6',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    submitBtn: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginTop: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    colorLetra: {
        color: '#204220'
    },
})
export default FormularioGasto





// //<Text style={styles.colorLetra} >FormularioGasto</Text>
// const FormularioGasto = ({
//     setModal,
//     //Vid 131
//     handleGasto, 
//     //Vid 142
//     gasto, 
//     setGasto, 
//     //Vid 145
//     eliminarGasto
// }) => {
//     const [ nombre, setNombre] = useState('')
//     const [ cantidad, setCantidad] = useState('')
//     const [ categoria, setCategoria] = useState('')
//     const [ id, setId ] = useState('')
//     const [ fecha, setFecha ] = useState('')

//     //Vid 142
//     useEffect(() => {
//         //? , existe la propiedad
//         if(gasto?.nombre) {
//             console.log('Si hay algo')
//             setNombre(gasto.nombre)
//             setCantidad(gasto.cantidad)
//             setCategoria(gasto.categoria)
//             setId(gasto.id)
//             setFecha(gasto.fecha)
//         }
//     }, [gasto])



// }



// export default FormularioGasto
