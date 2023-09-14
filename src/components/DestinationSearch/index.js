import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const updatedDestinationsList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="background">
        <div>
          <h1 className="heading">Destination Search</h1>
          <div className="search-box">
            <span className="search-container">
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                placeholder="Search"
                className="search-input"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="search-icon"
              />
            </span>
          </div>
        </div>

        <ul className="destinations-container">
          {updatedDestinationsList.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
