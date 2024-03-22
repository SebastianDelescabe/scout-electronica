import hermeticImg from "../images/productsImages/hermetic.png";
import automaticImg from "../images/productsImages/automatic.png";
import calibrationImg from "../images/productsImages/calibration.png";
import idealSizeImg from "../images/productsImages/idealSize.png";
import softwareImg from "../images/productsImages/software.png";
import printerImg from "../images/productsImages/printer.png";
import usbImg from "../images/productsImages/usb.png";
import manualImage from "../images/productsImages/manual.png"

import imagesDurometro from "../images/productsImages/durometro/index";
import bañotermostaticoImages from "../images/productsImages/bañotermostatico/index";
import disolutorImages from "../images/productsImages/disolutor/index";
import desintegradorImages from "../images/productsImages/desintegrador/index";
import texturometroImages from "../images/productsImages/texturometro/index";
import automuestreadorImages from "../images/productsImages/automuestreador/index";
import tituladorautomaticoImages from "../images/productsImages/tituladorautomatico/index";
import testhermeticidadImagenes from '../images/productsImages/testhermeticidad/index';
import tapdencityImagenes from '../images/productsImages/tapdensity/index';
import imagedosificadoradepolvos from '../images/productsImages/dosificadoradepolvos/index';
import imagepenetrometro from '../images/productsImages/penetrometro/index';
import imagefriabilometro from '../images/productsImages/friabilometro/index';

//EXTRA DATA 
let [hermetico, automatico, tamaño, software, usb, print, calibracion,manual] = [
  ["Hermético", hermeticImg],
  ["Completamente Automático", automaticImg],
  ["Tamaño ideal", idealSizeImg],
  ["Software amigable", softwareImg],
  ["Salida USB (opcional)", usbImg],
  ["Impresora (opcional)", printerImg],
  ["Simple Calibración", calibrationImg],
  ["Manual de instrucciones", manualImage],

];

