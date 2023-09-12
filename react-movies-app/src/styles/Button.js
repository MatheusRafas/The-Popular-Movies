import styled from "styled-components";

function decideButtonBackground(state){
    switch(state){
        case "reset":
            return "red"
            break;
        case "remove":
            return "red"
            break;
        default:
            return "black"
            break;

    }
}


export const Button = styled.button`
    font-size: 18px;
    border: 0;
    cursor: pointer;
    margin-left: 10px;
    padding: 5px 10px;
    background-color: ${props => decideButtonBackground(props.state)};
    color: white;
`