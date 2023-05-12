import { Component } from "react";
import './index.css';

class Welcome extends Component {
    state = {isSubscribed: false};
    SubscribeValue = () => {
        this.setState(() => {
            return {isSubscribed: true}
        })
    }
    UnSubscribe = () => {
        this.setState(() => {
            return {isSubscribed: false}
        })
    }
    render(){
        const {isSubscribed} = this.state;
        console.log("isSubscribed", isSubscribed);
        return(
            <div className="bg-container">
                <h1>Welcome</h1>
                <p>Thank you! Happy Learning</p>
                {isSubscribed ? <button onClick={this.UnSubscribe}>UnSubscribe</button> : <button onClick={this.SubscribeValue}>Subscribe</button>}
            </div>
        )
    }
}

export default Welcome;