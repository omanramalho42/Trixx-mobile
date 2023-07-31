import React, { FC } from 'react'
import { Dimensions } from 'react-native';

import {
  ContainerModal,
  ModalBtn,
  ModalBtnText,
  ModalSubTitle,
  ModalTitle
} from './styles'

interface ModalProps {
  title: String;
  subtitle: String;
  subtitle2?: String;
  buttonOk?: String;
  buttonCancel: "NEGAR" | "CANCEL"; 
  setModalShow: (boolean) => void;
}

const Modal:FC<ModalProps> = ({ 
  title, 
  subtitle, 
  buttonCancel, 
  buttonOk, 
  subtitle2, 
  setModalShow 
}: ModalProps ) => {
  return (
    <ContainerModal>
      <ModalTitle>
        { title }
      </ModalTitle>
      <ModalBtn onPress={() => setModalShow(false)}>
        <ModalSubTitle>
          { subtitle }
        </ModalSubTitle>
      </ModalBtn>
      { subtitle2 && (
        <ModalBtn onPress={() => setModalShow(false)}>
          <ModalSubTitle>
            { subtitle2 }
          </ModalSubTitle>
        </ModalBtn>
      )}
      <ModalBtn onPress={() => setModalShow(false)}>
        <ModalBtnText>
          { buttonCancel }
        </ModalBtnText>
      </ModalBtn>
    </ContainerModal>
  )
}

export default Modal