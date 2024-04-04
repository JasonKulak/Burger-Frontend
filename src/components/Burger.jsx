import { Link } from "react-router-dom"

export default function Burger({ burger }) {

    const id = burger.url.split("/")[4]
    console.log(id)

    return (
        <div>
            <Link to={`/burgers/${id}`}>
                <h1>{burger.nameOfBurger}</h1>
            </Link>
        </div>
    )
}