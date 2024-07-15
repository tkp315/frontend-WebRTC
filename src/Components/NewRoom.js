import React, { useContext } from 'react'
import { SocketContext } from '../Contex/SocketContext';
import { Link } from 'react-router-dom';
 function NewRoom() {
    const {socket}= useContext(SocketContext);

    function initRoom(){
       socket.emit("create-room");
       console.log(socket)
    }

  return (
    <div className='flex min-h-[100vh] justify-center items-center'>
     
      <button onClick={initRoom} className=' btn btn-primary'>
        Start a new Meeting in new Room
      </button>
    
    </div>
  )
}
export default NewRoom;
