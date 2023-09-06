import Functionnality from "./Functionnality";
import { functionnalitiesList } from "../data/functionnalitiesList";

export default function Functionnalities() {
    return (
        <section>
            <Functionnality functionnalities={functionnalitiesList} />
        </section>
    )
}