import style from "./Popup.module.scss";

function Popup({children, popup, setPopup}) {
    return popup ? (
        <div className={style.popup}>
            <div className={style.popupInner}>
                <button onClick={() => setPopup(!popup)}>X</button>
                <div className={style.popupContent}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;
}

export default Popup;