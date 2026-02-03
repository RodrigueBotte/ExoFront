function Header() {
    return (
        <nav class="navbar navbar-expand-lg header-color">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="/">Mon site vitrine</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active text-light" aria-current="page" href="/">Accueil</a>
                        <a class="nav-link text-light" href="/services">Services</a>
                        <a class="nav-link text-light" href="/contact">Contact</a>
                        {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;