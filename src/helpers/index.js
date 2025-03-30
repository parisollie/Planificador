//V-122,Paso 2.10, creamos el helper
export const formatearCantidad = cantidad => {
    return Number(cantidad).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

//V-139
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}
//V-132
export const generarId = () => {
    const random = Math.random().toString(36).substring(2, 11)
    const fecha = Date.now().toString(36)
    return random + fecha
}