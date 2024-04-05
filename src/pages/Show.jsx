import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aBurger = useLoaderData()

    //optional chaining "?."    
    const id = aBurger?.url.split("/")[4]

    return (
        <div>
            <h1>{aBurger.nameOfBurger}:</h1>
            <h4>{aBurger.ingredientOne}</h4>
            <h4>{aBurger.ingredientTwo}</h4>
            <h4>{aBurger.ingredientThree}</h4>
            <h4>{aBurger.ingredientFour}</h4>
            <h4>{aBurger.ingredientFive}</h4>
            <h4>{aBurger.ingredientSix}</h4>
            <h4>{aBurger.ingredientSeven}</h4>
            {/* Want to conditionally render a value based on haveEaten */}
            <h2>{aBurger.haveEaten === true ? "I ate this burger and it rocks my socks off":"I have not had this burger but I hope to one day murder it with my mouth"}</h2>

            <div>
                {/* Update form */}
                <Form action={`/update/${id}`} method="POST">
                <label htmlFor="nameOfBurger">
                    Rename your Burger (if needed)
                    <input type="text" name="nameOfBurger" id="nameOfBurger" defaultValue={aBurger.nameOfBurger}/>
                </label>
                <label htmlFor="ingredientOne">
                    Update/edit your ingredients
                    <input type="text" name="ingredientOne" id="ingredientOne" defaultValue={aBurger.ingredientOne}/>
                </label>
                <label htmlFor="ingredientTwo">
                    <input type="text" name="ingredientTwo" id="ingredientTwo" defaultValue={aBurger.ingredientTwo}/>
                </label>
                <label htmlFor="ingredientThree">
                    <input type="text" name="ingredientThree" id="ingredientThree" defaultValue={aBurger.ingredientThree}/>
                </label>
                <label htmlFor="ingredientFour">
                    <input type="text" name="ingredientFour" id="ingredientFour" defaultValue={aBurger.ingredientFour}/>
                </label>
                <label htmlFor="ingredientFive">
                    <input type="text" name="ingredientFive" id="ingredientFive" defaultValue={aBurger.ingredientFive}/>
                </label>
                <label htmlFor="ingredientSix">
                    <input type="text" name="ingredientSix" id="ingredientSix" defaultValue={aBurger.ingredientSix}/>
                </label>
                <label htmlFor="ingredientSeven">
                    <input type="text" name="ingredientSeven" id="ingredientSeven" defaultValue={aBurger.ingredientSeven}/>
                </label>
                <label htmlFor="haveEaten">
                    <input type="boolean" name="haveEaten" id="haveEaten" data-enable-time defaultValue={aBurger.haveEaten}/>
                </label>
                <button style={{"backgroundColor": "blue"}}>Update this Burger</button>
                </Form>

                {/* Delete Form */}
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Destroy This Burger!!!</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}