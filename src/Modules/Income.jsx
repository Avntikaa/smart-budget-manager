import React from 'react'
import { Stack,Input,Button,FormControl} from '@chakra-ui/react' 
import { useStateContext } from '../context/StateContext';
const Income = ({ showMe } )=> {
    const {income,setIncome,handleIncome}=useStateContext();
  return (
    <div id="Login" className={` ${showMe ? "block" : "hidden"}`}>
<Stack spacing={3}> 
      <FormControl isRequired>
          <Input variant='outline' height="80px" type='number' color="black" placeholder='Income' value={income}  onChange={(e) => setIncome(e.target.value)} margin="13px"/>
                                     </FormControl>

      
          <Button type="submit" bg="#1aa108" height="60px" marginTop="30px" margin="30px" onClick={handleIncome} >Save</Button> 

            </Stack>
            </div>
            )
}

export default Income