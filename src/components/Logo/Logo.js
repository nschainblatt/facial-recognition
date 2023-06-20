import Tilt from 'react-parallax-tilt';
import './Logo.css'
import ai from './ai.png';


const Logo = () => {
	return (
    <Tilt tiltMaxAngleX={55} tiltMaxAngleY={55} className="Tilt ma4 mt0 br2 shadow-2" style={{ height: '150px', width: '150px'}}>
      <div className="pa3 pointer">
        <img src={ai} alt='logo'/>
      </div>
    </Tilt>
  );
}

export default Logo;