import { SiCoffeescript } from "react-icons/si";
import css from "./Description.module.css"

export default function Description({ name, description }) {
    return (
        <>
            <h1 className={css.descrTitle}>{name} <SiCoffeescript />
</h1>
            <p className={css.descrText}>{description}</p>
        </>
    )
}