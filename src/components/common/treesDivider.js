import { ReactComponent as TreesFront } from '../../assets/images/trees-front.svg';
import { ReactComponent as TreesMid } from '../../assets/images/trees-mid.svg';
import { ReactComponent as TreesBack } from '../../assets/images/trees-back.svg';
import { Parallax } from 'react-scroll-parallax';
import '../../styles/dividers.css';


const TreesDivider = () => {
    return (
        <div className="divider bottom">
            <Parallax translateY={[-50, 100]}><TreesBack /></Parallax>
            <Parallax translateY={[-100, 200]}><TreesMid /></Parallax>
            <Parallax translateY={[-20, 40]}><TreesFront /></Parallax>
        </div>
    )
};

export default TreesDivider;