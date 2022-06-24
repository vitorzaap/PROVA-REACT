import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { listAnime } from './api/anime'
import List from "../src/pages/list"
import Home from "../src/pages/App"

export default function Index(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<List />} />

        </Routes>
        </BrowserRouter>
    );
}