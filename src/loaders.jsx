const URL = import.meta.env.VITE_BASE_URL 

//Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allBurgers = await response.json()
    return allBurgers
}

//Show Loader
export const showLoader = async ({ params })  => {
    const response = await fetch(`${URL}${params.id}/`)
    const aBurger = await response.json()
    return aBurger
} 