export const products = [
  {
    title: "Durómetro ",
    descriptionItems: [
      "Este dispositivo realiza ensayos instructivos y no destructivos, preservando la integridad del producto mientras ofrece información precisa sobre su resistencia.",
      "La versatilidad del durometro se destaca en la variedad de unidades de medida disponibles, desde kilogramos hasta la escala STRONG y newtons, adaptándose a las necesidades específicas de cada cliente. Sus resultados detallados incluyen valores de carga máxima, mínima, promedio y desvío estándar, proporcionando una visión completa de la calidad del comprimido.",
      "El durómetro no solo asegura la calidad de los comprimidos farmacéuticos, sino que también optimiza los procesos de producción al proporcionar información valiosa y precisa sobre su resistencia y uniformidad.",
    ],
    extraInfo: [hermetico, automatico, tamaño, software, usb, print, calibracion,manual],
    image: imagesDurometro,
    id: 1,
  },
  {
    title: "Baño Termostático ",
    descriptionItems: [
      "El baño termostático se destaca por su versatilidad y precisión en el control de la temperatura. Equipado con un variador manual o seteable, permite ajustes exactos según las necesidades de cada cliente.",
      "Ofrece la posibilidad de mantener temperaturas estándar o personalizadas, brindando flexibilidad para una variedad de aplicaciones.",
      "Su resistencia calefactora en acero inoxidable asegura una distribución uniforme del calor y una larga vida útil. En resumen, este equipo es fundamental en laboratorios y entornos científicos donde se requiere un control térmico preciso y fiable.",
    ],
    image: bañotermostaticoImages,
    id: 2,
    extraInfo: [hermetico, automatico, tamaño, software,manual],
  },
  {
    title: "Desintegrador ",
    descriptionItems: [
      "Nuestro desintegrador ofrece un control excepcional respaldado por un sistema electrónico monochip, lo que garantiza una fiabilidad óptima al minimizar las posibles fallas.",
      "Cuenta  también con un muestreo de temperatura por panel para un monitoreo preciso en tiempo real. El control de temperatura digital, con rampa de calentamiento programado, permite ajustes precisos y reproducibles de la temperatura para cada prueba.",
      "Esta combinación de características asegura resultados confiables y consistentes en pruebas de desintegración farmacéutica, satisfaciendo las necesidades de laboratorios que buscan precisión y eficiencia en sus análisis.",
    ],
    image: desintegradorImages,
    id: 3,
    extraInfo: [hermetico, automatico, tamaño, software, print, calibracion,manual],
  },
  {
    title: "Texturómetro ",
    descriptionItems: [
      "Nuestro texturómetro es una herramienta confiable y versátil, perfecta tanto para laboratorios médicos como para la industria alimentaria ya que permite realizar un control riguroso de la textura de las cápsulas blandas, asegurando su eficacia y seguridad en el tratamiento farmacéutico. ",
      "Destacado por su capacidad de medir la fuerza G en alimentos y su uso en el control de calidad de cápsulas en laboratorios médicos, este equipo garantiza resultados precisos y consistentes en ambos campos. Su versatilidad lo convierte en una herramienta indispensable para asegurar la calidad y la consistencia en productos tanto alimenticios como medicinales.",
    ],
    image: texturometroImages,
    id: 4,
    extraInfo: [hermetico, automatico, software, print,manual],
  },
  {
    title: "Disolutor ",
    descriptionItems: [
      "Nuestro disolutor representa un avance significativo en las pruebas de disolución farmacéutica. Cumpliendo con las rigurosas normativas de la Farmacopea de los Estados Unidos (USP).",
      "Con un sistema de calentamiento por convección para una distribución uniforme del calor, indicación precisa del tiempo de dilución, recirculación de agua en la batea para estabilidad térmica y control de velocidad ajustado a las especificaciones USP, este equipo asegura resultados fiables y consistentes.",
      "Es la herramienta esencial para laboratorios que buscan excelencia en la evaluación de la liberación de fármacos.",
    ],
    id: 5,
    image: disolutorImages,
    extraInfo: [hermetico, automatico, software, usb, print,manual],
  },
  {
    title: "Automuestreador ",
    descriptionItems: [
      "Nuestro automuestreador es una solución eficiente para la automatización de procesos de muestreo en laboratorios. Con seteo programable de caudal y tiempo, garantiza resultados precisos y reproducibles.",
      "Equipado con 8 motores paso a paso, distribuye muestras de manera uniforme y eficiente. La bandeja para viales en acrílico asegura una manipulación segura de las muestras. ",
      "Es una herramienta indispensable para laboratorios que buscan optimizar sus operaciones de muestreo."
    ],
    image: automuestreadorImages,
    id: 6,
    extraInfo: [hermetico, automatico, tamaño, software, usb, print, calibracion,manual]
  },
  {
    title: "Penetrómetro ",
    descriptionItems: [
      "El penetrometro scout mide la consistencia y la dureza de diferentes productos farmacéuticos, como cremas, geles, supositorios, entre otros. Aplicando una fuerza controlada sobre la muestra y registrando la resistencia que ofrece el producto a esta fuerza. ",
      "Esta información es crucial para garantizar la calidad y la eficacia de los productos farmacéuticos y alimenticios, ya que la consistencia adecuada puede influir en la facilidad de aplicación, la absorción del medicamento por parte del paciente y la estabilidad del producto a lo largo de su vida útil. ",
      "El uso del penetrómetro scout en la industria farmacéutica ayuda a cumplir con los estándares de calidad y regulaciones establecidas por las autoridades sanitarias.",
    ],
    image: imagepenetrometro,
    id: 7,
    extraInfo: [ automatico, tamaño, software, usb, print, calibracion,manual],
  },
  {
    title: "Dosificadora de polvos ",
    descriptionItems: [
      "Programable según el tipo de producto y tolerancia requerida, esta dosificadora de polvos se adapta fácilmente a las necesidades de su proceso de producción. Controlada por una balanza electrónica de precisión, garantiza una dosificación exacta y uniforme, asegurando la calidad del producto final.",
      "Con la capacidad de más de un pico dosificador, esta máquina ofrece mayor versatilidad y capacidad de producción, optimizando la eficiencia en su línea de ensamblaje. ",
      'Su diseño ergonómico y su fácil mantenimiento hacen que esta dosificadora sea una solución práctica y conveniente para su laboratorio. Con controles intuitivos y accesibles.'
    ],
    image: imagedosificadoradepolvos,
    id: 8,
    extraInfo: [ automatico, tamaño, software, usb, print, calibracion,manual],
  },
  {
    title: "Friabilómetro ",
    descriptionItems: [
      "El fiabrilómetro ofrece funcionalidades avanzadas para el conteo preciso de comprimidos en la industria farmacéutica. Con la capacidad de inversión de marcha para la descarga automática de comprimidos en una caja de acrílico, agiliza el proceso de conteo y empaque. ",
      "Su calibración interior automática y conteo regresivo de vueltas aseguran la precisión en cada operación, simplificando el mantenimiento y cumpliendo con los estándares de calidad requeridos.",
      "Destacado por su rueda de acrílico transparente de precisa terminación, el fiabrilómetro ofrece una visualización clara del proceso de conteo.",
    ],
    image: imagefriabilometro,
    id: 12,
    extraInfo: [hermetico, automatico, tamaño, software, usb, print, calibracion,manual],
  },
  {
    title: "Medidor de densidad ",
    descriptionItems: [
      "Con la capacidad de ajustar el tiempo, ensayo y velocidad, nuestro medidor de densidad ofrece un control personalizado para adaptarse a sus necesidades específicas de prueba. Esta flexibilidad garantiza resultados consistentes y confiables en todas las condiciones de trabajo.",
      "La sujeción rápida de la bureta mediante elastómero agiliza la preparación de muestras, optimizando el tiempo de análisis sin comprometer la seguridad. Permite una manipulación eficiente y segura durante todo el proceso.",
      "Equipado con un display de cuatro renglones por veinte caracteres, nuestro medidor proporciona una interfaz clara y fácil de leer.",
    ],
    image: tapdencityImagenes,
    id: 13,
    extraInfo: [hermetico, automatico, tamaño, software, usb, print, calibracion,manual],
  },
  {
    title: "Test de hermeticidad ",
    descriptionItems: [
      "Nuestro test de hermeticidad ofrece una igualación automática de presión para una operación sin complicaciones. Equipado con un desecador con llaves para vacío y placas de porcelana de 210mm, garantiza un sellado hermético confiable.",
      "Además, cuenta con una bomba de vacío con manómetro de una tapa, proporcionando la presión necesaria con control absoluto. Con este equipo compacto, asegure la integridad de sus productos de manera eficiente y precisa.",
      'Con su diseño intuitivo y eficaz, este test de hermeticidad se convierte en la herramienta indispensable para verificar sus productos en la industria. Optimice sus procesos y garantice la calidad de sus productos con un equipo confiable y de alto rendimiento'
    ],
    image: testhermeticidadImagenes,
    id: 14,
    extraInfo: [hermetico, automatico, software, print,usb, calibracion],
  },
  {
    title: "Titulador automático ",
    descriptionItems: [
      "El titulador automático es ideal para la industria farmacéutica y alimenticia. Equipado con un agitador magnético integrado en su propio gabinete, garantiza una mezcla homogénea y eficiente de los componentes, asegura resultados precisos y consistentes.",
      "Cuenta con la validación de microbomba peristáltica, verificada mediante una balanza certificada. Esta característica garantiza un control absoluto sobre los procesos de dosificación, cumpliendo con los más altos estándares de calidad.",
      "Nuestros clientes puedenoptimizar sus procesos de producción, asegurando la calidad de sus productos y cumpliendo con las regulaciones vigentes. Una solución confiable y eficaz para satisfacer las demandas más exigentes del mercado.",
    ],
    image: tituladorautomaticoImages,
    id: 15,
    extraInfo: [hermetico, automatico, tamaño, software, print,usb, calibracion,manual],
  },
];

export default products;
