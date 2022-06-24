import { useEffect, useState } from "react";
import { Link }from "react-router-dom"
import { listAnime } from "../api/anime"
import "./list.scss"

export default function Index(){
    const [anime, setAnime] = useState([]);
    async function list() {
        const r = await listAnime();
        setAnime(r);
      }

    useEffect(() => {
        list()
    }, [])
    return(
        <div className="container">
            <div className="content">

            <table className="table">
            <tr>
              <th className="name-anime">NOME DO ANIME</th>
            </tr>
        {anime.map(item => 
            <tr>
              <td>{item.nome}</td>
            </tr>
          )}
          </table>
          <Link to="/">Voltar</Link>
            </div>
      </div>
    );
}