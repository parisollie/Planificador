
import React, { useState, useEffect } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers'
import ListadoGastos from './src/components/ListadoGastos';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Filtro from './src/components/Filtro';
import {
  ScrollView,
  StyleSheet,
  View,
  Alert,
  Pressable,
  Image,
  Modal,
  SafeAreaView,
  Text
} from 'react-native';


const App = () => {
  //V-120,paso 1.26
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  //paso 1.21
  const [presupuesto, setPresupuesto] = useState(0)
  //V-124,paso 2.14
  const [gastos, setGastos] = useState([

    /*{id:1,cantidad:30},
    {id:2,cantidad:40},
    {id:3,cantidad:50}*/
  ])

  //V-126,paso 2.21
  const [modal, setModal] = useState(false)
  //Paso 4.10
  const [gasto, setGasto] = useState({})
  //V-152,paso 5.10
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])


  /******************************   ASYNG STORAGE ************************************************ */
  //EL ORDEN DE LOS USE EFFECT SON IMPORTANTES , YA QUE ES EL ORDEN EN QUE SE EJECUTAN
  //V-160,paso 6.1
  useEffect(() => {
    const obtenerPresupuestoStorage = async () => {
      try {
        //??,sino existe ponle 0
        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0

        if (presupuestoStorage > 0) {
          setPresupuesto(presupuestoStorage)
          //Cuando un presupuesto es válido no es envía a la otra pantalla 
          setIsValidPresupuesto(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPresupuestoStorage()
  }, [])


  //V-159,paso 6.0
  useEffect(() => {
    if (isValidPresupuesto) {
      const guardarPresupuestoStorage = async () => {
        try {
          await AsyncStorage.setItem('planificador_presupuesto', presupuesto)
        } catch (error) {
          console.log(error)
        }
      }
      guardarPresupuestoStorage()
    }
  }, [isValidPresupuesto])

  //V-162,paso 6.3
  useEffect(() => {
    const obtenerGastosStorage = async () => {
      try {
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos')

        //Sino existe gastos le pone un arreglo vacío
        setGastos(gastosStorage ? JSON.parse(gastosStorage) : [])
      } catch (error) {
        console.log(error)
      }
    }
    obtenerGastosStorage()
  }, [])

  //V-161,paso 6.2
  useEffect(() => {
    const guardarGastosStorage = async () => {
      try {
        await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos))
      } catch (error) {
        console.log(error)
      }
    }
    guardarGastosStorage();
  }, [gastos])



  //V-119,paso 1.18
  const handleNuevoPresupuesto = (presupuesto) => {
    //console.log('desde app',presupuesto)
    if (Number(presupuesto) > 0) {
      //paso 1.27
      setIsValidPresupuesto(true)
      //paso 1.22
      console.log('presupuesto valido')
    } else {
      //Esto funcion para iOs solamente
      //Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor', 'Ok')
      //Paso 1.24, le ponemos una alerta
      Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor')
      console.log('presupuesto no valido')
      Alert.alert

    }
  }
  //V-131,Paso 3.4
  const handleGasto = gasto => {
    //console.log(gasto)
    //Paso 3.7 y paso 4.23
    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios",
      )
      return
    }


    //V-143,paso 4.24
    if (gasto.id) {
      //Creamos una variable temporal gastoState => gastoState.id
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
      //Paso 4.25
      //paso 3.9,Añadir el nuevo gasto al state
      gasto.id = generarId()
      //V-139,paso 4.0, agregamos fecha
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    //Paso 3.10
    setModal(!modal)

  }

  //V-145,paso 4.25
  const eliminarGasto = id => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Si, Eliminar', onPress: () => {

            const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)

            setGastos(gastosActualizados)
            setModal(!modal)
            setGasto({})
          }
        }
      ]
    )
  }
  /***************************************************************************************** */

  //V-164,paso 6.4

  const resetearApp = () => {
    Alert.alert(
      'Deseas resetear la app?',
      'Esto eliminará presupuesto y gastos',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Si, Eliminar', onPress: async () => {
            try {
              await AsyncStorage.clear()

              setIsValidPresupuesto(false)
              setPresupuesto(0)
              setGastos([])
            } catch (error) {
              console.log(error)
            }
          }
        }
      ]
    )
  }


  return (
    //Paso 1.12
    <View style={styles.contenedor} >
      {/**Paso 3.20, ponemos el scroll */}
      <ScrollView>
        {/*Paso 1.10 */}
        <View style={styles.header}>
          {/*Paso 1.1, importamos Header */}
          <Header />

          {/**Paso 1.29 */}
          {isValidPresupuesto ? (
            <ControlPresupuesto
              //Paso 2.15
              gastos={gastos}
              //Paso 2.8
              presupuesto={presupuesto}
              //Paso 6.5
              resetearApp={resetearApp}
            />


          ) : (
            //V-117,paso 1.4  
            <NuevoPresupuesto
              //V-122.paso 2.6
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              //Paso 1.19
              handleNuevoPresupuesto={handleNuevoPresupuesto}
            />

          )}
        </View>
        {/**V-133,Paso 3.10 */}

        {isValidPresupuesto && (
          <>
            {/**Paso 5.7 */}
            <Filtro
              //Paso 5.11 
              filtro={filtro}
              setFiltro={setFiltro}
              gastos={gastos}
              setGastosFiltrados={setGastosFiltrados}
            />
            {/* //Paso 3.12 */}
            <ListadoGastos
              //V-141,paso 4.4
              setModal={setModal}
              //Paso 4.11
              setGasto={setGasto}
              //Paso 5.14
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              //paso 3.14
              gastos={gastos}

            />

          </>
        )}

      </ScrollView>

      {/**Paso 2.23 */}
      {modal && (
        <Modal
          //Paso 2.24
          animationType='slide'
          visible={modal}
        >
          {/**Paso 2.25 */}
          <FormularioGasto
            //Paso 2.35
            setModal={setModal}
            //Paso 3.5
            handleGasto={handleGasto}
            //V-142,paso 4.15
            gasto={gasto}
            //Paso 4.13
            setGasto={setGasto}
            //Paso 4.27
            eliminarGasto={eliminarGasto}

          />
        </Modal>
      )}

      {/**V-125,paso 2.19 */}
      {isValidPresupuesto && (
        <Pressable
          //V-146,Paso 4.27
          style={styles.pressable}
          //Paso 2.22
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
    </View>
  );
};

//Paso 1.7
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  //Paso 1.11
  header: {
    backgroundColor: '#3B82F6',
    // minHeight: 400
  },
  //paso 4.26
  pressable: {
    //backgroundColor:'red',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30
  },
  //Paso 2.20
  imagen: {
    width: 60,
    height: 60,
  }
});

export default App;






