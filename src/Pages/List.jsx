import "./List.css"
export default function List() {
    return (
        <div className="list">

            <h1>My List</h1>
            <div className="list__items">
                <div className="list__item">
                    <input type="checkbox"/>
                    <div className="list__item-name">
                        apple
                    </div>
                    <div className="list__item-qty">
                        3
                    </div>
                    <div className="list__item-delete">
                        🗑 
                    </div>
                </div>
                <div className="list__item">
                    <input type="checkbox"/>
                    <div className="list__item-name">
                        cabbage

                    </div>
                    <div className="list__item-qty">
                        1
                    </div>
                    <div className="list__item-delete">
                        🗑 
                    </div>
                </div>
            </div>
        </div>
    )
}