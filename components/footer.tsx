export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-6 md:py-8 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-400">
      <div className="container flex flex-col items-center justify-center gap-4">
        <p className="text-center text-sm leading-loose">
          © {new Date().getFullYear()} Group 16 - Systems Thinking Hackathon.
          All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>Ayush Kumar</span>
          <span>Deepak Pandey</span>
          <span>Sushant Guri</span>
          <span>Yash Raj</span>
          <span>Rishi Raj</span>
        </div>
      </div>
    </footer>
  );
}
