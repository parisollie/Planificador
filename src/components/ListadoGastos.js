import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Gasto from './Gasto'

//Paso 3.11
const ListadoGastos = (
    {
        gastos,
        //Paso 4.5
        setModal,
        setGasto,
        //     //Vid 153 
        //     filtro,
        //     gastosFiltrados
    }
) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>

            {/**V-134,Paso 3.15 */}
            {gastos.length === 0 ?
                <Text style={styles.noGastos}>No Hay Gastos</Text> :
                gastos.map(gasto => (
                    //Paso 3.17
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        //Paso 4.7
                        setModal={setModal}
                        setGasto={setGasto}
                    />


                ))}


            {/* {filtro ? gastosFiltrados.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setModal={setModal}
                    setGasto={setGasto}
                />
            )) : gastos.map(gasto => (
               
            ))}


            {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) && (
                <Text style={styles.noGastos}>No Hay Gastos</Text>
            )} */}

        </View>
    )
}

//Paso 3.13
const styles = StyleSheet.create({
    contenedor: {
        marginTop: 70,
        marginBottom: 100
    },
    titulo: {
        color: '#64748B',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20
    },
    noGastos: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#204220'
    },
    colorLetra: {
        color: '#204220'
    },
})

export default ListadoGastos