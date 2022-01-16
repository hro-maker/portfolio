import MainLayout from "./layout/Mine";
import { GrReactjs } from "react-icons/gr";
import { About } from "./components/About";
import { BsTelephoneForwardFill, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Languages } from "./components/Languages";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";
export default function App() {
  const { i18n } = useTranslation();
  return (
    <MainLayout>
      <>
        <header className="header flex-center">
          <div className="header__wrapper ">
            <GrReactjs className="header__icon" size={50} />
          </div>
          <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={i18n.language}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
  >
    <MenuItem value={'en'}>English</MenuItem>
    <MenuItem value={'ru'}>Russian</MenuItem>
  </Select>
        </header>
        <main className="content">
          <About />
          <Languages />
          <div className="contacts">
            <div className="contacts__item">
              <a href="tel:+995574700230">+995-574-700-230</a>
              <BsTelephoneForwardFill size={20} />
            </div>
            <div className="contacts__item">
              <a href="mailto:hrant.muradyan.1998@mail.ru">
                hrant.muradyan.1998@mail.ru
              </a>
              <AiOutlineMail size={20} />
            </div>
            <div className="contacts__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hrant.muradyan_/"
              >
                instagram
              </a>
              <BsInstagram size={20} />
            </div>
          </div>
        </main>
      </>
    </MainLayout>
  );
}
