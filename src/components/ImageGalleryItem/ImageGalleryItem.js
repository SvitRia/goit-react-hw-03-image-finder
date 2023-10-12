import { Lightbox } from "components/Modal/Modal";

export const GalleryItem = ({ miniImg, origimalImg }) => {
    return (
        <div class="gallery-item" >
         <img src={miniImg} alt="" onClick={<Lightbox largeImg={origimalImg}/>}/>
</div>
    )
}