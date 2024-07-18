import { useState,useEffect } from "react"

const Formulario = () =>{

const [materiaA, setmateriaA] = useState(0);
const [materiaB, setmateriaB] = useState(0);
const [materiaC, setmateriaC] = useState(0);

useEffect(()=> {
    console.log('componente inicializou')

    return()=>{
        console.log('component finalizou')
    }
}, [])

useEffect(() => {
console.log('funcionou!')
},[materiaA,materiaB,materiaC])

const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;
    
    if(media >= 7){
        return (
            <p>Você foi aprovado</p>
        )
    } else{
        return(
            <p>Você não foi aprovado</p>
        )
    }
}

    return(
    <form>
    <input type="number" placeholder="Nota maria A" onChange={evento => setmateriaA (parseInt(evento.target.value))} />
    <input type="number" placeholder="Nota maria B" onChange={evento => setmateriaB (parseInt(evento.target.value))}/>
    <input type="number" placeholder="Nota maria C" onChange={evento => setmateriaC (parseInt(evento.target.value))}/>
    {renderizaResultado()}
    </form>
    )
}

export default Formulario