import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text, useToast } from '@chakra-ui/react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import DetailLayout from '../../Layouts/DetailLayout';

const Login: React.FC = () => {
  const toast = useToast();

  // Handle Google login success
  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    console.log('Google login response:', credentialResponse);
    toast({
      title: 'Google login successful.',
      description: 'You have successfully logged in with Google.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  // Handle Google login error
  const handleGoogleLoginError = () => {
    console.error('Google login error occurred');
    toast({
      title: 'Google login failed.',
      description: 'There was an error logging in with Google.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
      <DetailLayout>
        <Box p={4} maxWidth="400px" mx="auto" bg="gray.50" borderRadius="md" boxShadow="md">
          <VStack spacing={4} align="stretch">
            <Heading mb={4} size="lg" textAlign="center">
              Login
            </Heading>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
              />
            </FormControl>
            <Button colorScheme="teal" onClick={() => { /* Handle normal login here */ }}>
              Login
            </Button>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError} // Optional if supported
            />
            <Text textAlign="center">
              Don't have an account? <a href="/signup">Sign Up</a>
            </Text>
          </VStack>
        </Box>
      </DetailLayout>
    </GoogleOAuthProvider>
  );
};

export default Login;
