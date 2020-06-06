import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>See you soon</h2>
            <p>
                N'hésitez pas à me contacter par e-mail. J'essaierai de revenir vers vous le plus vite possible :)
            </p>
             {/* <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>  */}
        </section>
        <section>
            <h2>Contactez-moi</h2>
            <dl className="alt">
                <dt>Adresse</dt>
                <dd>2 rue Winston Churchill &bull; 33140 Villenave d'Ornon</dd>
                <dt>Tel.</dt>
                <dd>07.70.35.88.07</dd>
                <dt>Email</dt>
                <dd><a href="julienfroidefond@gmail.com">julienfroidefond@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="//github.com/julienfroidefond" target="_blank" className="icon fab fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="//twitter.com/_jull_" target="_blank" className="icon fab fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="//www.instagram.com/julienfroidefond" target="_blank" className="icon fab fa-instagram alt"><span className="label">Instagram</span></a></li>
                {/* <li><a href="#" className="icon fab fa-dribbble alt"><span className="label">Dribbble</span></a></li> */}
            </ul>
        </section>
        <p className="copyright">&copy; Julien Froidefond. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with GatsbyJs.</p>
    </footer>
)

export default Footer
