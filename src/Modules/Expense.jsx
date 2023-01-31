import React from 'react'
import { Stack,Input,Button,Select,FormControl} from '@chakra-ui/react' 
// import Status from './Status'
import { useStateContext } from '../context/StateContext'

const Expense = ({ handleExp ,showMe}) => {
    // eslint-disable-next-line no-unused-vars
    const{handleSubmit,input,setInput,setCategory,category,text,setText}=useStateContext();

  return (
 <>
     <div id="Login" className={` ${showMe ? "block" : "hidden"}`}>

 <Stack spacing={3}>
<Input variant='outline' color="black"   fontSize=" 25px"
height="80px" type='text' placeholder='Title' value={text}  onChange={(e) => setText(e.target.value)} marginTop="20px"/>
<Input variant='outline' color="black" fontSize=" 25px" height="80px" type='number' placeholder='Amount' value={input}  onChange={(e) => setInput(e.target.value)} margin="13px"/>

       <FormControl isRequired>
          <Select placeholder='Category' height="80px"  cursor= "pointer"
  padding="5px"
  fontSize=" 25px"
marginBottom="30px"
color="black" value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value='Food'>Food</option>
              <option value='Travel'>Travel</option>
              <option value='Education'>Education</option>
              <option value='Clothing'>Clothing</option>
        <option value='HealthCare'>HealthCare</option>
<option value='Entertainment'>Entertainment</option>
<option value='Bills'>Bills</option>
<option value='BeautyProduct'>Beauty-Product</option>
<option value='Gifts'>Gifts</option>
          </Select>
          </FormControl>
          <Button type="submit" bg='#1aa108' height="60px" marginTop="30px"  onClick={handleSubmit}>Save</Button> 
                                     
                      </Stack>

          </div>
            </>
                  )
}

export default Expense