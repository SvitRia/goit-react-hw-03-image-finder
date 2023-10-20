import styled from "styled-components";
import Modal from 'react-modal';

export const GallaryItem = styled.div`
border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const GallaryImage = styled.img`
 width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  hover:  {transform: scale(1.03);
  cursor: zoom-in};
`
export const ModalStyle = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`
export const ModalStyleContent = styled.div`
position: relative;
max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`
export const BtnClose = styled.button`
position: absolute;
top: 40px;
right: 10px;
wigth: 24px;
height: 24px;
border-radius:50%;
`