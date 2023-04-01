import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './Components/Header'

import Home from './Pages/Home';
import Filme from './Pages/Filme';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element = { <Home/> } />
                <Route path='/Filmes' element = { <Filme/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;