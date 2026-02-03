import ServiceCard from "./ServiceCard";

function Realisation() {
    return (
        <section id="realisations" className="realisations py-5 color-section size-secondary d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex justify-content-center w-100 mb-4 color-text">
                    <h2>Mes réalisations</h2>
                </div>
                <div className="d-flex justify-content-center row g-5 ">
                    <div className="col-md-4">
                        <ServiceCard
                            title="Développement Web"
                            description="Création de sites web modernes et performants avec React et Symfony avec des solutions de vente en ligne."
                            img={require("../images/venteLigne.jpg")}
                        />
                    </div>
                    <div className="col-md-4">
                        <ServiceCard
                            title="Développement de Site Vitrine"
                            description="Mise en place de sites vitrines attractifs pour présenter votre activité en ligne."
                            img={require("../images/siteVitrine.jpg")}
                        />
                    </div>
                    <div className="col-md-4">
                        <ServiceCard
                            title="Développement d'Application Mobile"
                            description="Conception d'applications mobiles natives et cross-platform avec React Native."
                            img={require("../images/application.jpg")}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Realisation;