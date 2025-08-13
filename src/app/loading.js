'use client'
export default function Loading() {
  return (
    <>
      <div
        id="preloader"
        className="fixed flex flex-wrap justify-center items-center bg-[var(--color-body)] z-[500] h-screen w-full opacity-100"
      >
        <div
          id="loader"
          className="w-[var(--vspace-2)] h-[var(--vspace-2)] p-0 bg-white rounded-full"
          style={{
            animation: 'sk-scaleout 1s infinite ease-in-out',
          }}
        ></div>
      </div>

      <div className="s-pagewrap">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        @keyframes sk-scaleout {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
