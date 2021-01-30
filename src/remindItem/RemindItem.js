import './RemindItem.css';

function RemindItem({title, text, date, time}) {
    return (
        <li className="note">   
            <div className="main__note__block">
                <div className="note__circle">
                    <div className="note__circle-unchecked"></div>
                </div>
                <div className="note__area">
                    <div className="note__title-block">
                        <div className="note__title">{title}</div>    
                        <div className="note__title-editor-unchecked">i</div>    
                        <ul className="note__menu">
                            <li className="note__menu-item">Выполнено</li>
                            <li className="note__menu-item">Изменить</li>
                            <li className="note__menu-item note__remove">Удалить</li>
                        </ul>
                    </div> 
                    <p className="note__preview">{text}</p> 
                </div>
            </div>
            <div className="time__settings">
                <h3 className="time__settings-date">Дата напоминания:</h3>
                <div className="remind__choose__date">{date}</div>
                <h3 className="time__settings-time">Время напоминания:</h3>
                <div className="remind__choose__time">{time}</div>  
            </div>
        </li>
    )
    
}

export default RemindItem;