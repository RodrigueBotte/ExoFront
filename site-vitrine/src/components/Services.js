import ServiceCard from './ServiceCard';

function Services() {
    return (
        <section id="services" className="services">
            <h2>Mes services</h2>
            <div className="services-grid">
                <ServiceCard
                    title="Développement Web"
                    description="Création de sites web modernes et performants avec React et Symfony."
                />
                <ServiceCard
                    title="Développement Mobile"
                    description="Conception d'applications mobiles natives et cross-platform avec React Native."
                />
                <ServiceCard
                    title="Applications sur mesure"
                    description="Développement d'applications personnalisées adaptées à vos besoins spécifiques."
                />
            </div>
        </section>
    )
}

export default Services;