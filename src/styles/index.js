const globalStyles = {
    //V-121,Paso 2.2 hacemos un global para solo exportar 
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
}

export default globalStyles