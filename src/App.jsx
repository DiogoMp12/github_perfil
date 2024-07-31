import { useState } from "react"


import Perfil from "./components/Perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/repos-list"
function App() {
const[formularioEstaVisivel, setFormulaEstarioVisivel] =useState(true)
const [nomeUsuario,setNomeUsuario] = useState('')

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
      {/* {formularioEstaVisivel &&(
        <Formulario/>
      )}

      <button onClick={() => setFormulaEstarioVisivel(!formularioEstaVisivel)} type='button'>toggle form</button> */}
    </>
  )
}
export default App