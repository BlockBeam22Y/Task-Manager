const courses = {
    'MB158': {
        code: 'MB158',
        name: 'Variable Compleja y Análisis de Fourier',
        credits: 3,
        grade: {
            name: 'Nota del curso',
            value: 15.5,
            weight: 1,
            children: [
                {
                    name: 'Examen parcial',
                    value: 16,
                    weight: 1,
                },
                {
                    name: 'Examen final',
                    value: 15,
                    weight: 2,
                },
                {
                    name: 'Promedio de prácticas',
                    value: 16.333,
                    weight: 1,
                    children: [
                        {
                            name: 'Práctica 1',
                            value: 16,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 2',
                            value: 7,
                            weight: 0,
                        },
                        {
                            name: 'Práctica 3',
                            value: 13,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 4',
                            value: 20,
                            weight: 1,
                        },
                    ]
                }
            ]
        }
    },
    'MC338': {
        code: 'MC338',
        name: 'Dinámica',
        credits: 4,
        grade: {
            name: 'Nota del curso',
            value: 11,
            weight: 1,
            children: [
                {
                    name: 'Examen parcial',
                    value: 8,
                    weight: 1,
                },
                {
                    name: 'Examen final',
                    value: 12,
                    weight: 2,
                },
                {
                    name: 'Promedio de prácticas',
                    value: 11.666,
                    weight: 2,
                    children: [
                        {
                            name: 'Práctica 1',
                            value: 14,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 2',
                            value: 11,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 3',
                            value: 8,
                            weight: 0,
                        },
                        {
                            name: 'Práctica 4',
                            value: 10,
                            weight: 1,
                        },
                    ]
                }
            ]
        }
    },
    'ML121': {
        code: 'ML121',
        name: 'Laboratorio de Circuitos Eléctricos',
        credits: 1,
        grade: {
            name: 'Nota del curso',
            value: 14.5,
            weight: 1,
            children: [
                {
                    name: 'Laboratorio 1',
                    value: 14,
                    weight: 1,
                },
                {
                    name: 'Laboratorio 2',
                    value: 15,
                    weight: 1,
                },
                {
                    name: 'Laboratorio 3',
                    value: 16,
                    weight: 1,
                },
                {
                    name: 'Laboratorio 4',
                    value: 14,
                    weight: 1,
                },
                {
                    name: 'Laboratorio 5',
                    value: 13,
                    weight: 0,
                },
                {
                    name: 'Laboratorio 6',
                    value: 14,
                    weight: 1,
                },
                {
                    name: 'Laboratorio 7',
                    value: 13,
                    weight: 0,
                },
                {
                    name: 'Laboratorio 8',
                    value: 14,
                    weight: 1,
                },
            ]
        }
    },
    'ML202': {
        code: 'ML202',
        name: 'Máquinas Eléctricas',
        credits: 4,
        grade: {
            name: 'Nota del curso',
            value: 11.2,
            weight: 1,
            children: [
                {
                    name: 'Examen parcial',
                    value: 12,
                    weight: 1,
                },
                {
                    name: 'Examen final',
                    value: 8,
                    weight: 2,
                },
                {
                    name: 'Promedio de prácticas',
                    value: 17.166,
                    weight: 1,
                    children: [
                        {
                            name: 'Práctica 1',
                            value: 19,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 2',
                            value: 18,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 3',
                            value: 0,
                            weight: 0,
                        },
                        {
                            name: 'Práctica 4',
                            value: 16,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 1',
                            value: 17,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 2',
                            value: 16,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 3',
                            value: 17,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 4',
                            value: 0,
                            weight: 0,
                        },
                    ]
                }
            ]
        }
    },
    'ML831': {
        code: 'ML831',
        name: 'Análisis y Diseño de Circuitos Electrónicos',
        credits: 5,
        grade: {
            name: 'Nota del curso',
            value: 11.8,
            weight: 1,
            children: [
                {
                    name: 'Examen parcial',
                    value: 13,
                    weight: 1,
                },
                {
                    name: 'Examen final',
                    value: 16,
                    weight: 2,
                },
                {
                    name: 'Promedio de prácticas',
                    value: 7,
                    weight: 2,
                    children: [
                        {
                            name: 'Práctica 1',
                            value: 5,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 2',
                            value: 0,
                            weight: 0,
                        },
                        {
                            name: 'Práctica 3',
                            value: 3,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 4',
                            value: 13,
                            weight: 1,
                        },
                    ]
                }
            ]
        }
    },
    'MN204': {
        code: 'MN204',
        name: 'Mecánica de Fluidos',
        credits: 4,
        grade: {
            name: 'Nota del curso',
            value: 11.7,
            weight: 1,
            children: [
                {
                    name: 'Examen parcial',
                    value: 7,
                    weight: 1,
                },
                {
                    name: 'Examen final',
                    value: 7,
                    weight: 0,
                },
                {
                    name: 'Promedio de prácticas',
                    value: 14,
                    weight: 1,
                    children: [
                        {
                            name: 'Práctica 1',
                            value: 12,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 2',
                            value: 12,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 3',
                            value: 18,
                            weight: 1,
                        },
                        {
                            name: 'Práctica 4',
                            value: 10,
                            weight: 0,
                        },
                    ]
                },
                {
                    name: 'Examen sustitutorio',
                    value: 13,
                    weight: 2,
                },
            ]
        }
    },
    'MT127': {
        code: 'MT127',
        name: 'Análisis y Diseño de Circuitos Digitales',
        credits: 5,
        grade: {
            name: 'Nota del curso',
            value: 10.5,
            weight: 1,
            children: [
                {
                    name: 'Examen parcial',
                    value: 15,
                    weight: 1,
                },
                {
                    name: 'Examen final',
                    value: 7,
                    weight: 2,
                },
                {
                    name: 'Promedio de prácticas',
                    value: 11.75,
                    weight: 2,
                    children: [
                        {
                            name: 'Laboratorio 1',
                            value: 16,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 2',
                            value: 10,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 3',
                            value: 12,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 4',
                            value: 9,
                            weight: 1,
                        },
                        {
                            name: 'Laboratorio 5',
                            value: 0,
                            weight: 0,
                        },
                    ]
                }
            ]
        }
    },
};

export default courses;