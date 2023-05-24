import style from './NavItem.module.scss';

const NavItem = () => {
    return (
        <li className={style.navItem}>
            <a href="#">Nav item</a>
        </li>
    );
};

export default NavItem;