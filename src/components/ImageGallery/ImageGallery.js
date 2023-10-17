import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ListImg } from "./ImageGallery.styled";


export const GallaryList = ({items}) => {
    return (
    <ListImg> 
    {items.map(item => (
        <li key={item.id}>
            <GalleryItem miniImg={item.webformatURL} originalImg={item.largeImageURL} alt={item.tags}  /> 
        </li>
      ))}
     </ListImg>
    )
}