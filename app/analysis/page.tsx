import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalysisPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Analysis</h1>
        <p className="text-muted-foreground">Detailed examination of the system's structure, behavior, and patterns</p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Leverage Points Analysis</h2>
          <p className="mb-4">
            Using Donella Meadows' framework, we identified key leverage points where interventions could create
            significant change:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Leverage Point</th>
                  <th className="border p-2 text-left">Category</th>
                  <th className="border p-2 text-left">Why Important</th>
                  <th className="border p-2 text-left">Expected Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Passenger Trust in Rail</td>
                  <td className="border p-2">Paradigm (#2)</td>
                  <td className="border p-2">
                    Trust drives behavior. Restoring confidence in railways can shift public preference back to rail.
                  </td>
                  <td className="border p-2">Increased rail usage, better load balancing between transport modes.</td>
                </tr>
                <tr>
                  <td className="border p-2">Public Perception / Status of Travel Mode</td>
                  <td className="border p-2">Paradigm (#2)</td>
                  <td className="border p-2">
                    Status perception fuels the shift to air travel. Reframing rail as modern and respectable can
                    reverse this trend.
                  </td>
                  <td className="border p-2">Reduction in unnecessary air travel; improved utilization of rail.</td>
                </tr>
                <tr>
                  <td className="border p-2">Government Funding Criteria for Railways</td>
                  <td className="border p-2">Rules of the System (#5)</td>
                  <td className="border p-2">
                    Current investment favors aviation. Changing funding logic to reward service quality and passenger
                    experience can fix structural neglect.
                  </td>
                  <td className="border p-2">Enhanced rail service, reinvestment cycles, increased satisfaction.</td>
                </tr>
                <tr>
                  <td className="border p-2">Search Pricing Algorithms in Airlines</td>
                  <td className="border p-2">Information Flows (#6)</td>
                  <td className="border p-2">
                    Dynamic pricing impacts affordability and access. Greater transparency or caps can make air travel
                    more equitable.
                  </td>
                  <td className="border p-2">Stabilized ticket pricing; demand rationalization.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">System Archetypes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">System Archetype</th>
                  <th className="border p-2 text-left">Where It Appears</th>
                  <th className="border p-2 text-left">Impact on the System</th>
                  <th className="border p-2 text-left">How to Address It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Success to the Successful</td>
                  <td className="border p-2">
                    Aviation gets more investment and infrastructure as demand increases, while rail continues to
                    decline due to neglect.
                  </td>
                  <td className="border p-2">
                    Creates a self-reinforcing loop where air travel dominates and rail collapses further.
                  </td>
                  <td className="border p-2">
                    Rebalance policy and investment across both sectors to create fair growth opportunities.
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Shifting the Burden</td>
                  <td className="border p-2">
                    Tatkal schemes, superficial upgrades, and booking fixes treat symptoms without addressing root
                    causes in railways.
                  </td>
                  <td className="border p-2">
                    Diverts attention from deeper structural reforms needed in infrastructure, hygiene, and trust.
                  </td>
                  <td className="border p-2">
                    Focus on long-term structural fixes like governance reform, modernization, and accountability.
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Eroding Goals</td>
                  <td className="border p-2">
                    Public expectations of railway quality have diminished over time due to poor service and lack of
                    improvements.
                  </td>
                  <td className="border p-2">
                    Leads to systemic apathy and a normalization of substandard conditions.
                  </td>
                  <td className="border p-2">
                    Set and enforce higher service standards and communicate progress transparently to the public.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">EPS Analysis (Events, Patterns, Structure)</h2>
          <Tabs defaultValue="events">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
            </TabsList>
            <TabsContent value="events" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>What's Visible on the Surface</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sudden spikes in air travel demand from Tier 2/3 cities</li>
                    <li>Frequent unavailability of train tickets, especially Tatkal</li>
                    <li>Increase in airfares due to search-based dynamic pricing</li>
                    <li>Rising complaints about unhygienic and unsafe rail conditions</li>
                    <li>Delays in trains during winter months</li>
                    <li>Reports of cyber fraud and booking issues in railways</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="patterns" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>What Happens Repeatedly Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Gradual shift of middle-class and Tier 2/3 travelers from rail to air</li>
                    <li>Rising dissatisfaction with railway service quality</li>
                    <li>Perception of air travel as a symbol of status and progress</li>
                    <li>Decline in rail demand leading to reduced government investment</li>
                    <li>Air infrastructure growing disproportionately, especially via privatization</li>
                    <li>Price parity emerging between low-cost air and premium rail options</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>What Holds the Pattern in Place</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Incentives:</strong> Government incentives and policies heavily favor aviation growth
                    </li>
                    <li>
                      <strong>Beliefs/Paradigms:</strong> Air travel is viewed as modern, faster, and a symbol of
                      success
                    </li>
                    <li>
                      <strong>Rules:</strong> Lack of competition and accountability in Indian Railways; slow reforms
                    </li>
                    <li>
                      <strong>Corruption and Neglect:</strong> Systemic inefficiencies and corruption undermine trust in
                      rail
                    </li>
                    <li>
                      <strong>Feedback Loops:</strong> Reinforcing loops increase air travel preference due to
                      infrastructure and perception
                    </li>
                    <li>
                      <strong>Investment Disparity:</strong> Underinvestment in rail leads to a vicious cycle of poor
                      service → declining users → less funding
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Analysis of Existing Solutions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Solution</th>
                  <th className="border p-2 text-left">Targets</th>
                  <th className="border p-2 text-left">Analysis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Tatkal Quotas</td>
                  <td className="border p-2">Event-level</td>
                  <td className="border p-2">
                    Treats symptom (ticket scarcity) without fixing underlying demand or trust issues
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Dynamic Pricing in Airlines</td>
                  <td className="border p-2">Pattern-level</td>
                  <td className="border p-2">Tries to manage demand, but leads to affordability issues</td>
                </tr>
                <tr>
                  <td className="border p-2">Airport Development in T2/3 Cities</td>
                  <td className="border p-2">Structure-level</td>
                  <td className="border p-2">Reinforces aviation growth, but neglects rail as a viable option</td>
                </tr>
                <tr>
                  <td className="border p-2">IRCTC Tech Improvements</td>
                  <td className="border p-2">Event-level</td>
                  <td className="border p-2">Doesn't address fear of fraud, hygiene, or physical infrastructure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
