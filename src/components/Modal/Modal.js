import * as basicLightbox from 'basiclightbox'

export const Lightbox = (largeImg) => {
   const instance = basicLightbox.create(`
    <img src=${largeImg} width="800" height="600">`) 
    instance.show()
}






// instance.show()
// instance.close()