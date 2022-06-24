import "./App.css";
import { useState } from "react";
import { postAnime, listAnime } from "../api/anime";
import { Link }from "react-router-dom"
import { toast } from "react-toastify";

function App() {
  const [name, setName] = useState("");
  async function post() {
    try {
      if (!name) {
        throw new Error("Preencha o campo primeiro!");
      }
      const r = await postAnime(name);
      toast.success(`Anime "${name}" postado com sucesso!"`);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.erro);
      } else {
        toast.error(err.message);
      }
    }
  }
  return (
    <div className="App">
      <div className="main-content">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={post}>POSTAR</button>
        <Link to="/view">VER ANIMES POSTADOS</Link>
      </div>
    </div>
  );
}

export default App;
