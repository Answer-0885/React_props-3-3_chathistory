import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";
import "../App.css"

const HistoryPage = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, from, type, text, time }) => {
        const { name } = from;
        switch (type) {
          case "message":
            return (
              <Message id={id} name={name} text={text} time={time} key={id} />
            );
          case "response":
            return (
              <Response id={id} name={name} text={text} time={time} key={id} />
            );
          case "typing":
            return (
              <Typing id={id} name={name} text={text} time={time} key={id} />
            );
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default HistoryPage;