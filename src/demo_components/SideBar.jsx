import PropTypes from 'prop-types'

function SideBar({ activeLink }) {
  return (
    <div className="flex flex-col items-start p-4 h-screen fixed">

      <a href="/">
        <img src="/logos/3x.png" alt="Accessible logo link to home" className="w-12 h-auto mb-4" />
      </a>
      <a href="/" className="my-2 hover:underline">Home</a>
      <a href="/keyboard" className={`my-2 hover:underline ${activeLink === 'keyboard' ? 'text-purple' : ''}`}>Keyboard</a>
      <a href="/contrast" className={`my-2 hover:underline ${activeLink === 'contrast' ? 'text-purple' : ''}`}>Color Contrast</a>
      <a href="/alt-text" className={`my-2 hover:underline ${activeLink === 'alt-text' ? 'text-purple' : ''}`}>Alt Text</a>
      <a href="/focus" className={`my-2 hover:underline ${activeLink === 'focus' ? 'text-purple' : ''}`}>Focus Indicator</a>




    </div>
  );
}

export default SideBar;

SideBar.propTypes = {
  activeLink: PropTypes.string.isRequired
}