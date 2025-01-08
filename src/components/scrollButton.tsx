import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollButton = () => {
  const handleScroll = () => {
    const container = document.querySelector('.overflow-y-scroll'); // Ajusta al selector de tu contenedor
    
    // Verificar si container no es null antes de usarlo
    if (!container) return; // Si container es null, salir de la función

    const sections = document.querySelectorAll('section');
    const currentScroll = container.scrollTop;

    // Ordena las secciones por su offsetTop
    const sortedSections = Array.from(sections).sort((a, b) => a.offsetTop - b.offsetTop);

    // Encuentra la última sección visible antes del scroll actual
    const prevSection = sortedSections.reverse().find(
      (section) => section.offsetTop < currentScroll - 1
    );

    if (prevSection) {
      container.scrollTo({
        top: prevSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-10 right-10 bg-black bg-opacity-70 text-white p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300"
    >
      <ArrowCircleUpIcon fontSize="large" />
    </button>
  );
};

export default ScrollButton;
