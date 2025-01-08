import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importa el hook de i18next

const Home = () => {
  const { t } = useTranslation(); // Usamos el hook para obtener las traducciones

  return (
    <motion.section
      id="home"
      className="h-screen w-full snap-start flex flex-col items-center justify-center text-center bg-home-bg bg-cover bg-center m-0 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-white text-4xl font-bold m-0">Victor Toro</h1>
      <p className="text-white text-lg mt-2 m-0">{t("home_description")}</p>
    </motion.section>
  );
};

export default Home;
