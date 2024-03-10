import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectDeletedId, selectIsLoading } from 'redux/selectors';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';

import {
  OneContactDeleteButton,
  StyledOneContactLi,
  StyledSpanModal,
} from './OneContact.styled';

export const OneContact = ({ id, name, number, deleteContact }) => {
  const loading = useSelector(selectIsLoading);
  const deletedId = useSelector(selectDeletedId);

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledOneContactLi>
        <div>
          <p>{name}:</p>
          <p>{number}</p>
          <StyledSpanModal onClick={openModal}>Edit✏️</StyledSpanModal>
        </div>
        {loading && deletedId === id ? (
          <OneContactDeleteButton>Deleting...</OneContactDeleteButton>
        ) : (
          <OneContactDeleteButton
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete contact
          </OneContactDeleteButton>
        )}
      </StyledOneContactLi>
      {isOpen ? (
        <Modal close={closeModal} name={name} number={number} id={id} />
      ) : null}
    </>
  );
};

OneContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
