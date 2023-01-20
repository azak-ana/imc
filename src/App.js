import React, { useEffect, useState } from 'react';
import Botao from './components/botao';
import Container from "./components/container";
import CampoTexto from "./components/input";
import Img from "./components/img";
import ('./app.css')


function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [conta, setConta] = useState();
  const [url, setUrl] = useState('');

   const fnPeso = (e)=>{
    setPeso(e.target.value)
   }

   const fnAltura = (e)=>{
    setAltura(e.target.value)
   }

   const aoClicar = () =>{
     setConta(peso*(altura**2))
    //  gerarUrl(conta);
    
   }

   useEffect(() => {
    console.log(conta);
    if(conta > 10){
      setUrl("https://559028l.ha.azioncdn.net/img/2021/05/produto/2887/br440vr.jpg?ims=800x800")}
      else if(conta <= 10){
        setUrl("https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg")
      }
   }, [conta]);
        
      //   return "https://559028l.ha.azioncdn.net/img/2021/05/produto/2887/br440vr.jpg?ims=800x800"
      // }else return "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg"
   

  return (
    <div className="App">
      <Container> 
        <h1 className='text-shadow-drop-center'>  Calcule seu IMC!</h1>
        <CampoTexto fn={fnPeso} id="peso" label="Digite seu peso"/>
        <CampoTexto fn={fnAltura} id="altura" label="Digite sua altura"/>
        <div className='button-container'>
          <Botao fn={aoClicar}/>
        </div>
        <h1 className='resultado'>{conta}</h1>
        <Img url={url}/> 
      </Container>
    </div>
  );
}

export default App;
