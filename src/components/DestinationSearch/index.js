import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )
    return (
      <div className="search-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          value={search}
          onChange={this.onChangeSearchInput}
        />

        <ul>
          {userResults.map(eachItem => (
            <DestinationSearch destinationsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
