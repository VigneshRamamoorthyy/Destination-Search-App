import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="title">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="Search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>

          <ul className="destination-details-container">
            {searchResults.map(eachDestination => (
              <DestinationItem
                destinationsDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
