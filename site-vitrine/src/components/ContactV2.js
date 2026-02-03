function ContactV2() {
    return (
        <section
            id="contact"
            className="color-section size-secondary py-5 d-flex flex-column justify-content-center align-items-center"
        >
            <div className="container">
                <h2 className="text-center mb-4">Contact</h2>

                <div className="row justify-content-center">
                    {/* Email */}
                    <div className="col-md-5 d-flex flex-column align-items-center text-center mb-4 mb-md-0">
                        <p className="mb-1">Contactez-moi par email :</p>
                        <p className="fw-bold">rodrigue.botte@gmail.com</p>
                        <a
                            href="mailto:rodrigue.botte@gmail.com"
                            className="btn btn-primary mt-2"
                        >
                            M&apos;écrire directement
                        </a>
                    </div>

                    {/* Séparateur vertical */}
                    <div className="col-md-1 d-none d-md-flex justify-content-center">
                        <div className="vr h-100" />
                    </div>

                    {/* Téléphone */}
                    <div className="col-md-5 d-flex flex-column align-items-center text-center">
                        <p className="mb-1">Contactez-moi par téléphone :</p>
                        <p className="fw-bold">06 95 34 45 78</p>
                        <p>Ou sur les réseaux sociaux :</p>
                        <div className="d-flex gap-3">
                            <a href="https://www.linkedin.com/in/rodrigue-botte-b828332a3/" target="blank"><img src={require("../images/link.png")} alt="linkedin" className="imgLogo"/></a>
                            <a href="https://github.com/RodrigueBotte" target="blank"><img src={require("../images/gh.png")} alt="gitHub" className="imgLogo"/></a>
                            <a href="https://www.linkedin.com/in/rodrigue-botte-b828332a3/" target="blank"><img src={require("../images/fb.png")} alt="facebook" className="imgLogo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactV2;
