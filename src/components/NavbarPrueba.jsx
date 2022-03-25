import { NavLink, useNavigate } from "react-router-dom"; 
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon  } from "./Navbar.elements"
import {FaRainbow, FaBandAid, FaTimes} from "react-icons/fa"
import {IconContext } from "react-icons"
import { useState } from "react"

function NavbarPrueba(props) {

//NAVBAR RESPONSIVE
const [ showMobileMenu, setShowMobileMenu ] = useState(false)


//-------------------------
  const { isLoggedIn, setIsLoggedIn } = props
  const { isCliente, setIsCliente } =props
  const { isMedicx, setIsMedicx } = props 

  const navigate = useNavigate()

  const handleClick = () => {
    setIsLoggedIn(false)
    setIsCliente(false)
    setIsMedicx(false)
    localStorage.removeItem("authToken")
    navigate("/")
  }

  return (

    <Container>
        <Wrapper>
        <IconContext.Provider value={{ style: {fontSize: "2em"} }} >
            <LogoContainer >
            <NavLink to="/">  <FaRainbow /></NavLink>
            <p></p>
            <p>V.A.Q.</p>
            </LogoContainer>

            <MobileIcon onClick= { () => setShowMobileMenu (!showMobileMenu)} >

            {
             showMobileMenu ? <FaTimes/> :  <FaBandAid />
            }
            </MobileIcon>


            <Menu open = { showMobileMenu } >


                <MenuItem >
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)}  >
            
                    <NavLink style={{color: 'purple', textDecoration: 'none'}} to ="/perfilesmed"> Perfiles Medicxs </NavLink>    
        
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
    
                { !isLoggedIn && <NavLink  style={{color: 'lightblue', textDecoration: 'none'}} to ="/login/medicx"> Log In Medicx </NavLink> }
    
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
              
                    { !isLoggedIn && <NavLink  style={{color: 'lightblue', textDecoration: 'none'}} to ="/login/cliente"> Log In Paciente </NavLink> }
     
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
         
                    { !isLoggedIn && <NavLink  style={{color: 'green', textDecoration: 'none'}} to="/signup"> Sign Up </NavLink> }  
              </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
             
                { isCliente && <NavLink style={{color: 'green', textDecoration: 'none'}} to="/perfilcliente" > Perfil Priv </NavLink> } 
      
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
       
                    { isMedicx && <NavLink style={{color: 'blue', textDecoration: 'none'}} to="/perfilmedicx" > Perfil Priv</NavLink> }   
          
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
             
                    { isMedicx && <NavLink style={{textDecoration: 'none'}} to="/user-list">Chat Médicxs</NavLink> }
    
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink onClick= { () => setShowMobileMenu (!showMobileMenu)} >
            
                    { isLoggedIn && <button onClick={ handleClick } >Log Out</button> }
   
                    </MenuItemLink>
                </MenuItem>
            </Menu>

          </IconContext.Provider>
        </Wrapper>
    </Container>

  )
}

export default NavbarPrueba