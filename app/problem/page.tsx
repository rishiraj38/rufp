import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProblemPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Problem Statement</h1>
        <p className="text-muted-foreground">Boom in Domestic Air Travel, Bust in Rail Travel for Tier 2-3 Cities</p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="mb-4">
            India's rapid urbanization has seen increasing investment and policy focus on Tier 2/3 cities. With growing
            income levels, infrastructure improvements, and evolving social dynamics, air travel is becoming
            increasingly accessible and preferred. However, this shift raises questions about its systemic impacts on
            existing transport modes like rail, and on overall mobility sustainability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
          <Card>
            <CardHeader>
              <CardTitle>Research Question</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                What are the key drivers influencing the growing demand for air travel in Tier 2/3 cities, and how do
                they interact dynamically with factors such as policy, infrastructure, pricing, and passenger behavior?
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Domain Context</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Transportation & Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  This research examines the transportation sector in India, specifically focusing on the changing
                  dynamics between air and rail travel modes in smaller cities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Socioeconomic Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The study considers how rising income levels, changing social perceptions, and infrastructure
                  development influence travel preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Significance</h2>
          <p className="mb-4">
            Understanding the systemic factors driving this shift in travel preferences is crucial for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Developing balanced transportation policies that consider both air and rail modes</li>
            <li>Ensuring sustainable mobility options for India's growing urban centers</li>
            <li>Addressing potential negative consequences of declining rail usage</li>
            <li>Planning appropriate infrastructure investments across transportation modes</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
