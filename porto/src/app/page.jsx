import SplitText from "@/components/SplitText";
export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex h-screen items-center justify-center bg-linear-to-b from-green-50 from-82% to-100% to-green-200"
      >
        <div className="title">
          <h1 className="font-bold text-[2vw]">Hi, I'm a</h1>
          <SplitText
            text="BACKEND DEVELOPER"
            className="text-[9vw] font-semibold text-center leading-27 "
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div className="flex justify-between">
            <div className="button flex justify-center items-center gap-2">
              <a
                href=""
                className="drop-shadow-2xl bg-green-500 hover:bg-green-600 transition-colors py-2 px-3  rounded-[8px] text-white font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-target"
              >
                Download CV
              </a>

              <a
                href=""
                className="drop-shadow-2xl bg-green-500 hover:bg-green-600 transition-colors py-2 px-3 rounded-[8px] text-white font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-target"
              >
                View Project
              </a>
            </div>
            <h2 className="text-right text-[2vw] font-medium cursor-target">
              Nadra Zaki Saputra
            </h2>
          </div>
          <p className="text-[1.2rem] text-center mt-2">
            Bringing calm logic to chaotic systems 🌿 <br /> Backend Developer
            who keeps it clean, fast, and green.
          </p>
        </div>
      </section>
      <section id="about" className="bg-linear-to-b from-80% from-green-200 to-100% to-green-300 h-screen"></section>
    </main>
  );
}
