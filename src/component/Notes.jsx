/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack,Input,Button} from '@chakra-ui/react' 
import { useStateContext } from '../context/StateContext'
// eslint-disable-next-line no-unused-vars
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,Text,Flex,ModalFooter,ModalBody,AlertDialog,useDisclosure,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter} from '@chakra-ui/react'
import { CheckIcon,DeleteIcon,AddIcon } from '@chakra-ui/icons'

const Notes = ({showMe,showButton}) => {
     // eslint-disable-next-line no-unused-vars
     const{handleRemainder,rinput,setRinput,todo,setRcategory,handleDone,rcategory,openRemDelete,
        setOpenRemDelete,deleteeachnote,rtext,setRtext,isOpen,showform,showNotes,indexes,DisplayNoteForm,setIsOpen,addamount,DeleteNotes}=useStateContext();
function onClose(){
    setIsOpen(false);
  }
  return (
    <>
         <div className={` ${showMe ? "block" : "hidden"}`}>
         <Stack spacing={3}>

                   
<Stack overflowY='scroll' maxHeight="500px" marginTop="30px">
          <div>
          {
            todo && todo.map((todo,ind)=>
               <><div key={ind}>
                 <Flex
      flexDirection="row"
      background="#fbf9f9"
      width="90%"
      height="60px"
      justifyContent="space-around"
      alignItems="center"
      position="relative"
      right="4px"
      borderRadius="6px"
      boxShadow="  rgba(252, 255, 253, 0.913) 0 -25px 18px -14px inset,
    rgba(242, 245, 243, 0.861) 0 1px 2px, rgba(234, 236, 235, 0.969) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgb(234, 241, 237) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px"
    margin="10px"
    color="black"
    > 
    <Text mt={4} color="black">{todo.rtext}
                </Text>
                <Text mt={4} color="black">{todo.rinput}
                </Text>
                <Text mt={4} color="black">{todo.rcategory}
                </Text>
              <Button colorScheme='red' onClick={()=>DeleteNotes(ind)}><DeleteIcon/></Button>
  <AlertDialog isOpen={openRemDelete}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={()=>setOpenRemDelete(false)}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={()=>deleteeachnote()} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>  
                <Button color='#1aa108' borderRadius="50%" onClick={()=>handleDone(ind)}><CheckIcon/></Button>

                </Flex>
              </div><Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Add Amount</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Input
                        value={rinput}
                        variant="outline"
                        type="text"
                        placeholder="Amount"
                        onChange={(e) => setRinput(e.target.value)}
                         />

                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="teal" mr={3} onClick={()=>setIsOpen(false)}>
                        Close
                      </Button>
                      <Button type="submit" colorScheme="teal" mr={3} onClick={() => addamount(indexes)}>
                        Update
                      </Button>
                    </ModalFooter>

                  </ModalContent>
                </Modal></>
            )}
          </div>
          </Stack>
          </Stack>

          </div>
          <div className={` ${showButton ? "block" : "hidden"}`}>
          <Button marginTop="40px"  width="50px" fontSize="25px" bg="#1aa108" onClick={DisplayNoteForm} className={` ${showButton ? "block" : "hidden"}`}><AddIcon/></Button>
          </div>
</>
  )
}

export default Notes