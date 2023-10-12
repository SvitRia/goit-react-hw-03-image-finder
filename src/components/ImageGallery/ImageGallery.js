import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const GallaryList = ({items}) => {
    return (
    <div> 
    {items.map(item => (
        <li key={item.id}>
            <GalleryItem miniImg={item.webformatURL}  /> 
        </li>
      ))}
     </div>
    )
}