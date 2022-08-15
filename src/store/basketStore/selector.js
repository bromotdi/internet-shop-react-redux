export const getTotalBasketPrice = state => {
    const { basket, phones } = state
    const phonesInBasket = basket.map(id => phones[id])
    let phonesPrice = 0
    phonesInBasket.forEach(({ price }) => { phonesPrice = phonesPrice + Number(price) })
    return phonesPrice
}

export const getTotalBasketCount = state => state.basket.length

export const getBasketPhonesWithCount = state => {
    const { phones, basket } = state
    const uniqueIds = [...new Set(basket)]
    const phonesList = uniqueIds.map(id => {
        const count = basket.filter(basketId => basketId === id).length
        return { ...phones[id], count }
    })

    return phonesList
}