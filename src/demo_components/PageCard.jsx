import PropTypes from 'prop-types';

function PageCard({ name, iconPath, iconAlt }) {

    // For link
    let path = "/" + name.toLowerCase();

  return (
    <>
    <a href={path} className="rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out p-6 mx-auto w-auto h-48 bg-white">
        <img src={iconPath} alt={iconAlt}></img>
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      </a>
    </>
  );
}

PageCard.propTypes = {
  name: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
};

export default PageCard;
