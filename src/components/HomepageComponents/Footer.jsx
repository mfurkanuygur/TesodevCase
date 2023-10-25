import footerImg from "../../assets/images/footerImg.jpg";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={footerImg} alt="" />

                <div>
                    <span>İletişim</span>
                    <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
                    <span>Email: bilgi@tesodev.com</span>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171659.34109729953!2d28.807838808046956!3d41.011203452023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1698264370371!5m2!1str!2str"
                width="467.489"
                height="222.489"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </footer>
    );
};

export default Footer;
