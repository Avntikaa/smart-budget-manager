/* eslint-disable no-unused-vars */
import React from 'react'
import {Button} from '@chakra-ui/react' 
// import Status from './Status'
// import { useStateContext } from '../context/StateContext'
import Expense from '../Modules/Expense'
import Income from '../Modules/Income'
import './Home.css';
import { useState } from 'react'
import { useStateContext } from '../context/StateContext';
const Home = () => {
   const {handleClick,showLogin,showExpense,handleExp}=useStateContext();
  return (
       <>
   
            <Button onClick={handleExp}  
                      className="button-33"

            bg="#f2f6f2ec"
  borderRadius= "100px"
  boxShadow= "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px"
  color="black"
  cursor= "pointer"
  display= "inline-block"
  fontFamily= "CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif"
  padding="5px"
  textalign= "center"
  textDecoration= "none"
  transition= "all 250ms"
    fontSize=" 25px"
    width="200px"
    height="70px"
marginRight="40px"
marginTop="30px"
marginBottom="30px"

 >Expense</Button>
          <Button onClick={handleClick} 
          className="button-33"
           bg="#f2f6f2ec"
  borderRadius= "100px"
  boxShadow= "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px"
  color="black"
  cursor= "pointer"
  display= "inline-block"
  fontFamily= "CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif"
  padding="5px"
  textalign= "center"
  textDecoration= "none"
  transition= "all 250ms"
    fontSize=" 25px"
    width="200px"
    height="70px"
    marginTop="30px"
marginBottom="30px"
    >Income</Button>
           <Expense  showMe={showExpense}/>
      <Income showMe={showLogin}/>
       </> 
  )
}

export default Home