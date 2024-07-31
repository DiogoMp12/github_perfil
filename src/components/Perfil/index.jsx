import styles from './Perfil.module.css'

// export default () =>{
    const Perfil = ({nomeUsuario }) => {
    return(
        <header className= {styles.header}>
            <img className={styles.icon} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}></h1>
        </header>
    )
}

// export default function(){
export default Perfil;
// const Perfil = () => {