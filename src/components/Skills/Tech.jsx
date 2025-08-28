import BallCanvas from './Ball';
import { technologies } from '../../constants/index.jsx';
import './Skills.css';

const Tech = () => {
  return (
    <div className="techContainer">
        {technologies.map((technology) => {
            return (
                <div  className="techItem" key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                    <div className="techName">{technology.name}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Tech;