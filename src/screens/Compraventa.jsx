import React from 'react'
import { FlatList } from 'react-native'
import { ItemCar } from '../components/compraventa/ItemCar'

const Compraventa = () => {
    const data = [
        {
            imagen: 'https://img.remediosdigitales.com/dc07ef/ford-mustang-shelby-gt500-mexico_6/450_1000.jpg',
            descripcion: 'Ford Mustang Shelby GT500',
            motor: 'V8 5.2L 760hp Gasolina',
            precio: '$630.153.148'
        },
        {
            imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2018/11/20181126-CHEVROLET-CAMARO-SS-2019-COLOMBIA-PRECIO-CARACTERISTICAS-03.jpg',
            descripcion: 'Chevrolet Camaro SS',
            motor: 'V8 6.2L 455cv Gasolina ',
            precio: '$155.000.000'
        },
        {
            imagen: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/60421/dodge-charger-srt-hellcat-octane-edition-port.jpg',
            descripcion: 'Dodge Charger SRT Hellcat',
            motor: 'V8 6.2L 807hp Gasolina',
            precio: '$442.323.507'
        },
        {
            imagen: 'https://www.carscoops.com/wp-content/uploads/2023/04/Dodge-Challenger-Demon-170-Review-1024x576.jpg',
            descripcion: 'Dodge Challenger SRT Demon 170',
            motor: 'V8 6.2L 1025hp Gasolina',
            precio: '$460.000.000'
        },
        {
            imagen: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/ES-PLA-local/2022/Vehiculos/El-nuevo-Porsche-911-Turbo-S-llega-Ecuador/PLA22_1125_fine.jpg/jcr:content/PLA22_1125_fine.jpg',
            descripcion: 'Posrche 911 Turbo S',
            motor: 'V6 3.7L 650hp Gasolina',
            precio: '$1.648.533.250'
        },
        {
            imagen: 'https://autosdeprimera.com/wp-content/uploads/2021/04/renault-duster-outsider-2021-a.jpg',
            descripcion: 'Duster 1.3Turbo',
            motor: '4L 1.3L 154hp Gasolina',
            precio: '$90.000.000'
        },
        {
            imagen: 'https://motorsactu.com/wp-content/uploads/2019/08/Mercedes-Benz-GLE53_AMG_4Matic_Coupe-2020-1280-05.jpg',
            descripcion: 'Mercedes GLE 53 AMG',
            motor: '6L 3.0L 435hp Gasolina',
            precio: '$340.000.000'
        },
        {
            imagen: 'https://www.carrosyclasicos.com/media/k2/items/cache/1450fe47fc6d3f93ff072c134eaeda35_XL.jpg',
            descripcion: 'Renault Twingo',
            motor: '4L 1.2L 900hp Gasolina',
            precio: '$15.000.000'
        },
    ]

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (<ItemCar imagen={item.imagen} descripcion={item.descripcion} motor={item.motor} precio={item.precio} />
            )} />
    )
}

export default Compraventa