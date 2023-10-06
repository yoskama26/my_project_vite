import '../App'
import styled from "@emotion/styled";


const User = ({avatar, name, onClick}) => {
    return(
        <UserContainer>
            <Avatar src={avatar}/>
            <div>{name}</div>
        </UserContainer>
    )
}

const UserContainer = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
padding: 0.5rem;


border-radius: 0.25rem;
transition: background-color 0.1s ease-in-out;
cursor: ${({onClick}) => onClick ? "pointer" : "initial"};
border-radius:0.25rem;

&:hover {
    background-color: rgb(109, 0, 160);
}
`


const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    `
export default User;