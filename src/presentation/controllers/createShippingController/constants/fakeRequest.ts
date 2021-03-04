export const fakeRequest = {
    valid: {
        body: {
            customerName: 'valid_name',
            date: new Date(),
            departureAddress: {
                street: 'Rua Rogerio Karp',
                number: '305',
                additionalInfo: 'apt 203',
                neighborhood: 'Recreio dos Bandeirantes',
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro'
            },
            arrivalAddress: {
                street: 'Rua Leonel Magalhães',
                number: '5',
                additionalInfo: 'Casa de baixo',
                neighborhood: 'Charitas',
                city: 'Niterói',
                state: 'Rio de Janeiro'
            }
        }
    },

    noCustomerName: {
        body: {
            customerName: '',
            date: new Date(),
            departureAddress: {
                street: 'Rua Rogerio Karp',
                number: '305',
                additionalInfo: 'apt 203',
                neighborhood: 'Recreio dos Bandeirantes',
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro'
            },
            arrivalAddress: {
                street: 'Rua Leonel Magalhães',
                number: '5',
                additionalInfo: 'Casa de baixo',
                neighborhood: 'Charitas',
                city: 'Niterói',
                state: 'Rio de Janeiro'
            }
        }
    },

    noDate: {
        body: {
            customerName: 'valid_name',
            date: '',
            departureAddress: {
                street: 'Rua Rogerio Karp',
                number: '305',
                additionalInfo: 'apt 203',
                neighborhood: 'Recreio dos Bandeirantes',
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro'
            },
            arrivalAddress: {
                street: 'Rua Leonel Magalhães',
                number: '5',
                additionalInfo: 'Casa de baixo',
                neighborhood: 'Charitas',
                city: 'Niterói',
                state: 'Rio de Janeiro'
            }
        }
    },

    dateIsNotValidDateType: {
        body: {
            customerName: 'valid_name',
            date: 'invalid_date_type',
            departureAddress: {
                street: 'Rua Rogerio Karp',
                number: '305',
                additionalInfo: 'apt 203',
                neighborhood: 'Recreio dos Bandeirantes',
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro'
            },
            arrivalAddress: {
                street: 'Rua Leonel Magalhães',
                number: '5',
                additionalInfo: 'Casa de baixo',
                neighborhood: 'Charitas',
                city: 'Niterói',
                state: 'Rio de Janeiro'
            }
        }
    },

    noDepartureAddress: {
        body: {
            customerName: 'valid_name',
            date: new Date(),
            departureAddress: {},
            arrivalAddress: {
                street: 'Rua Leonel Magalhães',
                number: '5',
                additionalInfo: 'Casa de baixo',
                neighborhood: 'Charitas',
                city: 'Niterói',
                state: 'Rio de Janeiro'
            }
        }
    },

    noArrivalAddress: {
        body: {
            customerName: 'valid_name',
            date: new Date(),
            departureAddress: {
                street: 'Rua Rogerio Karp',
                number: '305',
                additionalInfo: 'apt 203',
                neighborhood: 'Recreio dos Bandeirantes',
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro'
            },
            arrivalAddress: {}
        }
    }
}