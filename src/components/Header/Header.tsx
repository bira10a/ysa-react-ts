import { NavLink } from "react-router";
import Logo from "./logo.svg";
import HeaderPhone from "./headerPhone.svg";
import HeaderEmail from "./headerEmail.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <img src={Logo} alt="логотип" width="150" height="100" />
        </NavLink>

        <nav className="header__nav">
          <ul>
            <li>
              <NavLink to="/">
                О компании
              </NavLink>
            </li>

            <li>
              <NavLink to="vacancy">
                Вакансии
              </NavLink>
            </li>

            <li>
              <NavLink to="#">
                Контакты
              </NavLink>
            </li>

            <li>
              <NavLink to="#">
                ИНФО
              </NavLink>
            </li>
          </ul>
        </nav>

        <ul className="header__connection">
          <li>
            <button style={{ backgroundImage: 'HeaderPhone', width: '200px'}} className="header__connection-tel" type="button" aria-label="показать телефон компании"></button>
            <a href="tel:+79053916067">+7 (905) 391-60-67</a>
          </li>
          
          <li>
            <button type="button" aria-label="показать почту компании"></button>
            <a href="mailto:info@yugsa.ru">info@yugsa.ru</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
export{Header}