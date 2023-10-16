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
    totalPage: 1,
  };

  onSearchFilter = evt => {
    evt.preventDefault();
    this.setState({ query: evt.target.value });

    if (this.state.query === evt.target.value) {
      return;
    } else {
      this.setState({
        galleryItems: [],
        page: 1,
      });
    }
  
  };

  resetFilters = () => {
    this.setState({
      query: ''
    });
  };

  onLoadMore = () => {
    this.state(prevState=> this.state.page +1)
  }

  async componentDidUpdate(prevProps, prevState) {

    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      // HTTP запрос с SetState
      try {
       
      this.setState({ loading: true, error: false });
        const result = await fetchImages(this.state.query, this.state.page);
        const { totalHits, hits } = result;
        
        this.setState({
          galleryItems: hits,
          totalPage: Math.ceil(totalHits / 12)
       
        });
           console.log(totalHits)
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
    };
  };


  render() {
    const {query, galleryItems, loading, page, totalPage } = this.state
    return (
      <div>
        <SearchForm search={query} onChangeFilter={this.onSearchFilter}
        resetFilter={this.resetFilters}/>
        {galleryItems.length > 0 && <GallaryList items={galleryItems} />}
         {loading && <div>Loader...</div>} 
        {(page > 0 && page < totalPage) &&<ButtonLoading onClick={this.onLoadMore} />}
      </div>  );
  };
}