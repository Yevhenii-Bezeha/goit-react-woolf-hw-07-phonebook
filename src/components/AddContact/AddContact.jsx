import {
  StyledAddContactInput,
  StyledAddContactForm,
  StyledAddContactLabel,
  StyledAddContactButton,
  StyledAddContactInputWrapper,
} from './AddContact.styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { addContact } from 'redux/contactsSlice';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const AddContact = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const contacts = useSelector(selectContacts);

  const submit = ({ name, number }) => {
    const existingContact = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    const existingNameWithoutSpace = contacts.some(
      contact =>
        contact.name.toLowerCase().replace(' ', '').trim() ===
        name.toLowerCase().replace(' ', '').trim()
    );
    if (existingContact || existingNameWithoutSpace) {
      return toast.warning(`${name} is already in contacts`);
    }
    if (!parseInt(number)) {
      return toast.warning('Please, enter numbers for the phone form');
    }
    dispatch(addContactThunk({ name, number }));
    reset();
  };

  return (
    <div>
      <StyledAddContactForm onSubmit={handleSubmit(submit)}>
        <StyledAddContactLabel htmlFor="addName">Name</StyledAddContactLabel>
        <StyledAddContactInputWrapper>
          <StyledAddContactInput
            type="text"
            {...register('name', { required: true })}
            id="addName"
            required
            placeholder="Enter the name"
          />
        </StyledAddContactInputWrapper>
        <StyledAddContactLabel htmlFor="addNumber">
          Number
        </StyledAddContactLabel>
        <StyledAddContactInputWrapper>
          <StyledAddContactInput
            type="tel"
            {...register('number', { required: true })}
            id="addNumber"
            placeholder="000-00-00"
            required
          />
        </StyledAddContactInputWrapper>
        <StyledAddContactButton>Add Contact</StyledAddContactButton>
      </StyledAddContactForm>
    </div>
  );
};
