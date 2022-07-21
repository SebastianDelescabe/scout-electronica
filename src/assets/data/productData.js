export const products = [
    {
        title: 'Durómetro de capsulas blandas',
        descriptionItems: [
            'Seteo de fuerza requerida para ensayos',
            'Realiza ensayos instructivos y no destructivos',
            'Se desempeña como texturometro sin penetracion',
            'Ideal para capsulas blandas con gel',
            'Salida RS2332-USB',
            'Gabinete en acrílico'
        ],
        image: 'https://i.ibb.co/rbx7g4w/durometro-convencional.jpg',
        id: '1'
    },
    {
        title: 'Baño Termostático',
        descriptionItems: [
            'Control de temperatura por variador manual o seteable',
            'Posibilidad de temperatura estándar o personalizada',
            'Resistencia calefactora en acero inoxidable',
            'Sonda de temperatura en acero inoxidable',
            'Gabinete y tapa en acrílico'
        ],
        image: 'https://i.ibb.co/kKHRjL6/ba-o-termostatico.jpg',
        id: '2'
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
        ],
        image: 'https://i.ibb.co/8YTFkkY/desintegrador.jpg',
        id: '3'
    },
    {
        title: 'Texturómetro',
        descriptionItems: [
            'Equipo confiable tanto en laboratorio medicial como en sustancias alimenticias',
            'Display de cuatro renglones por veinte caracteres',
            'Distintas puntas de penetración segun elemento a ensayar',
            'Posibilidad de seteo de fuerza de compresión',
            'Simple calibracíon',
            'En sustancias alimenticias, medición de fuerza G',
            'En laboratorios medicinales usado para control de calidad de cápsulas blandas',
            'Posibilidad de salida de datos puertos RS232-USB',
            'Posibilidad de graficar'
        ],
        image: 'https://i.ibb.co/DgCpmC3/texturometro.jpg',
        id: '4'
    }
]

export default products

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