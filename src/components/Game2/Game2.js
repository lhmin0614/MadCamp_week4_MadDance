import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

class Game2 extends Component {
    render() {
        return(
            <div>
                <header>
                    <Link to="/">
                    <div class="button_base b05_3d_roll">
                        <div>HOME</div>
                        <div>HOME</div>
                    </div>
                    </Link>
                </header>

                <h1 style={{color:'white'}}>GAME2 PAGE</h1> 
            </div>
        );
    }
}

export default Game2;