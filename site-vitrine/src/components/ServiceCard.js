function ServiceCard({ title, description, img }) {
    return (
        <div className="card service-card shadow-sm h-100 border-0">
            <div className="service-card-img-wrapper">
                <img src={img} className="card-img-top" alt={title} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{title}</h5>
                <p className="card-text text-muted flex-grow-1">{description}</p>
                <div className="text-center mt-3">
                    <button className="btn btn-outline-primary btn-sm">
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
