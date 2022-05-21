export const Footer = () =>{
    return(
        <div>
            <main className="main-login main-home"></main>
             <footer className="main-foot">
            <div className="brand-name"><h3>SIERRA</h3></div>
            <div className="auth-info">
                <h4>Made by GAUTAM with love</h4>
            </div>
            <div className="auth-link">
                <a target="_blank" href="https://github.com/Gautam2305" className="social-link github-link"><i className="fa-brands fa-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/gautam-adatra-b8465b227/" className="social-link linked-in-link"><i className="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href="https://twitter.com/Gautam_Adatra" className="social-link twitter-link"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </footer>
        </div>
    );
}