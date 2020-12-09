import React, { Component } from 'react';
import Comma from '../comma';
import Img11 from '../../assets/international1.jpg';
import Parpar from './parpar';
import Owl from './owl';
import './partner.css';
import Img2 from '../../assets/Logo.png';
import Img3 from '../../assets/MIRAGE.png';
import Img7 from '../../assets/EGSClientsLogo/TweakalizeLogo.jpg';
import Img1 from '../../assets/EGSClientsLogo/BIT-LOGO-JPEG.jpg';
import Img9 from '../../assets/EGSClientsLogo/Capture.PNG';
import Img8 from '../../assets/EGSClientsLogo/Gaadishine.jpg';
import Img10 from '../../assets/EGSClientsLogo/RotiAndolan.jpg';
import Img6 from '../../assets/EGSClientsLogo/Subtle.png';
import Img5 from '../../assets/EGSClientsLogo/Xploriser.png';
import Img4 from '../../assets/EGSClientsLogo/AddedIndia.jpg';
import Img12 from '../../assets/EGSClientsLogo/BOI.jpg';
import Img13 from '../../assets/owlpr.jpeg';


export default class Client extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
    constructor() {
        super();
    
        this.state = {
          data: [],
          isLoaded: true,
          responsive: {
            0: {
              items: 1,
            },
            450: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
        };
      }
      
    render() {
        return (
            <div>
                <Comma url={Img11} content="Clients" />
                <div className="m">
                <Parpar 
                
                Img1 = {Img1}
                Img2 = {Img2}
                Img3 = {Img3}
                Img4 = {Img4}
                Img5 = {Img5}
                Img6 = {Img6}
                Img7 = {Img7}
                Img8 = {Img8}
                Img9 = {Img9}
                Img10 = {Img10}
                Img12 = {Img12}
                Img13 = {Img13}
                
                />
                </div>
                <div className="pc">
                <Owl 
                 Img1 = {Img1}
                 Img2 = {Img2}
                 Img3 = {Img3}
                 Img4 = {Img4}
                 Img5 = {Img5}
                 Img6 = {Img6}
                 Img7 = {Img7}
                 Img8 = {Img8}
                 Img9 = {Img9}
                 Img10 = {Img10}
                 Img12 = {Img12}
                 Img13 = {Img13}
                isLoaded={this.state.isLoaded}
                data={this.state.data}
                res={this.state.responsive}
                />
                </div>
                
            </div>
        )
    }
}