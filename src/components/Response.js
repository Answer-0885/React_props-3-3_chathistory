import { FaBeer  } from 'react-icons/fa';
import "../App.css"

const Response = ({ name, text, time }) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time} </span>
        <span className="message-data-name"> {name}</span>{" "}
        <i>
          <FaBeer className="fa fa-circle me" />
        </i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
};

export default Response;