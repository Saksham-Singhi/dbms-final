// import React, {Component} from 'react';
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import Foo from './Foo.js'
import Bar from './Bar.js'

export default function Form (){
    const [flag,setFlag] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div className={styles.main}>
        <h1 className={styles.title}> EbaY <br /> <br />    </h1>
      <form >
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          // required
        />
        <br />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          // required
        />
        <br />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          // required
        />
        <br />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          // required
        />
        <br />
        <br />
        <button type="submit">
            Submit
        </button>

      </form>
      </div>
    );
  }

