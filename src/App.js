import {Box, Center, Flex} from '@chakra-ui/react'
import Content from './components/Content';
import Sidebar from './components/Sidebar';   



function App() {

  return (
    <div className="App">

      <Box bg='gray.800' w='100vw' h='100vh' p='30px' userSelect='none'>
        <Flex h='100%' gap='20px'>    
          <Sidebar/>
          <Content/>
        </Flex>
      </Box>  

    </div>
  );
}

export default App;
