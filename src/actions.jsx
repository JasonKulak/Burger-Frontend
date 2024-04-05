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

//Update Action
export const updateAction = async ({request, params}) => {
    //get the form data
    const formData = await request.formData()
    //get the burger id
    const id = params.id
    //construct the request body
    const updatedBurger = {
        nameOfBurger: formData.get("Burger name"),
        ingredientOne: formData.get("ingredient"),
        ingredientTwo: formData.get("ingredientTwo"),
        ingredientThree: formData.get("ingredientThree"),
        ingredientFour: formData.get("ingredientFour"),
        ingredientFive: formData.get("ingredientFive"),
        ingredientSix: formData.get("ingredientSix"),
        ingredientSeven: formData.get("ingredientSeven"),
        haveEaten: formData.get("haveEaten")
    }
    //send the request body to the backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(updatedBurger)
    }) 
    //redirect to the show page
    return redirect(`/burgers/${id}`)
}

//Delete Action
export const deleteAction = async ({params}) => {
    //get the burger id
    const id = params.id 
    //send the request to the backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"  
    })
    //redirect to the index page
    return redirect("/")
}