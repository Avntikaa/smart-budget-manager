import React from 'react'
import { Input,Button,Select,Text } from '@chakra-ui/react' 
import { useStateContext } from '../context/StateContext'
import './Home.css';
import { ArrowBackIcon } from '@chakra-ui/icons';


const Notes = ({showMe}) => {
     // eslint-disable-next-line no-unused-vars
     const{handleRemainder,setRcategory,rcategory,openRemDelete,
        // eslint-disable-next-line no-unused-vars
        setOpenRemDelete,deleteeachnote,rtext,setRtext,MainPage}=useStateContext();
    // const {handleRemainder,rtext,setRtext,rcategory,setRcategory}=useStateContext();
  return (
    <div className={` ${showMe ? "block" : "hidden"}`} >
                <Button  marginRight="500px" marginTop="20px" width="50px" fontSize="25px" bg="#1aa108" onClick={MainPage}><ArrowBackIcon/></Button>
    <Text fontSize="30px" color="green">Create Notes</Text>

         <Input variant='outline' marginTop="50px" fontSize="25px" height="80px" color="black" placeholder='Title' value={rtext} onChange={(e) => setRtext(e.target.value)} />

          <Select placeholder='Category'value={rcategory} height="80px" color="black" onChange={(e)=>setRcategory(e.target.value)}
  cursor= "pointer"
  padding="5px"
  fontSize=" 25px"
marginTop="30px"
marginBottom="30px"
          >
              <option value='Food' color="black">Food</option>
              <option value='Travel' color="black">Travel</option>
              <option value='Education' >Education</option>
              <option value='Household'>Household</option>
            <option value='Clothing'>Clothing</option>
        <option value='HealthCare'>HealthCare</option>
<option value='Entertainment'>Entertainment</option>
<option value='Bills'>Bills</option>
<option value='BeautyProduct'>Beauty-Product</option>
<option value='Gifts'>Gifts</option>
          </Select>
          <Button bg='#1aa108' height="60px" marginTop="30px" width="200px" borderRadius="10px" onClick={handleRemainder}>Save</Button>
    </div>
  )
}

export default Notes
