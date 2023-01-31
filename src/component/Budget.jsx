import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useStateContext } from '../context/StateContext';
const Budget = () => {
    const {income,expense,overall,extra}=useStateContext();

  return (
   
   <TableContainer>
  <Table variant='simple' color="black" border='2px' borderColor='gray.100'  margin="50px" width="80%" size="lg">
    <Thead>
      <Tr size="20px">
        <Th fontSize="25px">Type</Th>
        <Th fontSize="25px">Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td fontSize="20px">Income</Td>
        <Td fontSize="20px">Rs {income}</Td>
      </Tr>
      <Tr>
        <Td fontSize="20px">Expense</Td>
        <Td fontSize="20px">Rs {expense}</Td>
      </Tr>
      <Tr>
        <Td fontSize="20px">Balance</Td>
        <Td color="red" fontSize="23px" fontWeight="20px">Rs {overall}</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Td fontSize="20px">Extra</Td>
        <Td fontSize="20px">Rs {extra}</Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default Budget