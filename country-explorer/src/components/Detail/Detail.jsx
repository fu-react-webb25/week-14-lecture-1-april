import './detail.css';

const Detail = ({ icon, title, text, color }) => {
    return (
        <li className="detail">
            <i className={ `detail__icon detail__icon--${color} ${icon}` }></i>
            <div className="detail__container">
                <h4 className="detail__title">{ title }</h4>
                <p className="detail__info">{ text }</p>
            </div>
        </li>
    )
}

export default Detail