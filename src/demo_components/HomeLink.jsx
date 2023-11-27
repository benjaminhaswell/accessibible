function HomeLink() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 p-4 w-full flex items-center justify-center bg-bgGray">
      <a href="/">
        <img src="/logos/3x.png" alt="Accessible logo link to home" className="w-12 h-auto" />
      </a>
    </div>
  );
}

export default HomeLink;
