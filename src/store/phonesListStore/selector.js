import { getActiveCategoryId } from '../catergoriesStore/selector'

export const getPhones = (state,ownProps) => {
    const { phonesPage, phones } = state
    console.log( 'state', state )
    const activeCategoryId = getActiveCategoryId(ownProps)
    console.log('activeCategoryId', activeCategoryId)
    console.log('phonesPage', phonesPage)
    const phonesList = phonesPage.ids.map(id => phones[id])
    let filteredPhones = activeCategoryId ? phonesList.filter(({ categoryId }) => categoryId === activeCategoryId) : phonesList
    filteredPhones = filteredPhones.filter(({ name }) => name.toLowerCase().includes(phonesPage.search.toLowerCase()))

    return filteredPhones
}