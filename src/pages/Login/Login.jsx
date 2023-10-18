import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { loginUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const login = event => {
    event.preventDefault();

    const userEmail = event.currentTarget.email.value.trim();
    const userPass = event.currentTarget.password.value.trim();

    const user = {
      email: userEmail,
      password: userPass,
    };

    dispatch(loginUser(user));

    event.currentTarget.email.value = '';
    event.currentTarget.password.value = '';
  };

  return (
    <>
      <Box p="2"  bgColor={'#00f'} border-bottom={'5px solid #000000'}>
        <Text fontSize="28"  color="#fff" paddingLeft="9px">
          PhoneBook
        </Text>
      </Box>
      <Box p={'16px'}>
        <form action="submit" onSubmit={login}>
          <FormControl w={'400px'}>
            <FormLabel fontSize={'20'} fontWeight={'500'} color={'#00f'}>
              Email:
              <Input
                id="1"
                fontSize={'20'}
                fontWeight={'500'}
                borderColor="#ff6b0a"
                name="email"
                type="email"
              />
            </FormLabel>
            <FormLabel fontSize={'20'} fontWeight={'500'} color={'#00f'}>
              Password:
              <Input
                id="2"
                fontSize={'20'}
                borderColor="#ff6b0a"
                fontWeight={'500'}
                name="password"
                type="password"
              />
            </FormLabel>
          </FormControl>

          <Box display={'flex'} gap={'4'}>
            <Button
              type="submit"
              bgColor="transparent"
              border="1px"
              borderColor="#ff6b0a"
              color="#ff6b0a"
              fontSize={'20'}
              marginTop="20px"
              _hover={{ bgColor: '#FF6B0A',  color:"#fff"}} 
              textDecoration={'underline'}
            >
              Sign in
            </Button>
            <Button
              bgColor="#fff"
              border="1px"
              borderColor="#ff6b0a"
              color="#ff6b0a"
              marginTop="20px"
              fontSize={'20'}
              _hover={{ bgColor: '#FF6B0A',  color:"#fff"}} 
            >
              <NavLink to="/register">Sign up</NavLink>
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Login;
