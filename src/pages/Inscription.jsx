import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";
import { createUser } from '../services/api';
import axios from 'axios';

const Inscription = () => {
  const [username, setUsername] = useState("");
  const [description, setdescription] = useState("");
  const myInputRef = useRef(null);
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const focusInput = () => {
    myInputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);


  // import axios from 'axios';

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const newUser = await axios.post('/api/users', { username, description });
  //     console.log("Un nouvelle utilisateur a été créé:", newUser.data);
  //     navigate('/feed');
  //   } catch (error) {
  //     console.error("Chef y'a une erreur:", error);
  //     navigate('/feed'); //Il ne devrait pas être ici mais vu que l'api return 403 quand le truc est bon bah c'est une erreur
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(createUser, ({username, description }));
      console.log("Un nouvelle utilisateur a été créé:", newUser);
      navigate('/feed');
    } catch (error) {
      console.error("Chef y'a une erreur:", error);
      navigate('/feed'); //Il ne devrait pas être ici mais vu que l'api return 403 quand le truc est bon bah c'est une erreur
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pseudo:
          <input
            ref={myInputRef}
            type="text"
            label="name"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setdescription(event.target.value)}
          />
        </label>
        <br />
          <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default Inscription;