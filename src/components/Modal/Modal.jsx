import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { editContactThunk } from 'redux/operations';

import {
  CancelButton,
  HeaderModalWrapper,
  SaveButton,
  StyledModalForm,
  StyledWrapperModal,
  StyledWrapperOverlay,
} from './StyledModal';

const rootModal = document.querySelector('#modal');

const Modal = ({ close, name, number, id }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      number,
    },
  });

  const submit = ({ name, number }) => {
    dispatch(editContactThunk({ name, number, id }));
    close();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
        toast.info('Wow, your keyboard has Escape button!');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleClickOut = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <StyledWrapperOverlay onClick={handleClickOut}>
      <StyledWrapperModal>
        <HeaderModalWrapper>
          <h2>Edit your contact now!</h2>
          <p>(without sms and registration)</p>
        </HeaderModalWrapper>
        <StyledModalForm action="" onSubmit={handleSubmit(submit)}>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Enter new name"
          />
          <input
            {...register('number', { required: true })}
            type="tel"
            placeholder="Enter new phone number"
          />
          <div>
            <SaveButton>Save</SaveButton>
            <CancelButton onClick={close}>Cancel</CancelButton>
          </div>
        </StyledModalForm>
      </StyledWrapperModal>
    </StyledWrapperOverlay>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
