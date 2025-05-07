import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDownUp, GitBranch, Network, RefreshCw } from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container max-w-4xl space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Methodology
        </h1>
        <p className="text-gray-400 md:text-lg">
          Our approach to applying systems thinking in the research
        </p>
      </div>

      <Separator className="my-8 border-gray-700" />

      <div className="container max-w-4xl space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Process Followed
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-400">
            <li>
              Identified the core issue: rising demand for air travel in Tier
              2/3 cities in India.
            </li>
            <li>
              Conducted preliminary research on transportation trends, aviation
              policies (e.g., UDAN), and socio-economic data.
            </li>
            <li>
              Listed key variables affecting air and rail travel (e.g., income
              levels, accessibility, pricing, crowding).
            </li>
            <li>
              Developed causal hypotheses and feedback relationships between
              variables.
            </li>
            <li>Created an initial Causal Loop Diagram (CLD) in Vensim PLE.</li>
            <li>
              Identified key system archetypes, such as "Success to the
              Successful" and "Limits to Growth".
            </li>
            <li>
              Performed EPS (Events, Patterns, Structure) analysis to
              contextualize the issue over time.
            </li>
            <li>
              Compiled findings into a structured report including problem
              framing, system map, and recommendations.
            </li>
            <li>Peer-reviewed the report and finalized it for submission.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Systems Thinking Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <Network className="h-6 w-6 text-purple-500" />
                <CardTitle className="text-white">
                  Causal Loop Diagrams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We created causal loop diagrams to visualize feedback
                  relationships between key variables in the system, identifying
                  reinforcing and balancing loops that drive system behavior.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <GitBranch className="h-6 w-6 text-purple-500" />
                <CardTitle className="text-white">
                  Leverage Points Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We identified key leverage points in the system using Donella
                  Meadows' framework to determine where interventions could have
                  the most significant impact.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <ArrowDownUp className="h-6 w-6 text-purple-500" />
                <CardTitle className="text-white">System Archetypes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We identified common system archetypes such as "Success to the
                  Successful" and "Shifting the Burden" to recognize recurring
                  patterns of system behavior.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <RefreshCw className="h-6 w-6 text-purple-500" />
                <CardTitle className="text-white">EPS Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We performed Events, Patterns, Structure analysis to
                  understand the visible events, underlying patterns, and deeper
                  systemic structures driving the transportation shift.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Key Variables Identified
          </h2>
          <p className="mb-4 text-gray-400 text-center">
            Our research identified the following key variables affecting the
            system:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Demand for Air Travel",
                description:
                  "The total number of people choosing to travel by air.",
              },
              {
                title: "Development in Tier 2/3 Cities",
                description:
                  "Economic and infrastructural growth in smaller Indian cities.",
              },
              {
                title: "Income Levels",
                description:
                  "The average or rising earnings of individuals in Tier 2/3 cities.",
              },
              {
                title: "Paradigm Shift to Air Travels",
                description:
                  "A change in mindset favoring air travel over traditional transport methods.",
              },
              {
                title: "Rail Preference",
                description:
                  "The tendency or choice of people to travel by train.",
              },
              {
                title: "Number of Airports in Tier 2/3 Cities",
                description:
                  "The count of operational airports in smaller cities.",
              },
              {
                title: "Air Travel Accessibility",
                description:
                  "Ease of reaching and using air travel services in a region.",
              },
              {
                title: "Policy Focusing on Aviation",
                description:
                  "Government strategies and schemes to promote regional air connectivity.",
              },
            ].map((variable, index) => (
              <Card
                key={index}
                className="bg-gray-800 border border-gray-700 p-4"
              >
                <p className="font-medium text-white">{variable.title}</p>
                <p className="text-sm text-gray-400">{variable.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
