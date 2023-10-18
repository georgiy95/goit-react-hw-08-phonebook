import { useDispatch, useSelector } from 'react-redux';
import { createContact, fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectos';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = async event => {
    event.preventDefault();

    const inputName = event.currentTarget.name.value.trim();
    const inputNumber = event.currentTarget.number.value.trim();

    if (
      contacts.find(el => el.name.toLowerCase() === inputName.toLowerCase())
    ) {
      alert(`${inputName} is already in contacts.`);
      return;
    }

    await dispatch(createContact({ name: inputName, number: inputNumber }));
    dispatch(fetchContacts());

    event.target.number.value = '';
    event.target.name.value = '';
  };

  return (
    <Box w="400px">
      <form action="submit" onSubmit={handleSubmit} >
        <FormControl>
          <FormLabel fontSize={'20'} color={'#00f'}>
            Name:
            <Input
              fontSize={'20'}
              fontWeight={'500'}
              borderColor="#ff6b0a"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>

          <FormLabel fontSize={'20'} color={'#00f'}>
            Number:
            <Input
              fontSize={'20'}
              borderColor="#ff6b0a"
              fontWeight={'500'}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>

          <Button
            type="submit"
            bgColor="transparent"
            border="1px"
            borderColor="#ff6b0a"
            color="#ff6b0a"
            borderRadius="10px"
            textTransform="capitalize"
            fontSize={'20'}
            _hover={{ bgColor: '#FF6B0A',  color:"#fff"}} 
            marginTop= "15px"
            marginBottom= "50px"
          >
            Add contact
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
