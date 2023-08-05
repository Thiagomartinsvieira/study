import { useContext } from "react"
import { TitleColorContext } from "../../context/TitleContext"

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext) 

    if(!context) {
        console.log('contexto não encontrado')
    }

    return context
}