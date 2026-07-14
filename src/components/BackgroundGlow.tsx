export const BackgroundGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] h-[42%] w-[42%] rounded-full bg-primary/12 blur-[72px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[48%] w-[48%] rounded-full bg-cyan-900/8 blur-[88px]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};
