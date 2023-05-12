import { Component } from 'react';

class FruitCounter extends Component {
    state = {bananasCount: 0, mangoesCount: 0};
    IncrementBananaCount = () => {
        this.setState(previousState => {
            return {bananasCount: previousState.bananasCount + 1}
        })
    }
    IncrementMangoCount = () => {
        this.setState(previousState => {
            return {mangoesCount: previousState.mangoesCount + 1}
        })
    }
    render(){
        const {bananasCount, mangoesCount} = this.state;
        return(
            <div className='bg-container'>
                <div className='content-container'>
                    <h1>Adi ate {mangoesCount} mangoes {bananasCount} bananas</h1>
                    <div className='fruits'>
                        <div>
                            <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png'
                            alt='Mangoes'
                            className='image'/>
                            <button className='button' onClick={this.IncrementMangoCount}>Eat Mango</button>
                        </div>
                        <div>
                            <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png'
                            alt='Banana'
                            className='image'/>
                            <button className='button' onClick={this.IncrementBananaCount}>Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FruitCounter;
