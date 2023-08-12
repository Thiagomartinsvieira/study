
import { useContext } from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import { someContext } from '../components/HookUseContext'

const Home = () => {
    const {contextValue} = useContext(someContext)

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue} </p>
            <hr />
        </div>
    )
}

export default Home