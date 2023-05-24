import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <a href="tel:098765432">Tel: (098)765432</a>
        </footer>
    );
};

export default Footer;