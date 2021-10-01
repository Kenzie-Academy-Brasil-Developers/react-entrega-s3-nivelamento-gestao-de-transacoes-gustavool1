const Total = ({list}) =>{
    console.log(list)
    return(
        <div>
            <h3>Total</h3>
            <p>R${list.reduce((prevFruit,fruit)=>prevFruit + Math.abs(fruit.price) * Math.abs(fruit.quantity)  ,0)}</p>
        </div>
    )
    
}
export default Total