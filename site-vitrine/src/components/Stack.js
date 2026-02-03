function Stack() {
    return (
        <section id="stacks" className="stacks py-5 color-section size-secondary d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex justify-content-center w-100 mb-4 color-text">
                    <h2>Mes stacks utilisés</h2>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <img src={require("../images/react.png")} alt="react" className="imgSize" />
                        </div>
                        <div className="col">
                            <img src={require("../images/expo.png")} alt="expo" className="imgSize" />
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <img src={require("../images/php.png")} alt="php" className="imgSize" />
                        </div>
                        <div className="col">
                            <img src={require("../images/symfony.png")} alt="symfony" className="imgSize" />
                        </div>
                        <div className="col">
                            <img src={require("../images/mysql.png")} alt="mysql" className="imgSize" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack;