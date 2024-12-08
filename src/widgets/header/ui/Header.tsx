import styles from "./header.module.scss"

export const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="logo">
                Logo
            </div>

            <div className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
    )
}