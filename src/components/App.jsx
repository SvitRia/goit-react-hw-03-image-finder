import { Component } from 'react'
import { SearchForm } from 'components/Searchbar/Searchbar'
import { GallaryList } from './ImageGallery/ImageGallery'
import { ButtonLoading } from './Button/Button'
import { Loader } from './Loader/Loader'
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

  onSearchFilter = ({value}) => {
    this.setState({ query: value });

    if (this.state.query === value) {
      return;
    } 
    this.setState({
      
        galleryItems: [],
        page: 1,
        error: false
      });
    }

  resetFilters = () => {
    this.setState({
      query: ''
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({page: this.state.page + 1 }));
  }

  async componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ loading: true,  });
      // HTTP запрос с SetState
      try {
      
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
        <SearchForm value={query} onChangeFilter={this.onSearchFilter}
        resetFilter={this.resetFilters}/>
        {galleryItems.length > 0 && <GallaryList items={galleryItems} />}
        {loading && <Loader/>} 
      
        {(page > 0 && page < totalPage) &&<ButtonLoading onClick={this.onLoadMore} />}
      </div>  );
};
};
