import { Component } from 'react'

    
export class ButtonLoading extends Component {
    state = {
        isLoading: false,
    };
    onLoading = () => { }

    render() {
        
        return (
            <div>
                <button type='button' onClick={this.onLoading}></button>
            </div>);
    };
}
    

  


