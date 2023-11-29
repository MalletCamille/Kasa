import { Link } from 'react-router-dom'
import styled from 'styled-components'
//import colors from '../../utils/style/colors/colors.jsx'
import logokasa from '../assets/LOGO.svg'

const StyledLink = styled(Link)`
color: #FF6060;
font-family: Montserrat;
font-weight: 500;
font-size: 24px;
`


const LogoImage = styled.img`
display : flex;
flex-direction : row;
margin-left : 15px;
margin-right : 7px;
`


function Header() {
    return (
        <header>
                <LogoImage src={logokasa} alt="logo Kasa" />
                <nav>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/survey/1">A propos</StyledLink>
                </nav>
        </header>
    )
}

export default Header