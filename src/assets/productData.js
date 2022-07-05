export const products = [
    {
        title: 'Automuestreador',
        descriptionItems: [
            '8 (ocho) motores paso a paso',
            'Gabinete de acrilico',
            'Display de cuatro renglones,veinte caracteres de backlight',
            'Teclado a burbuja',
            'Seteo programable de caudal y tiempo',
            'Mangueras de muestreo de teflón',
            'Conectores de 8(ocho) en teflon de manguera de silicona',
            'Posibilidad de salida de datos RS 232/USB/Bluetooth',
            'Para diez muestreos y disolutor de ocho vasos, bandeja propuesta capacidad de 80 (ochenta) viales',
            'Bandeja para viales en acrilico capacidad de la misma a pedido',
            'Movimiento de pico dosificador controlado por motor paso a paso',
            'Posicionamiento seguin eje X',
            'Posicionamiento de ocho mangueras de teflón mediante regla de ajuste',
            'Descarte de muestra en manguera para ensayo siguiente'
        ]
    },
    {
        title: 'Baño Termostático',
        descriptionItems: [
            'Control de temperatura por variador manual o seteable',
            'Posibilidad de temperatura estándar o personalizada',
            'Resistencia calefactora en acero inoxidable',
            'Sonda de temperatura en acero inoxidable',
            'Gabinete y tapa en acrílico'
        ]
    },
    {
        title: 'Desintegrador',
        descriptionItems: [
            'Display de cuatro renglones por veinte caracteres con backlight',
            'Gabinete en acrílico con ventana sobre batea para iluminarla por led',
            'Batea en acrilico transparente, fácilmente desarmable de fácil limpieza',
            'Control de temperatura digital con rampa de calentamiento programado',
            'Muestreo de temperatura por panel',
            'Control por sistema electrónico monochip (lo cual brinda una minima posibilidad de fallas)',
            'Posibilidad de dos estaciones (canastas) en un mismo equipo',
            'Homogeneizador de temperatura en cuba',
            'Posibilidad de encendido diferido',
            'Alarma de terminacion de ensayo',
            'Impresión de fecha y hora del ensayo, tiempo de desintegracion. número de lote, nombre del producto e identificación del operador',
            'Posibilidad de salida de datos RS 232/USB/Bluetooth',
            'Fácil calibración de r.p.m como temperatura',
            'Canasta en inoxidable y acrílico de seis racks',
            'Tacos aceleradores normalizados'
        ]
    },
    {
        title: 'Disolutor de ocho a seis vasos de vidrio',
        descriptionItems: [
            'Display de cuatro renglones veinte caracteres con cobertor de acrílico',
            'Controlador incorporado',
            'Mínimas dimensiones',
            'Calentamiento por convección',
            'Indicación de tiempo de disolución',
            'Posibilidad de encendido diferido',
            'Alarmas',
            'Controlador de velocidad según especificaciones USP',
            'Velocidad seteable de una en una rpm',
            'Biblioteca de memoria de productos y operadores',
            'impresora (opcional)',
            'Salida USB (opcional)',
            'Toma-muestras',
            'Recirculación de agua en batea',
            'Paletas normalizadas con excentricidad según USP',
            'Cestillas normalizadas',
            'Cumple todas las especificaciónes de USP'
        ]
    }
]


// Ejemplo para acceder

// {products && products.map((e) => (
//     <div>
//         <p>{e.title}</p>
//         {e.descriptionItems.map(e => (
//             <ul>
//                 <li>{e}</li>
//             </ul>
//         ))}
//     </div>
// ))}