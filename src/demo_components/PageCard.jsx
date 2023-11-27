import PropTypes from 'prop-types';

function PageCard({ name, iconPath, iconAlt }) {

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-6 mx-auto w-auto h-48">
                <img src={iconPath} alt={iconAlt}></img>
                {/* Page name */}
                <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
            </div>
        </>
    );
}

PageCard.propTypes = {
    name: PropTypes.string.isRequired, // or PropTypes.number, PropTypes.bool, etc.
    iconPath: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
};

export default PageCard;