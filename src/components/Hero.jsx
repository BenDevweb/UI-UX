import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative  min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
            }} />

            <div className="absolute top-20 left-4 sm:left-10 w-72 h-48 sm:h-72 bg-blue-580/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-90 h-64 sm:h-56 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative order-2 w-full">
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                    <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hodden h-[200px] sm:w-[350px] lg:h-[450px] border border-white/5">
                        {/**IDE HEADER */}
                        <div className="flex items-center justify-between px-3 sm:px4 sm:py-3 bg-white/5 backdrop-blur-60 border-white ">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-xs sm:text-sm text-gray-300">CodingSpace AI</span>
                            </div>
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 " />
                        </div>
                    </div>
                    <div>
                        {/** file tabs */}
                        <div>
                            <button className="px-3 p py-2 backdrop-blur-sm text-sm sm:text-sm rounded-t-lg bordeer bg-white/5 text-gray-300 transition-all  duration-200">App.jsx</button>
                            <button>Hero.jsx</button>
                            <button>Navbar.jsx</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}