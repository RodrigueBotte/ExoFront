function ServiceCard({ title, description, img }) {
    return (
        <div className="card">
            <img src={img} className="card-img-top card-size" alt={title} />
            <div className="card-body card-text-size">
                <h5 className="card-title text-center color-text ">{title}</h5>
                <p className="card-text color-text">{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard;