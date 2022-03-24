import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: white; ;
`;

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
`;

export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;

p{
    &:nth-child(2) {
        color: #fff;
    }
    &:nth-child(3){
        font-size: 1.5rem;
        font-weight:500;
        color: #e07924;
    }
}
svg {
    fill: #e07924;
    margin-right:0.5rem;
}

`;

export const Menu = styled.ul`
height: 100%;
display:flex;
jsutify-content: space-between;
list-style: none;

@media screen and (max-width: 960px) {
    background-color: white;
    position: absolute;
    top:70px;
    left: ${({open})=> open ? "0" : "-100%"};
    width: 100%;
    height:90vh;
    justify-content:center;
    transition:0.5s all ease;

}



`;

export const MenuItem = styled.li`
margin-left: 5px;
height: 100%;

@media screen and (max-width:960px) {
    width:100%;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
}


`;

export const MenuItemLink = styled.a `
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem 2,5rem;
color: black;
font-family: monospace;
font-size: 1rem;
font-weight:300;
cursor: pointer;
transition: 0.5s all ease;
margin-left: 20px;

& :hover {
    color: #fff;
    background-color:rgba(255, 99, 71, 0.4);
    transition: 0.5s all ease;
}

div{
    width: 100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;

    svg{
        display:none;
        fill: black;
        ${'' /* margin-right:0.5rem; */}
    }

}

@media screen and (max-width:960px) {
    width:100%;

    div {
        width:20%;
        justify-content:left;

        svg{
            display: flex;
        }
    }
}

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
    fill: purple;
    margin-right:0.5rem;
    }
}

`;