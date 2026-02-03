function Stack() {
    return (
        <section
            id="stacks"
            className="stacks py-5 color-section size-secondary d-flex align-items-center"
        >
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="mb-3 color-text titleSize">Mes stacks utilisés</h2>
                    <p className="text-muted">
                        Les technologies avec lesquelles je construis vos projets.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="stack-item">
                            <img
                                src={require("../images/react.png")}
                                alt="React"
                                className="stack-img"
                            />
                            <span className="stack-name">React</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="stack-item">
                            <img
                                src={require("../images/expo.png")}
                                alt="Expo"
                                className="stack-img"
                            />
                            <span className="stack-name">Expo</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="stack-item">
                            <img
                                src={require("../images/php.png")}
                                alt="PHP"
                                className="stack-img"
                            />
                            <span className="stack-name">PHP</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="stack-item">
                            <img
                                src={require("../images/symfony.png")}
                                alt="Symfony"
                                className="stack-img"
                            />
                            <span className="stack-name">Symfony</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="stack-item">
                            <img
                                src={require("../images/mysql.png")}
                                alt="MySQL"
                                className="stack-img"
                            />
                            <span className="stack-name">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stack;
