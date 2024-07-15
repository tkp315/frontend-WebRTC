import socketioclient from 'socket.io-client'
import { createContext } from 'react';

const  WS_Server = "http://localhost:8000";

const SocketContext = createContext(null);

const socket = socketioclient(WS_Server);


export const SocketProvider=({children})=>{
    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider >
    )
}