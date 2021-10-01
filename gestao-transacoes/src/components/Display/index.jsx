import Total from '../Total'
import './style.css'
const Display = ({ transactions,showEntry }) => {
    return(
        <div className='display-container'>
            { showEntry ? 
            (
                <ul>
                    <Total list={transactions.filter((fruit)=>fruit.quantity > 0)}/>
                    <h3>Entradas</h3>
                        
                { transactions.filter((fruit)=>fruit.quantity > 0).map((fruit)=>(
                    <li key={fruit.price}>
                        <p>{fruit.name}</p>
                        <p>Preço: {fruit.price}</p>
                        <p>Quantidade: {fruit.quantity}</p>
                    </li>
                ))

                }
             </ul>  
            ):(
                
                <ul>
                    <Total list={transactions.filter((fruit)=>fruit.quantity < 0)}/>
                    <h3>Saidas</h3>
                { transactions.filter((fruit)=>fruit.quantity < 0).map((fruit)=>(
                    <li key={fruit.price}>
                        <p>{fruit.name}</p>
                        <p>Preço: {fruit.price}</p>
                        <p>Quantidade: {fruit.quantity}</p>
                    </li>
                ))

                }
             </ul>  
            )
            
             }
        </div>
    )
}

export default Display