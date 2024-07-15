import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../Contex/SocketContext";
import UserFeedPlayer from "../Components/UserFeedPlayer";

export default function Room() {
  const { roomId } = useParams();
  const { socket, user ,stream} = useContext(SocketContext);

  const fetchParticipantsList = (roomId) => {
    console.log("fetch-participants", roomId);
  };

  useEffect(() => {
    if (user && user._id) {
      // Emitting this event so that creator or joinee is connected
      socket.emit("join-room", { roomId: roomId, userId: user._id });
      socket.on("get-users", fetchParticipantsList);
    }
  }, [socket, user, roomId]);

  return (
    <div >
        Room:{roomId}
        <div className="flex justify-center items-center min-h-[100vh]">
            <UserFeedPlayer stream={stream}></UserFeedPlayer>
        </div>
    </div>
  )
}
