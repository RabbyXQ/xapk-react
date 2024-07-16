import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { ChakraBaseProvider } from '@chakra-ui/react';

const Index: React.FC = () => {
  return (
  <ChakraBaseProvider>
   <AdminLayout>
    <>
    </>
   </AdminLayout>
   </ChakraBaseProvider>
  );
};

export default Index;
