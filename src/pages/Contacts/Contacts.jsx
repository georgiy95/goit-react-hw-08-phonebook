import {
  deleteContact,
  fetchContacts,
  logoutUser,
  setToken,
} from 'components/redux/operations';
import { getContacts, getFilter, getUser } from 'components/redux/selectos';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { openModal } from 'components/redux/filterSlice';

const Contacts = ({ children }) => {
  const { user } = useSelector(getUser);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizeFilter = filter.toLocaleLowerCase();
  const visibleContacts = getVisibleContacts(contacts);
  setToken(user.token);

  useEffect(() => {
    dispatch(fetchContacts(user.token));
  }, [dispatch, user.token]);

  function getVisibleContacts(contacts) {
    return contacts?.length > 0
      ? contacts.filter(contact => {
          return contact.name.toLocaleLowerCase().includes(normalizeFilter);
        })
      : [];
  }

  const handlDeleteContact = evt => {
    if (evt.target.name === 'delete') {
      dispatch(deleteContact(evt.currentTarget.id));
    }
    if (evt.target.name === 'change') {
      const user = contacts.find(el => el.id === evt.currentTarget.id);

      dispatch(openModal(user));
    }
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Box
        p="2"
        bgColor="#00f"
        border="1px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="28" color="#fff">
          {user.user.name}
        </Text>

        <Button
          onClick={logout}
          bgColor="transparent"
          border="2px"
          borderColor="#fff"
          color="#fff"
          _hover={{ bgColor: '#FF6B0A',  color:"#fff", borderColor:"#ff6b0a"}} 
          fontSize={'20'}
        >
          Loguot
        </Button>
      </Box>

      <Box  p="16px">
        <PhoneBook />

        <Box display="flex" flexDirection="column"  w="100%">
          <Filter />
          <List display="flex" flexDirection={'column'} w={'500px'} gap={'4'} >
            {visibleContacts.map(({ name, number, id }) => {
              return (
                <ListItem
                  key={id}
                  id={id}
                  onClick={handlDeleteContact}
                  fontSize={'22'}
                  fontWeight={'600'}
                  display={'flex'}
                  alignItems={'center'}
                  gap={'15px'}
                >
                  {name}: {number}
                  <Box display={'flex'} gap={'4'} >
                    <Button
                      name="delete"
                      bgColor="transparent"
                      border="1px"
                      borderRadius="10px"
                      borderColor="red"
                      color="#FF0000"
                      _hover={{ bgColor: 'red', color: '#fff', borderColor: 'red'}}
                      type="button"
                    >
                      Delete
                    </Button>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
