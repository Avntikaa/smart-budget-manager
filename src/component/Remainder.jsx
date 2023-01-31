/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Stack,Input,Button,Select } from '@chakra-ui/react' 
import { useStateContext } from '../context/StateContext'
// eslint-disable-next-line no-unused-vars
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,Text,Flex,ModalFooter,ModalBody,AlertDialog,useDisclosure,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter} from '@chakra-ui/react'
import { AddIcon} from '@chakra-ui/icons'
import Form from './Form'
import Notes from './Notes'
import './Home.css'

const Remainder = () => {
   const{showButton,showform,showNotes,DisplayNoteForm}=useStateContext();
   console.log(showButton);
//hook to close the modal when user is done editing:
return(
<>

<Notes showMe={showNotes} showButton={showButton}/>
    <Text fontSize="30px" color="green">{showButton}</Text>

      <Form showMe={showform}/>
    </> 
)
  
}

export default Remainder