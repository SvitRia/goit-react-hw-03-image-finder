import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
   
    
// key = 3913091-8039e4f23f6b3aae8a4a0d71c
// image_type = photo
// orientation = horizontal
// per_page=12

export const fetchImages = async (query, page) => {
    const params = new URLSearchParams({
        key:`38986631-ae11b42db00bd05f0f2571500`,
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: `${page}`,
        per_page: "12",
      });
    const response = await axios.get(`?${params}`);
    
    return response.data;
   
};
 