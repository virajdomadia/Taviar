export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient wash — stays fixed behind every section */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #E4EAF7 0%, #F3F6FC 32%, #FFFFFF 60%, #F0F4FC 100%)",
        }}
      />

      {/* Soft accents */}
      <div
        className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(30,64,175,0.42), transparent 68%)",
        }}
      />
      <div
        className="absolute top-[36%] -right-40 w-[680px] h-[680px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(30,64,175,0.34), transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-[-160px] left-[18%] w-[560px] h-[560px] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(10,23,48,0.20), transparent 68%)",
        }}
      />
    </div>
  );
}
