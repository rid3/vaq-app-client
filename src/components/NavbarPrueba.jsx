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
            <LogoContainer>
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

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                    <FaHome/>
                    <a href="/">Home</a> */}
                   {/* <NavLink to="/"> Home </NavLink> */}
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem >
                    <MenuItemLink>
                    {/* <div>
                    <FaCaretRight/>
                    <a href="/perfilesmed">Perfiles Medicxs</a> */}
                    <NavLink to ="/perfilesmed"> Perfiles Medicxs </NavLink>    
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                    <FaCaretRight/>
                    { !isLoggedIn && <a href="/login/medicx">Log In Medicx</a> } */}
                { !isLoggedIn && <NavLink to ="/login/medicx"> Log In Medicx </NavLink> }
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                        <FaCaretRight/>
                    { !isLoggedIn && <a href="/login/cliente"> Log In Cliente </a> } */}
                    { !isLoggedIn && <NavLink to ="/login/cliente"> Log In Cliente </NavLink> }
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                        <FaCaretRight/>
                    { !isLoggedIn && <a href="/signup"> Sign Up </a> } */}
                    { !isLoggedIn && <NavLink to="/signup"> Sign Up </NavLink> }  
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                        <FaCaretRight/>
                    { isCliente && <a href="/perfilcliente">Perfil PrivCli</a> } */}
                { isCliente && <NavLink to="/perfilcliente" > Perfil PrivCli </NavLink> } 
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                        <FaCaretRight/>
                    { isMedicx && <a href="/perfilmedicx"> Perfil PrivMed</a> } */}
                    { isMedicx && <NavLink to="/perfilmedicx" > Perfil PrivMed</NavLink> }   
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                    {/* <div>
                        <FaCaretRight/> */}
                    {/* { isMedicx && <a href="/user-list"> Chat Medicxs</a> } */}
                    { isMedicx && <NavLink to="/user-list">Chat Medicxs</NavLink> }
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
            
                    { isLoggedIn && <button onClick={ handleClick } >Log Out</button> }
                    {/* </div> */}
                    </MenuItemLink>
                </MenuItem>
            </Menu>

          </IconContext.Provider>
        </Wrapper>
    </Container>

  )
}

export default NavbarPrueba