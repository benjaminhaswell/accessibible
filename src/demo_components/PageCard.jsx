import PropTypes from 'prop-types';

function PageCard({ name, path, iconPath, iconAlt }) {

    // For link
    // let path = "/" + name.toLowerCase();

  return (
    <>
    <a href={path} className="rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out p-6 mx-auto w-full md:w-56 h-56 bg-white flex flex-col justify-center content-center items-center">
        <img draggable='false' className='h-24 w-24' src={iconPath} alt={iconAlt}></img>
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      </a>
    </>
  );
}

PageCard.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
};

export default PageCard;
