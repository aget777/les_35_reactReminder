

import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="wrap">
                <div className="title__block">
                    <h1 className="title">Напоминания</h1>
                    <div className="title__more"></div>
                </div>
                <div className="title__more-menu">
                    <div className="title-menu-exit"></div>
                    <ul className="title__more-list">
                        <li className="title__more-item">Название</li>
                        <li className="title__more-item">Выбрать напоминание</li>
                        <li className="title__more-item">Показать завершенные</li>
                        <li className="title__more-item">Удалить список</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header