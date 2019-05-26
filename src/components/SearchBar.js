import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''};

    handleInputChange = (e) => {
        this.setState({term: e.target.value})
    };

    handleFormSubmit = e => {
        e.preventDefault();

        //Callback from parent component
        this.props.handleTermSubmit(this.state.term)
    };
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className='field'>
                        <label>Youtube Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
    )
    }
}
export default SearchBar