import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <section
            id="services"
            className="services py-5 color-section size-secondary d-flex align-items-center"
        >
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="mb-3 color-text titleSize">Mes services</h2>
                    <p className="text-muted">
                        Des solutions modernes pour le web et le mobile, adaptées à vos besoins.
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4 d-flex">
                        <ServiceCard
                            title="Développement Web"
                            description="Création de sites web modernes et performants avec React et Symfony, avec des solutions de vente en ligne."
                            img={require("../images/venteLigne.jpg")}
                        />
                    </div>
                    <div className="col-md-4 d-flex">
                        <ServiceCard
                            title="Développement de Site Vitrine"
                            description="Mise en place de sites vitrines attractifs pour présenter votre activité en ligne."
                            img={require("../images/siteVitrine.jpg")}
                        />
                    </div>
                    <div className="col-md-4 d-flex">
                        <ServiceCard
                            title="Applications Mobiles"
                            description="Conception d'applications mobiles natives et cross-platform avec React Native et Expo."
                            img={require("../images/application.jpg")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
