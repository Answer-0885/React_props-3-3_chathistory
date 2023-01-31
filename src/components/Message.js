import { FaBeer  } from 'react-icons/fa';
import "../App.css"

const Message = ({ name, text, time }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          {" "}
          <FaBeer className="fa fa-circle online" /> {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};
export default Message;