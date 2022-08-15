import phones from './mockPhones'
import categories from './mockCategories'

export const fetchPhones = async () => {
    //return new Promise(resolve => resolve(phones))

    const resp = await fetch('https://run.mocky.io/v3/b8381261-49f3-4a4b-8411-ae3ffc0654a0' );
    const { phones } = await resp.json()
    return phones
}

export const loadMorePhones = async ({offset}) => {
    return new Promise(resolve => resolve(phones))
}

export const fetchPhoneById = async id => {
    return new Promise((resolve, reject) => {
        const phone = phones.find(item => item.id === id)
        resolve(phone)
    } )
}

export const fetchCategories = async () => {
    return new Promise(resolve => resolve(categories))
}