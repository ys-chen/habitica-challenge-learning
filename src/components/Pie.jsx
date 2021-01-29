import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Pie({ title, value }) {
  return (
    <div className="text-center">
      <div className="text-purple-800 font-bold">{title}</div>
      <div className="p-2">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: `rgba(138, 43, 226, ${value / 100})`,
            textColor: '#8A2BE2',
          })}
          value={value.toFixed(2)}
          text={`${value.toFixed(2)}%`} />
      </div>
    </div>
    
  );
}

export default Pie;