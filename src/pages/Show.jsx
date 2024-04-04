import { Link, useLoaderData } from "react-router-dom"

export default function Show(props) {

    const aBurger = useLoaderData()
    console.log(aBurger)
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

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}