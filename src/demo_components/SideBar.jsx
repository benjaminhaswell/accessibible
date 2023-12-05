import PropTypes from 'prop-types'

function SideBar({ activeLink }) {
  return (
    <div className="hidden lg:flex flex-col items-start bg-gray-200 p-4 h-screen fixed">

      <a href="/">
        <img src="/logos/3x.png" alt="Accessible logo link to home" className="w-12 h-auto mb-4" />
      </a>
      <a href="/" className="my-2 hover:underline">Home</a>
      <a href="/keyboard" className={`my-2 hover:underline ${activeLink === 'keyboard' ? 'text-purple' : ''}`}>Keyboard</a>

    </div>
  );
}

export default SideBar;

SideBar.propTypes = {
  activeLink: PropTypes.string.isRequired
}