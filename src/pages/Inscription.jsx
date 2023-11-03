import React, { useState } from "react";

const Inscription = () => {
    const [username, setUsername] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("Username:", username);
        console.log("Profile Picture:", profilePicture);
    };

    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Pseudo:
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Avatar (pas le film): 
                    <input
                        type="text"
                        value={profilePicture}
                        onChange={(event) => setProfilePicture(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Inscription;