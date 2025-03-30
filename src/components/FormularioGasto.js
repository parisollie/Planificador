import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const FormularioGasto = ({
    //Paso 2.36
    setModal,
    //     //Vid 131
    //     handleGasto, 
    //     //Vid 142
    //     gasto, 
    //     setGasto, 
    //     //Vid 145
    //     eliminarGasto

}) => {
    return (
        //v-127,Paso 2.26
        <SafeAreaView style={styles.contenedor}>

            <View style={styles.contenedorBotones}>
                <Pressable
                    onLongPress={() => {
                        //Paso 2.37
                        setModal(false)
                        //     //Vid 141
                        //     setGasto({})
                    }}
                    //V-129,paso 2.34
                    style={[styles.btn, styles.btnCancelar]}
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
                <Text style={styles.titulo} >Nombre gasto </Text>
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

                {/**Paso 2.30 */}
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

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <Picker
                    // selectedValue={categoria}
                    // onValueChange={(valor) => {
                    //     setCategoria(valor)
                    // }}

                    >
                        {/**Paso 2.31,ponemos los datos del picker */}
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
                // //Vid 131 y 143
                // onPress={() => handleGasto({ nombre, cantidad, categoria, id, fecha })}

                >
                    {/**Paso 2.32 */}
                    <Text style={styles.submitBtnTexto}>
                        Agregar gasto

                        {/**
                         *  {gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto'}
                         */}

                    </Text>
                </Pressable>
            </View>
        </SafeAreaView >

    )
}

//V-127,paso 2.29
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
        //v-128,paso 2.33
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B'
    },
    campo: {
        marginVertical: 10
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F5F5F5',
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
