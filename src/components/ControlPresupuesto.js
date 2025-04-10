import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'

//V-120,Paso 1.28
const ControlPresupuesto = ({ presupuesto, gastos, resetearApp }) => {

    //V-124,Paso 2.13,inicia en 0
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    //V-149,paso 5.2
    const [porcentaje, setPorcentaje] = useState(0)

    //V-124,paso 2.16
    useEffect(() => {
        //Paso 2.17
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        //Calcular lo disponible 
        const totalDisponible = presupuesto - totalGastado
        //Paso 5.4
        const nuevoPorcentaje = (
            ((presupuesto - totalDisponible) / presupuesto) * 100
        )
        setTimeout(() => {
            //Paso 5.5
            setPorcentaje(nuevoPorcentaje)
        }, 1000);

        //Paso 2.18,lo colocamos
        setGastado(totalGastado)
        setDisponible(totalDisponible)
        //V-140,Paso 4.3 le pasamos  [gastos]
    }, [gastos])


    return (
        //v-121,Paso 2.0
        <View style={styles.contenedor}>
            {/** Paso 5.1 */}
            {/* <View style={styles.centrarGrafica}>
                <CircularProgress
                    //Paso 5.3
                    value={porcentaje}
                    //V-148
                    duration={1000}
                    radius={150}
                    valueSuffix={'%'}
                    title='Gastado'
                    inActiveStrokeColor='#F5F5F5'
                    inActiveStrokeWidth={20}
                    activeStrokeColor='#3b82f6'
                    activeStrokeWidth={20}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                    titleColor='#64748B'
                />
            </View> */}

            <View style={styles.centrarGrafica}>
                {/* //Paso 2.1,ponemos la imagen */}
                <Image
                    //paso 2.5
                    style={styles.imagen}
                    source={require('../img/grafico.jpg')} />

            </View>

            {/*Paso 2.8 */}
            <View style={styles.contenedorTexto}>
                {/**V-164,Paso 6.3 */}
                <Pressable
                    onLongPress={resetearApp}
                    style={styles.boton}
                >
                    <Text style={styles.textoBoton}>Reiniciar App</Text>
                </Pressable>
                {/**Paso 2.9 */}
                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''} </Text>
                    {/**Paso 2.11 */}
                    {formatearCantidad(presupuesto)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible: {''}</Text>
                    {formatearCantidad(disponible)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado: {''}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        //Paso 2.3
        ...globalStyles.contenedor,
    },
    //Paso 2.4
    centrarGrafica: {
        alignItems: 'center'
    },
    imagen: {
        width: 250,
        height: 250
    },
    boton: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginBottom: 40,
        borderRadius: 5
    },
    textoBoton: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    //V-123,Paso 2.12
    contenedorTexto: {

        marginTop: 50,
    },
    valor: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        color: '#3B82F6'
    }
})
export default ControlPresupuesto

