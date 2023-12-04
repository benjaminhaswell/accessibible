function SideBar() {
    return (
      <div className="hidden lg:flex flex-col items-start bg-gray-200 p-4 h-screen fixed">

        <a href="/" className="my-2 text-blue-600 hover:underline">Home</a>
        <a href="/keyboard" className="my-2 text-blue-600 hover:underline">Keyboard</a>

      </div>
    );
  }
  
  export default SideBar;