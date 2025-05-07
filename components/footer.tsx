export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-8 bg-gradient-to-b from-gray-900 to-black text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <p className="text-center text-sm md:text-base leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Group 16</span> — Systems
          Thinking Hackathon. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <span className="hover:text-white transition">Ayush Kumar</span>
          <span className="hover:text-white transition">Deepak Pandey</span>
          <span className="hover:text-white transition">Sushant Guri</span>
          <span className="hover:text-white transition">Yash Raj</span>
          <span className="hover:text-white transition">Rishi Raj</span>
        </div>
      </div>
    </footer>
  );
}
