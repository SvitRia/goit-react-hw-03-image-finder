
import { HiSearch } from 'react-icons/hi';

export const SearchForm = ({ search, onChangeFilter, resetFilter }) => {
  return (
          <div>      
          <input type="text"
              value={search}
              placeholder=" "
              onChange={onChangeFilter}
         />
       
          <button type="submit"  ><HiSearch/></button>
      </div>
   );
};

// export class SearchForm extends Component {
// //   constructor(props) {
// //     super(props);
//     state = {query: ''};

//     handleSubmit(evt) {
//     evt.preventDefault()  
//      this.setState({query: evt.target.value.trim()});
//   }

//     // handleChange(evt) {
//     //     this.setState({query: evt.target.value});
   
//     // }
    
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//             <input type="text" name="query"/>
//             <button type="submit" ><HiSearch/></button>
//       </form>
//     );
//   }
// }
