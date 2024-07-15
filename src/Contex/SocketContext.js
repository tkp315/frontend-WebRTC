import socketioclient from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  { Peer } from 'peerjs'

const WS_Server = "http://localhost:8000";

export const SocketContext = createContext(null);

const socket = socketioclient(WS_Server);

export const SocketProvider = ({ children }) => {
  const navigate = useNavigate();
// state variable to store userId

const [user,setUser]=useState(null);
const[stream,setStream]=useState(null);

const fetchUserFeed= async()=>{
    const stream=await navigator.mediaDevices.getUserMedia({video:true,audio:true});
    setStream(stream);
}

  useEffect(() => {

    const userId =crypto.randomUUID();
    const newPeer= new Peer(userId);

    setUser(newPeer);

    fetchUserFeed();

    const enterRoom = (roomId) => {
      navigate(`/room/${roomId}`);
    };
    socket.on("room-created", enterRoom);

  }, []);

  return (
    <SocketContext.Provider value={{ socket, user,stream }}>
      {children}
    </SocketContext.Provider>
  );
};
