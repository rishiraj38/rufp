import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AnalysisPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container max-w-4xl space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Analysis
        </h1>
        <p className="text-gray-400 md:text-lg">
          Detailed examination of the system's structure, behavior, and patterns
        </p>
      </div>

      <Separator className="my-8 border-gray-700" />

      <div className="container max-w-4xl space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Leverage Points Analysis
          </h2>
          <p className="mb-4 text-gray-400 text-center">
            Using Donella Meadows' framework, we identified key leverage points
            where interventions could create significant change:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-2 text-gray-400">
                    Leverage Point
                  </th>
                  <th className="border border-gray-700 p-2 text-gray-400">
                    Category
                  </th>
                  <th className="border border-gray-700 p-2 text-gray-400">
                    Why Important
                  </th>
                  <th className="border border-gray-700 p-2 text-gray-400">
                    Expected Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    point: "Passenger Trust in Rail",
                    category: "Paradigm (#2)",
                    importance:
                      "Trust drives behavior. Restoring confidence in railways can shift public preference back to rail.",
                    impact:
                      "Increased rail usage, better load balancing between transport modes.",
                  },
                  {
                    point: "Public Perception / Status of Travel Mode",
                    category: "Paradigm (#2)",
                    importance:
                      "Status perception fuels the shift to air travel. Reframing rail as modern and respectable can reverse this trend.",
                    impact:
                      "Reduction in unnecessary air travel; improved utilization of rail.",
                  },
                  {
                    point: "Government Funding Criteria for Railways",
                    category: "Rules of the System (#5)",
                    importance:
                      "Current investment favors aviation. Changing funding logic to reward service quality and passenger experience can fix structural neglect.",
                    impact:
                      "Enhanced rail service, reinvestment cycles, increased satisfaction.",
                  },
                  {
                    point: "Search Pricing Algorithms in Airlines",
                    category: "Information Flows (#6)",
                    importance:
                      "Dynamic pricing impacts affordability and access. Greater transparency or caps can make air travel more equitable.",
                    impact:
                      "Stabilized ticket pricing; demand rationalization.",
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.point}
                    </td>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.category}
                    </td>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.importance}
                    </td>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            System Archetypes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-2 text-gray-400">
                    System Archetype
                  </th>
                  <th className="border border-gray-700 p-2 text-gray-400">
                    Where It Appears
                  </th>
                  <th className="border border-gray-700 p-2 text-gray-400">
                    Impact on the System
                  </th>
                  <th className="border border-gray-700 p-2 text-gray-400">
                    How to Address It
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    archetype: "Success to the Successful",
                    appears:
                      "Aviation gets more investment and infrastructure as demand increases, while rail continues to decline due to neglect.",
                    impact:
                      "Creates a self-reinforcing loop where air travel dominates and rail collapses further.",
                    address:
                      "Rebalance policy and investment across both sectors to create fair growth opportunities.",
                  },
                  {
                    archetype: "Shifting the Burden",
                    appears:
                      "Tatkal schemes, superficial upgrades, and booking fixes treat symptoms without addressing root causes in railways.",
                    impact:
                      "Diverts attention from deeper structural reforms needed in infrastructure, hygiene, and trust.",
                    address:
                      "Focus on long-term structural fixes like governance reform, modernization, and accountability.",
                  },
                  {
                    archetype: "Eroding Goals",
                    appears:
                      "Public expectations of railway quality have diminished over time due to poor service and lack of improvements.",
                    impact:
                      "Leads to systemic apathy and a normalization of substandard conditions.",
                    address:
                      "Set and enforce higher service standards and communicate progress transparently to the public.",
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.archetype}
                    </td>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.appears}
                    </td>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.impact}
                    </td>
                    <td className="border border-gray-700 p-2 text-gray-400">
                      {row.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            EPS Analysis (Events, Patterns, Structure)
          </h2>
          <Tabs defaultValue="events">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
            </TabsList>
            <TabsContent value="events" className="space-y-4 pt-4">
              <Card className="bg-gray-800 border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    What's Visible on the Surface
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>
                      Sudden spikes in air travel demand from Tier 2/3 cities
                    </li>
                    <li>
                      Frequent unavailability of train tickets, especially
                      Tatkal
                    </li>
                    <li>
                      Increase in airfares due to search-based dynamic pricing
                    </li>
                    <li>
                      Rising complaints about unhygienic and unsafe rail
                      conditions
                    </li>
                    <li>Delays in trains during winter months</li>
                    <li>
                      Reports of cyber fraud and booking issues in railways
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="patterns" className="space-y-4 pt-4">
              <Card className="bg-gray-800 border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    What Happens Repeatedly Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>
                      Gradual shift of middle-class and Tier 2/3 travelers from
                      rail to air
                    </li>
                    <li>Rising dissatisfaction with railway service quality</li>
                    <li>
                      Perception of air travel as a symbol of status and
                      progress
                    </li>
                    <li>
                      Decline in rail demand leading to reduced government
                      investment
                    </li>
                    <li>
                      Air infrastructure growing disproportionately, especially
                      via privatization
                    </li>
                    <li>
                      Price parity emerging between low-cost air and premium
                      rail options
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure" className="space-y-4 pt-4">
              <Card className="bg-gray-800 border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    What Holds the Pattern in Place
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>
                      <strong>Incentives:</strong> Government incentives and
                      policies heavily favor aviation growth
                    </li>
                    <li>
                      <strong>Beliefs/Paradigms:</strong> Air travel is viewed
                      as modern, faster, and a symbol of success
                    </li>
                    <li>
                      <strong>Rules:</strong> Lack of competition and
                      accountability in Indian Railways; slow reforms
                    </li>
                    <li>
                      <strong>Corruption and Neglect:</strong> Systemic
                      inefficiencies and corruption undermine trust in rail
                    </li>
                    <li>
                      <strong>Feedback Loops:</strong> Reinforcing loops
                      increase air travel preference due to infrastructure and
                      perception
                    </li>
                    <li>
                      <strong>Investment Disparity:</strong> Underinvestment in
                      rail leads to a vicious cycle of poor service → declining
                      users → less funding
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
