import mainLogo from "../../assets/images/mainLogo.jpg"

const Logo = () => {
    return (
        <section className="logo-section">
            <img className="logo" src={mainLogo} alt="Tesodev Logo" />
            <h6>Search app</h6>
        </section>
    )
}

export default Logo