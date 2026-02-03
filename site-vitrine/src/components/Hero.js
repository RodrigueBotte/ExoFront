function Hero() {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100 color-title">
            <h1 className=" text-light titleSize">RB Dev Solutions</h1>
            <h1 className=" text-light fs-1">Concepteur Développeur d'Application</h1>
            <p className="text-light mb-4 fs-5">
                Je crée des sites vitrines, des sites e-commerce et des applications modernes en React, React Native et Symfony pour
                donner vie à vos projets.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">Contactez-moi</a>
        </section>
    )
}

export default Hero;