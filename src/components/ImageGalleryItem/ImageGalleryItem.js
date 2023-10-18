import { Lightbox } from 'components/Modal/Modal';
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
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { miniImg, originalImg, alt } = this.props;

    return (
      <>
        <GallaryItem >
          <GallaryImage
            src={miniImg}
            alt={alt}
            onClick={this.openModal}
            width="300"
          />

          <ModalStyle isOpen={isModalOpen}>
            <ModalStyleContent>
              <Lightbox largeImg={originalImg} />
            </ModalStyleContent>
            <BtnClose onClick={this.closeModal}><HiOutlineX /></BtnClose>
          </ModalStyle>
        </GallaryItem>
      </>
    );
  }
}


