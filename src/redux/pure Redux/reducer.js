import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './constants';

const initialState = {
  contacts: [
    { name: 'Helen', number: '357-03-20', id: '1' },
    { name: 'Valeriy', number: '357-09-05', id: '2' },
    { name: 'Kyrylo', number: '357-10-11', id: '3' },
    { name: 'Richard', number: '357-04-14', id: '4' },
    { name: 'Bona', number: '357-12-22', id: '5' },
  ],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case FILTER_CONTACT: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
