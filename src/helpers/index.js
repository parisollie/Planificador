//V-122,Paso 2.10, creamos el helper
export const formatearCantidad = cantidad => {
    return Number(cantidad).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

//V-132,paso 3.8
export const generarId = () => {
    const random = Math.random().toString(36).substring(2, 11)
    const fecha = Date.now().toString(36)
    return random + fecha
}

//V-139,paso 4.2 para fechas
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}