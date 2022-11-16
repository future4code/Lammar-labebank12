import { Account, Transaction } from "./types"

export let accounts: Account[] = [
    {
        id: 1,
        name: 'Paulo',
        cpf: '14566114504',
        birthDate: '1989/10/13',
        balance: 500
    },
    {
        id: 2,
        name: 'Mário',
        cpf: '59484457817',
        birthDate: '1980/05/05',
        balance: 200,
    },
    {
        id: 3,
        name: 'Joao',
        cpf: '14242345316',
        birthDate: '1965/09/21',
        balance: 5000,
    }
]

export const Transactions: Transaction[] = [
    {
        id: 1,
        payerId: 1,
        dateTime: '05/10/2021 15:40',
        value: 500,
        recieverId: 3
    },
    {
        id: 2,
        payerId: 1,
        dateTime: '10/10/2021 18:00',
        value: 100,
        recieverId: 3
    },
    {
        id: 3,
        payerId: 3,
        dateTime: '14/10/2021 09:10',
        value: 50,
        recieverId: 2
    },

]
