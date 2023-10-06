import './App.css'
import UserList from './components/UserList';
import { getMessages, getUsers } from './services/api';
import { useEffect, useState } from 'react';
import { getProfile } from './services/api';
import ProfileCard from './components/ProfileCard';
import styled from "@emotion/styled";
import MessageList from './components/Chat';

const PROFILE_USER_ID = 999;

function App() {
  const [profile, setProfile] = useState();
  const [users, setUsers] = useState();
  const [messages, setMessages] = useState();
  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
      const nextProfile = getProfile(PROFILE_USER_ID);
      setProfile(nextProfile);
      console.log(users);
      setMessages(await getMessages());
    })()
  },[])

  return (
    <MainContainer>
      <ColonneUser>
        <CardContainer>
          {users && <UserList users={users} onClick={console.log()}/>}
        </CardContainer>
        <Lgtg>
          {profile && <ProfileCard user={profile} onClick={console.log()}/>}
        </Lgtg>
        
      </ColonneUser>
      <ColonneChat>
      
        {messages && <MessageList messages={messages}/>}
        <TextInput>
          <input type="text" placeholder="Envoyer un message"/>
        </TextInput>
      </ColonneChat>
    </MainContainer>
  )
};

const CardContainer = styled.div`
display: flex;
flex:1;
justify-content: space-between;
padding: 5px;
background-color: rgb(56, 56, 56);
color: azure;
overflow-y: scroll;
`
const ColonneUser = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;

`
const Lgtg = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  background-color: rgb(56, 56, 56);
  color: azure;

`
const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`
const ColonneChat = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 100vh;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 5px;
  transition: all .5s ease-in-out;
  background-color: rgb(252, 246, 255);
  padding-right: 40px;
  color:#333333;
`
const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Chat = styled.div`
  display: flex;
`

export default App
