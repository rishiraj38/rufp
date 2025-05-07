import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Plane, MapPin, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Analyzing Air Travel Demand in Tier 2/3 Cities
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A systems thinking approach to understanding the boom in domestic air travel and bust in rail travel for
              smaller Indian cities
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/problem">
                <Button>
                  Explore Our Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Team Group - 16</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Our research team explored the complex dynamics of transportation systems in India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">AK</span>
              </div>
              <h3 className="font-medium">Ayush Kumar</h3>
              <p className="text-sm text-muted-foreground">2401020016</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">DP</span>
              </div>
              <h3 className="font-medium">Deepak Pandey</h3>
              <p className="text-sm text-muted-foreground">2401010143</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">SG</span>
              </div>
              <h3 className="font-medium">Sushant Guri</h3>
              <p className="text-sm text-muted-foreground">2401010468</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">YR</span>
              </div>
              <h3 className="font-medium">Yash Raj</h3>
              <p className="text-sm text-muted-foreground">2401010514</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">RR</span>
              </div>
              <h3 className="font-medium">Rishi Raj</h3>
              <p className="text-sm text-muted-foreground">2401010380</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Transportation & Travel</h3>
            <p className="text-muted-foreground">
              Examining the shifting dynamics between air and rail travel in India's growing cities
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Tier 2/3 Cities</h3>
            <p className="text-muted-foreground">
              Focusing on the unique challenges and opportunities in India's rapidly developing smaller urban centers
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Systems Approach</h3>
            <p className="text-muted-foreground">
              Using causal loop diagrams, leverage points, and system archetypes to understand complex interactions
            </p>
          </div>
        </div>
      </section>

      {/* Research Summary */}
      <section className="container px-4 md:px-6 py-8 bg-muted rounded-lg">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Research Summary</h2>
          <p className="text-muted-foreground">
            Our research explores the growing preference for air travel in India's Tier 2/3 cities and its impact on
            traditional rail travel. Using systems thinking methodologies, we identified key variables, feedback loops,
            and leverage points that influence this transportation shift.
          </p>
          <p className="text-muted-foreground">
            We discovered several system archetypes at play, including "Success to the Successful" where aviation
            receives increasing investment while rail declines, and "Shifting the Burden" where superficial fixes mask
            deeper structural issues in railways.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/methodology">
              <Button variant="outline">View Methodology</Button>
            </Link>
            <Link href="/findings">
              <Button>View Findings</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
