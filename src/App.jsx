import "./App.css";
import video from "./assets/test.mp4";

function App() {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover !z-50 pointer-events-none mix-blend-screen "
        src={video}
        muted
        autoPlay
      />

      <h2
        className="relative text-[4em] font-extrabold text-slate-50 
      !z-40 overflow-hidden"
      >
        <span className="text-[#ff022c]">P</span>
        raticles
        <span className="text-[#ff022c]">st</span>
        roy Effects
      </h2>
    </>
  );
}

export default App;
