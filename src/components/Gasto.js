import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'

//Paso 3.22
const diccionarioIconos = {
    ahorro: require('../img/icono_ahorro.png'),
    comida: require('../img/icono_comida.png'),
    casa: require('../img/icono_casa.png'),
    gastos: require('../img/icono_gastos.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png'),
}

//paso 3.16
const Gasto = (
    {
        gasto,
        //Paso 4.6
        setModal,
        setGasto

    }) => {
    //V-135,paso 3.18
    const { nombre, categoria, cantidad, fecha, id } = gasto

    //paso 4.9 
    const handleAcciones = () => {
        setModal(true)
        //Paso 4.12
        setGasto(gasto)
    }


    return (
        //Paso 4.8,ponemos el presable
        <Pressable
            onLongPress={handleAcciones}
        >

            <View style={styles.contenedor}>


                <View style={styles.contenido}>
                    <View style={styles.contenedorImagen}>
                        <Image
                            //Paso 3.23
                            style={styles.imagen}
                            source={diccionarioIconos[categoria]}

                        />
                        <View style={styles.contenedorTexto}>
                            <Text style={styles.categoria}>{categoria}</Text>
                            {/**Paso 3.21 */}
                            <Text style={styles.nombre}>{nombre}</Text>
                            {/*
                         <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
                         */}
                        </View>
                    </View>
                    {/**V-136,Paso 3.22 */}
                    <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>

                </View>
            </View>
        </Pressable >
    )
}

//Paso 3.19
const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        marginBottom: 20
    },
    //V-137,Paso 3.24
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contenedorImagen: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    contenedorTexto: {
        flex: 1
    },
    categoria: {
        color: '#94A3B8',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 5
    },
    nombre: {
        fontSize: 22,
        color: '#64748B',
        marginBottom: 5
    },
    cantidad: {
        fontSize: 20,
        fontWeight: '700'
    },
    fecha: {
        fontWeight: '700',
        color: '#DB2777'
    },
    colorLetra: {
        color: '#204220'
    },
})


export default Gasto







