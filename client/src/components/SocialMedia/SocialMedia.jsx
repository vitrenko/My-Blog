import style from "./SocialMedia.module.scss";

const SocialMedia = () => {
    return (
        <div>
            <ul className={style.socialMediaList}>
                <li>
                    <a href="https://www.instagram.com/">Instagram</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">YouTube</a>
                </li>
            </ul>
        </div>
    );
};

export default SocialMedia;