import { useEffect, useState } from "react"

const ReposList = () =>{
    const [repos, setRepos]= useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Dmp12/repos')
        .then(res => res.json)
        .then(resJson =>{
            setRepos(resJson)
        })
    }, [])

    return(
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Nome:</b> {repositorio.name}
                    <b>Linguagem:</b> {repositorio.language}
                    <a target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositórios</li>
        </ul>
    )
}

export default ReposList