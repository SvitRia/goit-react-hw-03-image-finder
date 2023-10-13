import { Component } from 'react'
import { SearchForm } from 'components/Searchbar/Searchbar'
import { GallaryList } from './ImageGallery/ImageGallery'
import { ButtonLoading } from './Button/Button'

import { fetchImages } from 'api'



export class App extends Component {
  state = {
    galleryItems: [],
    loading: false,
    error: false,
    query: "",
    page: 1,
   
  };

  onSearchFilter = (evt ) => {
    evt.preventDefault()
    this.setState({ query: evt.currentTarget.value.trim() });
    this.setState.page = 1;
    this.setState.query = "";
   
  };

  onLoadMore = () => {
    this.state(prevState=> this.state.page +1)
  }

  async componentDidUpdate(prevProps, prevState) {
  console.log('prevState', prevState);
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      console.log("Hallo")
      // HTTP запрос с SetState
      try {
       
      this.setState({ loading: true, error: false });
        const images = await fetchImages(this.state.query, this.state.page);
        
      this.setState({ galleryItems: images });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
    };
  };


  render() {
    const {galleryItems, loading } = this.state
    return (
      <div>
        <SearchForm onSubmit={this.onSearchFilter} />
        {galleryItems.length > 0 && <GallaryList items={galleryItems} />}
         {loading && <div>Loader...</div>} 
        <ButtonLoading onClick={this.onLoadMore } />
      </div>
    );
  };
}