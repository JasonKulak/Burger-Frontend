import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL 

//Create Action
export const createAction = async ({request}) => {
    //get form data
    const formData = await request.formData()
    //construct request body
    const newBurger = {
        nameOfBurger: formData.get("nameOfBurger"),
        ingredientOne: formData.get("ingredientOne"),
        ingredientTwo: formData.get("ingredientTwo"),
        ingredientThree: formData.get("ingredientThree"),
        ingredientFour: formData.get("ingredientFour"),
        ingredientFive: formData.get("ingredientFive"),
        ingredientSix: formData.get("ingredientSix"),
        ingredientSeven: formData.get("ingredientSeven"),
        haveEaten: formData.get("haveEaten")
    }

    //send request to the backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBurger)
    })

    //redirect back to the index
    return redirect("/")
}

// export const updateAction = async ({request, params}) => {
//     const formData = await request.formData()
//     const id = params.id
//     const updateBurger = {
//         nameOfBurger: formData.get("Burger name"),
//         ingredientOne: formData.get("ingredient")
//     }
//     await fetch(`${URL}${id}/`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify(updatedBurger)
//     }) 
//     return redirect(`/burgers/${id}`)
// }

// export const deleteAction = async ({params}) => {
//     const id = params.id 
//     await fetch(`${URL}${id}/`, {
//         method: "DELETE"  
//     })
//     return redirect("/")
// }