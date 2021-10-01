import { useState } from 'react'
import './style.css'
const Register = ({transactions,setTransactions}) => {
    const [ fruit, setFruit ] = useState({
        name:'',
        quantity:0,
        price:0
    }) 
    const handleAdd = (e) =>{
        e.preventDefault()
        setTransactions([...transactions, fruit])
    }
    
    return(
        <div className='form-container'>
            <form>
                <h3>Registrar</h3>
                <input type='text' placeholder='Nome da fruta' onChange={ (e)=>setFruit({...fruit, name: e.target.value}) }/>
                <input type='number' placeholder='Quantidade de frutas' onChange={ (e)=>setFruit({...fruit, quantity:e.target.value}) }/>
                <input type='number' placeholder='Preço' onChange={(e)=> setFruit({...fruit, price:e.target.value})}/>
                <button onClick={handleAdd}>Entrada</button>

            </form>
        </div>
    )
}

export default Register