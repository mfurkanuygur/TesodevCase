import mainLogo from "../../assets/images/mainLogo.jpg"

const Logo = () => {
    return (
        <section className="logo-section">
            <div className="logo-field ">
                <img className="logo" src={mainLogo} alt="Tesodev Logo" />
                <h6>Search app</h6>
            </div>
        </section>
    )
}

export default Logo