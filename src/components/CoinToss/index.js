import {Component} from 'react'
import './index.css'

const HEADS_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, imgUrl: HEADS_IMG}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG
      latestTailsCount += 1
    }

    this.setState({
      imgUrl: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {imgUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">H{this.isHead()}eads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="toss-img" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
