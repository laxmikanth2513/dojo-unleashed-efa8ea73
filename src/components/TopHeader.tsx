const TopHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-center h-20 sm:h-20 md:h-24 px-4 py-2">
        <a
          href="#home"
          className="font-heading font-extrabold uppercase text-center leading-[1.05] tracking-[0.12em] sm:tracking-[0.15em] flex flex-col sm:block"
        >
          <span className="text-primary text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl block sm:inline">
            MNS Success
          </span>
          <span className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl block sm:inline sm:ml-2 mt-1 sm:mt-0">
            Martial Arts Academy
          </span>
        </a>
      </div>
    </header>
  );
};

export default TopHeader;
