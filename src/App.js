import "./App.css";
import HistoryPage from "./components/HistoryPage";
import Typing from "./components/Typing";
import { FaBeer  } from 'react-icons/fa';

function App() {
  const messages = [
    {
      id: "chat-5-1090",
      from: { name: "Ольга" },
      type: "response",
      time: "10:10",
      text: "Привет, Виктор. Как дела? Как идет работа над проектом?",
    },
    {
      id: "chat-5-1091",
      from: { name: "Виктор" },
      type: "message",
      time: "10:12",
      text: "Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.",
    },
    {
      id: "chat-5-1092",
      from: { name: "Ольга" },
      type: "response",
      time: "10:14",
      text: "Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?",
    },
    {
      id: "chat-5-1093",
      from: { name: "Виктор" },
      type: "message",
      time: "10:20",
      text: "Нет, все прошло гладко. Очень хочу показать всё команде.",
    },
    {
      id: "chat-5-1094",
      from: { name: "Виктор" },
      type: "typing",
      time: "10:31",
    },
  ];
  Typing.defaultProps = {
    text: [
      <FaBeer className="fa fa-circle online" key={1} />,
      <FaBeer className="fa fa-circle online" key={2} />,
      <FaBeer className="fa fa-circle online" key={3} />,
    ],
  };
  return (
    messages.length > 0 && (
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <HistoryPage list={messages} />
          </div>
        </div>
      </div>
    )
  );
}

export default App;