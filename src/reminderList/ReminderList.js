import './ReminderList.css';
import '../index.css';
import RemindItem from '../remindItem/RemindItem';


function ReminderList({remindItems}){
    return(
        <div className="wrap remind-list">
            {remindItems.map(remindItem => <RemindItem {...remindItem} /> )}
        </div>

    )
}

export default ReminderList;