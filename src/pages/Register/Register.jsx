import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { createUser } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();

    const userName = event.currentTarget.name.value.trim();
    const userEmail = event.currentTarget.email.value.trim();
    const userPass = event.currentTarget.password.value.trim();

    dispatch(
      createUser({
        name: userName,
        email: userEmail,
        password: userPass,
      })
    );

    event.currentTarget.name.value = '';
    event.currentTarget.email.value = '';
    event.currentTarget.password.value = '';
  };

  return (
    <>
      <Box p="2" bgColor={'#00f'}>
      <Text fontSize="28"  color="#fff" paddingLeft="9px">
          PhoneBook
        </Text>
      </Box>

      <Box p={'16px'}>
        <form action="submit" onSubmit={handleRegister}>
          <FormControl w={'400px'}>
            <FormLabel fontSize={'20'} fontWeight={'500'} color={'#00f'}>
              Name:
              <Input
                id="1"
                fontSize={'20'}
                fontWeight={'500'}
                name="name"
                borderColor="#ff6b0a"
                type="text"
              />
            </FormLabel>
            <FormLabel fontSize={'20'} fontWeight={'500'} color={'#00f'}>
              Email:{' '}
              <Input
                id="2"
                fontSize={'20'}
                fontWeight={'500'}
                name="email"
                borderColor="#ff6b0a"
                type="email"
              />
            </FormLabel>
            <FormLabel fontSize={'20'} fontWeight={'500'} color={'#00f'}>
              Password:
              <Input
                id="3"
                fontSize={'20'}
                fontWeight={'500'}
                name="password"
                borderColor="#ff6b0a"
                type="password"
              />
            </FormLabel>
            <Box display={'flex'} gap={'4'}>
              <Button
                bgColor="transparent"
                border="1px"
                fontWeight="700"
                borderColor="#ff6b0a"
                borderRadius="10px"
                color="#ff6b0a"
                fontSize={'20'}
                marginTop="20px"
                _hover={{ bgColor: '#FF6B0A',  color:"#fff"}} 
              >
                <NavLink to="/login">Sign in</NavLink>
              </Button>
              <Button
                type="submit"
                bgColor="transparent"
                border="1px"
                fontWeight="700"
                borderColor="#ff6b0a"
                borderRadius="10px"
                color="#ff6b0a"
                fontSize={'20'}
                marginTop="20px"
                _hover={{ bgColor: '#FF6B0A',  color:"#fff"}} 
                textDecoration={'underline'}
              >
                Sign up
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Register;
