import { Modalbox } from 'components/Modal/Modal';
import { Component } from 'react';
import Modal from 'react-modal';
import { HiOutlineX } from 'react-icons/hi';
import {
  GallaryItem,
  GallaryImage,
  ModalStyle,
  ModalStyleContent,
  BtnClose
} from './ImageGalleryItem.styled';

Modal.setAppElement('#root');
export class GalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
     const { isOpenModal } = this.state;
    const { miniImg, originalImg, tags} = this.props;

    return (
      <>
        <GallaryItem >
          <GallaryImage
            src={miniImg}
            alt={tags}
            onClick={this.openModal}
            width="300"
          />

          <ModalStyle  isOpen={isOpenModal} onRequestClose={this.closeModal} >
            <ModalStyleContent >
              <Modalbox largeImg={originalImg} alt={tags} />
              <BtnClose onClick={this.closeModal} ><HiOutlineX /></BtnClose>
            </ModalStyleContent>
             
          </ModalStyle>
        </GallaryItem>
      </>
    );
  }
}


