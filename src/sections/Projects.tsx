import { motion } from "framer-motion";
import { Key } from "react";
import { useTranslation } from 'react-i18next'; // Importa el hook de i18next

const Projects = () => {
  const { t } = useTranslation(); // Usamos el hook para obtener las traducciones

  return (
    <motion.section
      id="projects"
      className="h-screen snap-start flex flex-col items-center justify-center bg-purple-500 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl font-bold">{t('projects_title')}</h1> {/* Traducción del título */}
      <ul className="mt-4 space-y-4">
        {/* Asegúrate de que el tipo de 'projects_list' sea un array de strings */}
        {(t('projects_list', { returnObjects: true }) as string[]).map((project: string, index: Key) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Projects;
