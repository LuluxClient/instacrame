import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";

const Inscription = () => {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const myInputRef = useRef(null);
  const [user, setUser] = useAtom(userAtom);
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const focusInput = () => {
    myInputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

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
        label="name"
        name="name"
        placeholder="name"
        onChange={handleChange}
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
        <Link to="/feed">
          <button type="submit">Inscription</button>
        </Link>
      </form>
    </div>
  );
};

export default Inscription;
