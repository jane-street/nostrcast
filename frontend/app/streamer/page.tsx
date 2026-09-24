"use client";

export default function StreamerDashboard() {
  return (
    <div
      className="w-screen h-screen bg-transparent relative
overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-4 left-4 bg-black/70 textgreen-400 font-mono text-xs px-3 py-1.5 rounded-md border bordergreen-500/30 tracking-widest animate-pulse">
        {" "}
        OVERLAY STATUS: ACTIVE_CONNECTED
      </div>
      <div
        id="animation-canvas"
        className="w-full h-full pointerevents-none flex items-center justify-center"
      >
        <p
          className="text-black text-sm font-mono tracking-widest font-bold
uppercase select-none opacity-20"
        >
          [ OBS Web Presentation Canvas Layer ]
        </p>
      </div>
    </div>
  );
}
