import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
    return(

        <header>

            <Link className='home' to='/'>Meetflix</Link>
            <Link className='filme' to='/Favoritos'>Meus Filmes</Link>
            
        </header>
    )
}

export default Header;