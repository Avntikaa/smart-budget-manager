import './App.css';
import React from 'react';
import Home from './component/Home';
import Status from './component/Status';
import { Flex ,Box,Tabs,TabList,Tab,Text,TabPanel,TabPanels} from '@chakra-ui/react';
import { StateContext } from './context/StateContext';
import Remainder from './component/Remainder';
import Budget from './component/Budget';
function App() {
  return (
    <StateContext>
    <div className="App" >
      {/* //here height is used for entire box to place it below */}
<Flex height="90vh" align="center" justify="center">
          <Box width="600px" height="800px" border='1px' marginTop="100px" className='Appc' borderColor='gray.200'  bg='#FFFFFF	' color="white"  box-shadow="4px 8px 8px hsl(0deg 0% 0% / 0.38)">
    <Text fontSize="30px" color="green">Budget Manager</Text>
<Tabs margin="60px 0px 0px 0px">
<TabList width="600px">
  <Tab w="100%" color="black" fontSize='20px' as="b">Home</Tab>
  <Tab w="100%" color="black" fontSize='20px' as="b">Status</Tab>
  <Tab w="100%" color="black" fontSize='20px' as="b">Remainder</Tab>
  <Tab w="100%" color="black" fontSize='20px' as="b">Budget</Tab>
</TabList>
<TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Status />
          </TabPanel>
           <TabPanel>
            <Remainder/>
          </TabPanel>
          <TabPanel>
            <Budget/>
          </TabPanel>
        </TabPanels>
</Tabs>
  </Box>
</Flex>
 
</div>
</StateContext>  
  );
}

export default App;
