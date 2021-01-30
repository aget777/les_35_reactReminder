import './App.css';
import Header from '../header/Header';
import ReminderList from '../reminderList/ReminderList';

const remindItems = [
  {title: 'Заголовок напоминания 1', text: 'Тестовый текст', date: '30.01.2021', time: '15:40'},
  {title: 'Заголовок напоминания 2', text: 'ggfkgfkjgkhjvkvvvh', date: '15.04.2021', time: '18:00'},
]


function App() {
  return (
    <>
    <Header />
    <ReminderList remindItems = {remindItems}/>
    </>
  );
}

export default App;
