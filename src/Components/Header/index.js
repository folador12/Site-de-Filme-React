import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
    return(

        <header>

            <Link className='home' to='/'>Metflix</Link>
            <Link className='filme' to='/Filmes'>Meus Filmes</Link>
            
        </header>
    )
}

export default Header;