import { HiSearch } from 'react-icons/hi';

export const SearchForm = ({ onSubmit }) => {
  return (
          <form>      
          <input type="text" name="name" placeholder=" " />
          
          <button type="submit" onClick={()=>onSubmit}><HiSearch/></button>
      </form>
   
  );
};

