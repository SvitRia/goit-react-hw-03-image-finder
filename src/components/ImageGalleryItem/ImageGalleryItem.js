import { Lightbox } from "components/Modal/Modal";
import { Component } from 'react';
import Modal from 'react-modal';



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
    const {
      miniImg, originalImg
    } = this.props;

      return (
        <>
        <div class="gallery-item" >
         <img src={miniImg} alt="" onClick={this.openModal}/>

        <Modal
         isOpen={isModalOpen}
       
        >
          <Lightbox largeImg={originalImg}/>
          <button onClick={this.closeModal}>close</button>
        </Modal>
              </div>
              </>
    );
  }
}

// 