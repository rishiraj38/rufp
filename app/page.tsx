import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Plane, MapPin, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="w-full max-w-7xl px-4 md:px-6">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Analyzing Air Travel Demand in Tier 2/3 Cities
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              A systems thinking approach to understanding the boom in domestic
              air travel and bust in rail travel for smaller Indian cities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/problem">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white hover:opacity-90">
                  Explore Our Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Team Group - 16
            </h2>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              Our research team explored the complex dynamics of transportation
              systems in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
              {/* Team Members */}
              {[
                { name: "Ayush Kumar", id: "2401020016", initials: "AK" },
                { name: "Deepak Pandey", id: "2401010143", initials: "DP" },
                { name: "Sushant Guri", id: "2401010468", initials: "SG" },
                { name: "Yash Raj", id: "2401010514", initials: "YR" },
                { name: "Rishi Raj", id: "2401010380", initials: "RR" },
              ].map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
                    <span className="font-semibold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-medium text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.id}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mt-12">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {[
              {
                title: "Transportation & Travel",
                description:
                  "Examining the shifting dynamics between air and rail travel in India's growing cities.",
                icon: Plane,
              },
              {
                title: "Tier 2/3 Cities",
                description:
                  "Focusing on the unique challenges and opportunities in India's rapidly developing smaller urban centers.",
                icon: MapPin,
              },
              {
                title: "Systems Approach",
                description:
                  "Using causal loop diagrams, leverage points, and system archetypes to understand complex interactions.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Summary */}
        <section className="py-12 bg-gray-800 rounded-lg mt-12 mb-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Research Summary
            </h2>
            <p className="text-gray-400">
              Our research explores the growing preference for air travel in
              India's Tier 2/3 cities and its impact on traditional rail travel.
              Using systems thinking methodologies, we identified key variables,
              feedback loops, and leverage points that influence this
              transportation shift.
            </p>
            <p className="text-gray-400">
              We discovered several system archetypes at play, including
              "Success to the Successful" where aviation receives increasing
              investment while rail declines, and "Shifting the Burden" where
              superficial fixes mask deeper structural issues in railways.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/methodology">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-gray-700"
                >
                  View Methodology
                </Button>
              </Link>
              <Link href="/findings">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white hover:opacity-90">
                  View Findings
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
