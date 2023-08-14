import {Box, Center, Flex} from '@chakra-ui/react'
import Content from './components/Content';
import Sidebar from './components/Sidebar';   
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

  const queryClient=new QueryClient;
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Box bg='gray.800' w='100vw' h='100vh' p='30px' userSelect='none'>
        <Flex h='100%' gap='20px'>
          <Sidebar/>
          <Content/>
        </Flex>
      </Box>  
      </QueryClientProvider>
    </div>
  );
}

export default App;
