export const Header = ({title}) => {
    return (
        <header>
            <h1 className="site-title">{title}</h1>
            <nav>
            <a href="#">domů</a>
            <a href="#">lekce</a>
            <a href="#">náš tým</a>
            <a href="#">události</a>
            <a href="#">kontakt</a>
            </nav>
        </header>    
    )
}