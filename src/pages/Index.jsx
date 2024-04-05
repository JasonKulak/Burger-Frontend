import Burger from "../components/Burger"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allBurgers = useLoaderData()

    return (
        <>
            <h1>Build-A-Burger</h1>
            <Form action="/create" method="post">
                <label htmlFor="nameOfBurger">
                    <input type="text" name="nameOfBurger" id="nameOfBurger" />
                </label>
                <label htmlFor="ingredientOne">
                    <input type="text" name="ingredientOne" id="ingredientOne" />
                </label>
                <label htmlFor="ingredientTwo">
                    <input type="text" name="ingredientTwo" id="ingredientTwo" />
                </label>
                <label htmlFor="ingredientThree">
                    <input type="text" name="ingredientThree" id="ingredientThree" />
                </label>
                <label htmlFor="ingredientFour">
                    <input type="text" name="ingredientFour" id="ingredientFour" />
                </label>
                <label htmlFor="ingredientFive">
                    <input type="text" name="ingredientFive" id="ingredientFive" />
                </label>
                <label htmlFor="ingredientSix">
                    <input type="text" name="ingredientSix" id="ingredientSix" />
                </label>
                <label htmlFor="ingredientSeven">
                    <input type="text" name="ingredientSeven" id="ingredientSeven" />
                </label>
                <label htmlFor="haveEaten">
                    <input type="boolean" name="haveEaten" id="haveEaten" data-enable-time />
                </label>
                <button>Add New Burger</button>
            </Form>

            <hr />
            {allBurgers.map((burger, i) => <Burger burger={burger} key={i}/>)}
        </>
    )
}