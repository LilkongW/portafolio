import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importa el hook de i18next

const About = () => {
  const { t } = useTranslation(); // Usamos el hook para obtener las traducciones

  return (
    <motion.section
      id="about"
      className="h-screen snap-start flex flex-col items-center justify-center bg-green-500 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl font-bold">{t('about_title')}</h1> {/* Traducción del título */}
      <p className="mt-4 max-w-md text-center">
        {t('about_description')} {/* Traducción de la descripción */}
      </p>
    </motion.section>
  );
};

export default About;
