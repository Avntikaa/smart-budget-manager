import React from 'react'
import { useStateContext } from '../context/StateContext'
// eslint-disable-next-line no-unused-vars
import { Text,Flex ,HStack, VStack,Select,Stack,Button,AlertDialog,useDisclosure,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter} from '@chakra-ui/react';
// eslint-disable-next-line no-unused-vars
import { DeleteIcon } from '@chakra-ui/icons';
const Status = () => {
    // eslint-disable-next-line no-unused-vars
    const {filterCategory,choose,handleDelete,deleteeachitem,isOpens,setIsOpens,setDeleteitem}=useStateContext();


  return (
      <>
         <Select placeholder='Category'  onChange={(e)=>filterCategory(e.target.value)} width="200px" 
         bg="#1aa108"
  boxShadow= "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px"
  cursor= "pointer"
  fontFamily= "CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif"
  padding="5px"
  textalign= "center"
    height="50px"
marginTop="30px"
marginBottom="30px"
  borderRadius= "8px"
  fontSize="1.1em"
  border="0"
  color="white"
>
             <option value='Food' >Food</option>
              <option value='Travel'>Travel</option>
              <option value='Education'>Education</option>
            </Select>
            <Stack overflowY='scroll' maxHeight="500px" marginTop="40px"  borderTop="2px solid lightgray">
          {
            choose && choose.map((ele,ind)=>{
                return(
                  <>
                  <div key={ind}>

                  <VStack margin="20px 0px 0px 0px">
                    <HStack spacing="24px" w="500px">
                
                <Flex p={2} w="1000px" h="50px" justifyContent="space-around" border="none"  minWidth='max-content' alignItems='center'>
                                <Text color="black">{ele.text}</Text>

                <Text color="black" as="b">{ele.category}</Text>
                <Text color="black">{ele.input}</Text>
                    <Button colorScheme='red' onClick={()=>handleDelete(ind)}><DeleteIcon/></Button>
        <AlertDialog isOpen={isOpens}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={()=>setIsOpens(false)}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={()=>deleteeachitem()} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>  
        </Flex> 
            </HStack>  
            </VStack>
            </div>
            </>
                      )
            })
          } 

          </Stack>
          </>
  )
}

export default Status