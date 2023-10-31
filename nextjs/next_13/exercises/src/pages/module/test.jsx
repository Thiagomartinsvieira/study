import Default, { Comp1 as Blabla, Comp2, Comp4, Comp5, Comp6 } from "@/components/modulo/functional"

const test = () => {
    return (
        <div>
            <Blabla />
            <Comp2 />
            <Default />
            <Comp4 />
            <Comp5 />
            <Comp6 msg='Hi' />
        </div>
    )
}

export default test