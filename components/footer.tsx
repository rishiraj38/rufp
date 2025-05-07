export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Group 16 - Systems Thinking Hackathon. All rights reserved.
        </p>
        <div className="flex gap-4">
          <p className="text-sm text-muted-foreground">Ayush Kumar, Deepak Pandey, Sushant Guri, Yash Raj, Rishi Raj</p>
        </div>
      </div>
    </footer>
  )
}
