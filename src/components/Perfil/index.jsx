import './perfil.css'

// export default () =>{
    const Perfil = ({endereco, nome}) => {
    return(
        <div>
            <img className='perfil-avatar' src={endereco}/>
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

// export default function(){
export default Perfil;
// const Perfil = () => {