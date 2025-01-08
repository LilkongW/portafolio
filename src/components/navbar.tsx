import { useTranslation } from 'react-i18next'; // Importamos el hook de i18n
import bandera from "../assets/bandera.png";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Usamos el hook para obtener las traducciones y la función de cambio de idioma

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es'; // Alternamos entre español e inglés
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 z-50">
      <div className="flex justify-between items-center w-full">
        {/* Menú de navegación centrado */}
        <ul className="flex justify-center items-center space-x-8 w-full">
          <li>
            <a href="#home" className="hover:text-gray-400 transition duration-300">
              {t('home')}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition duration-300">
              {t('about')}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition duration-300">
              {t('projects')}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition duration-300">
              {t('contact')}
            </a>
          </li>
        </ul>

        {/* Imagen de la bandera a la derecha */}
        <img 
          src={bandera} 
          alt="Bandera" 
          className="w-10 h-10 mr-2 cursor-pointer" 
          style={{ marginRight: '15px' }} 
          onClick={handleLanguageChange} // Cambiar idioma al hacer clic en la bandera
        />
      </div>
    </nav>
  );
};

export default Navbar;
