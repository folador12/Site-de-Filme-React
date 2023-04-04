import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './Components/Header'

import Home from './Pages/Home';
import Filme from './Pages/Filme';

import Error from './Pages/Error';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element = { <Home/> } />
                <Route path='/Filmes:id' element = { <Filme/> } />
                <Route path='*'   element = { <Error/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;