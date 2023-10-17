// import * as basicLightbox from 'basiclightbox'

export const Lightbox = ({ largeImg }) => {
  return (<div>
      <img src={largeImg} alt="" width="800" height="600"/>
  </div>) 
    
}


// export const Lightbox = (largeImg) => {
//    const instance = basicLightbox.create(`
//     <img src=${largeImg} width="800" height="600">`) 
//     instance.show()
//}




// instance.show()
// instance.close()