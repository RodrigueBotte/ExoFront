function Hero() {
    return (
        <section className="hero-section d-flex align-items-center color-title">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <h1 className="text-light titleSize mb-3">RB Dev Solutions</h1>
                        <h2 className="text-light fs-3 mb-4">
                            Concepteur Développeur d&apos;Application
                        </h2>
                        <p className="text-light mb-4 fs-5">
                            Je crée des sites vitrines, des sites e-commerce et des applications
                            modernes en React, React Native et Symfony pour donner vie à vos projets.
                        </p>
                        <a href="#contact" className="btn btn-primary btn-lg px-4">
                            Contactez-moi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
