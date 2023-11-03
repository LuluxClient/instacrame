import React from "react";
import Navbar from "../components/Navbar";
import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";

const Feed = () => {
    const [user] = useAtom(userAtom);
    return (
        
        <div>
            <Navbar />
            <h1>Bienvenue sur Instacrame {user.name}</h1>
        </div>
    );
};

export default Feed;