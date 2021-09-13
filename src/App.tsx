import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export const App = () => {

  const [cont, setCont] = useState<number>(0);
  const [userInfos, setUserInfos] = useState<any>([]);
  const url = "https://randomuser.me/api";
  console.log('USER renders');

  //https://randomuser.me/api

  useEffect(() => {
    fetchData(url).then(res => {
      setUserInfos(res.results);
    });
  }, []);

  const fetchData = (url: string) => {
    return axios.get(url)
      .then(({ data }) => {
        return data;
      })
      .catch(err => {
        console.error(err);
      })
  }

  if (userInfos) {
    return (
      <div className="App">
        <h1>Hello codesandbox</h1>
        <h2>Pruebas de Typescript</h2>
        <h2>{cont}</h2>
        {userInfos.map((userInfo: any, userIdx: any) => {
          const { first, last } = userInfo.name;
          
          return (
            <p>{first} {last}</p> 
          )
        })}
        <button onClick={() => setCont(cont + 1)}>Incrementar contador</button>
      </div>
    )
  }else{
    return(<div></div>);
  };
}
  ;
