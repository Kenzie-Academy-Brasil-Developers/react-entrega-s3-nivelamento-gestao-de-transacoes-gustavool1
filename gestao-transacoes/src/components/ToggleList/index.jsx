import './style.css'
const ToggleList = ({ showEntry, setShowEntry }) =>{
    return(
        <div className='toggle-container'>
            {showEntry ?
             (
                <button className='btn-toggle' onClick={()=>setShowEntry(!showEntry)}>Mostrar Saidas </button>

             ):
             (
                <button className='btn-toggle' onClick={()=>setShowEntry(!showEntry)}>Mostrar Entradas</button>

             )
            }
        </div>
    )
}
export default ToggleList