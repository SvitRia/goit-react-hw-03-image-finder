import { Component } from 'react'
import { SearchForm } from 'components/Searchbar/Searchbar'
import { GallaryList } from './ImageGallery/ImageGallery'
import { ButtonLoading } from './Button/Button';



export class App extends Component {
  state = {
    filters: '',
  };

  
  onSearchFilter = () => {
    return (console.log("Hello"))
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SearchForm onSubmit={this.onSearchFilter} />
        <GallaryList items={this.filters} />
        <ButtonLoading/>
      </div>
    );
  };
}