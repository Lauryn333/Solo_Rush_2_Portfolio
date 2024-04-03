import { useState } from "react";

function Header() {

    const [widthImage, setWidthImage] = useState(300);

    const handleMouseEnter = () => {
        setWidthImage(500);
    }

    const handleMouseLeave = () => {
        setWidthImage(300);
    }

    return (
        <>
            <nav className="nav_barre">
                <ul className="nav_ul">
                    <li><a href="#">Projets</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <header>
                <h1>Lauryn MARTIN</h1>
                <img onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}


                    className="avatar" src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_1280.png" alt="avatar" width={widthImage} />
                <h2>À propos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quia deserunt, amet totam aliquam illum a, accusantium fugit eos ut inventore laborum, iusto quae suscipit incidunt? Asperiores laudantium voluptates minima.</p>
            </header>
        </>
    )
}

export default Header;