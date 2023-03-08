import { useState } from 'react'
import './App.css'

function App() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [idade, setIdade] = useState("");
  const [pokemonFavorito, setPokemonFavorito] = useState("");

  const [userList, setUserList] = useState([]);

const addUserList =()=>{
    const newUser ={
      name: nomeCompleto,
      age: idade,
      pokemon: pokemonFavorito
    }

    setUserList([...userList, newUser])
    setNomeCompleto("");
    setIdade("");
    setPokemonFavorito("");
}



  return (
  
      <div className="container">
        <h1>Cadastro de Treinadores</h1>
   
        <form>
            <input type="text" value={nomeCompleto} placeholder={"Nome do treinador"} onChange={(event)=> setNomeCompleto(event.target.value)}></input>
            <input type="text" value={idade} placeholder={"Idade"} onChange={(event)=> setIdade(event.target.value)}></input>
            <input type="text" value={pokemonFavorito} placeholder={"Seu Pokemon favorito"} onChange={(event)=> setPokemonFavorito(event.target.value)}></input>
            <input type="button" value="" onClick={addUserList}/>
        </form>
        <h2>Treinadores cadastrados:</h2>
        <ul>
          {userList.map((item,index)=>(<li key={index}>{item.name} - {item.age} anos - {item.pokemon}</li>))}
        </ul>
      </div>
     
      
  )
}

export default App
