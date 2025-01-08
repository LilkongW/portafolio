import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importa el hook de i18next

const Contact = () => {
  const { t } = useTranslation(); // Usamos el hook para obtener las traducciones

  return (
    <motion.section
      id="contact"
      className="h-screen snap-start flex items-center justify-center bg-yellow-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-black text-4xl font-bold">{t("contact_title")}</h1>
    </motion.section>
  );
};

export default Contact;
