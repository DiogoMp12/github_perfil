import { useState } from "react"


import Perfil from "./components/Perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/ReposList"
function App() {
const[formularioEstaVisivel, setFormulaEstarioVisivel] =useState(true)

  return (
    <>
      <Perfil nome='diogo' endereco='https://github.com/DMp12.png' />
      <ReposList/>
      
      {/* {formularioEstaVisivel &&(
        <Formulario/>
      )}

      <button onClick={() => setFormulaEstarioVisivel(!formularioEstaVisivel)} type='button'>toggle form</button> */}
    </>
  )
}
export default App