const TopHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-center h-16 sm:h-20 md:h-24 px-4">
        <a href="#home" className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-center leading-tight">
          <span className="text-primary">MNS Success</span> Martial Arts Academy
        </a>
      </div>
    </header>
  );
};

export default TopHeader;
