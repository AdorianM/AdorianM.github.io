import { Link } from 'react-router-dom';
import './Navigation.css';
import {useLocation} from 'react-router-dom';

interface IMenu {
    id: string;
    title: string;
    path: string;
}


const Navigation = (props: {menus: IMenu[]}) => {
    const location = useLocation();

    return (
        <nav className="navigation">
            <ul>
                {
                    props.menus.map((elem: any) => {
                        console.log("Elem: " + elem.path)
                        console.log("Location: " + location.pathname)
                        return (
                            <li key={elem.id}>
                                <Link to={elem.path}
                                      className={
                                        location.pathname === elem.path
                                        ? 'selected' : ""} >
                                    {elem.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;
export type { IMenu };