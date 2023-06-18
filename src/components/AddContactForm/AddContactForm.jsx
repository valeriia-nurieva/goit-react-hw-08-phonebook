import { useState } from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import ModalAdd from 'components/ModalAdd';
import { ContainerBg, ButtonAdd } from './AddContactForm.styled';

const AddContactForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
        <ContainerBg>
          <ButtonAdd onClick={openModal} type='button'>
            add contact
            <BiMessageSquareAdd color="currentColor" size="26px" />
          </ButtonAdd>
          <ModalAdd modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </ContainerBg>
  );
};

export default AddContactForm;
