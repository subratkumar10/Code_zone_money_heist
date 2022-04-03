import React,{useState,useEffect}from 'react'
import './App.css';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Message.js'
import db from './firebase.js'
import FlipMove from 'react-flip-move'
import firebase from 'firebase'




function App() {
   const[input,setInput]=useState('');
   const[message,setMessage]=useState([{username:'rahul',message:"hii"},{username:'rahul',message:"hii"}])
   const[username,setUsername]=useState('')
   
   function edit_value(event)
   {
     setInput(event.target.value)
   }
   console.log(input);
   useEffect(()=>{setUsername(prompt("enter your name"))},[])
   useEffect(()=>{
     db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
       setMessage(snapshot.docs.map(doc=>({ id:doc.id,message:doc.data()})))
     }

     )

   },[])
 
  
   
  
   const sendMessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  
           setMessage([...message,{username:username,message:input}]);
           setInput('');
   }
   
  
   console.log(message);
   

   

  return (
    <div className="App">
     <div className="header">
     <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5" alt="sry img is not available"></img>
     <h1 ><i>Innovsion-2021 Money Heist</i></h1>
      <h2>Hello Heist  {username}</h2>
     </div>
     
      {/* <form>
      <input value={input} onChange={edit_value}/>
      <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>send messages</Button>
      </form> */}
      <form className="app_form">
      <FormControl>
  <InputLabel  htmlFor="my-input" style={{color:"white"}} placeholder="Enter message here" >Enter messages</InputLabel>
  <Input value={input} onChange={edit_value}style={{color:"white"}}/>
  <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>send messages</Button>
</FormControl>
</form>
     <FlipMove>
     {
        message.map(({message,id})=>(
          <Message key={id} username={username}  message={message}/>
          
      
        ))
      }
     </FlipMove>
    
    </div>
  );
}

export default App;
