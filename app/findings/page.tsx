import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function FindingsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container max-w-4xl space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Findings
        </h1>
        <p className="text-gray-400 md:text-lg">
          Key insights and discoveries from our systems thinking research
        </p>
      </div>

      <Separator className="my-8 border-gray-700" />

      <div className="container max-w-4xl space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Key System Archetypes
          </h2>
          <p className="mb-4 text-gray-400">
            Our analysis identified three primary system archetypes that explain
            the current transportation dynamics:
          </p>
          <div className="grid gap-6">
            {[
              {
                title: "Success to the Successful",
                description:
                  "Aviation gets more investment and infrastructure as demand increases, while rail continues to decline due to neglect.",
                impact:
                  "Creates a self-reinforcing loop where air travel dominates and rail collapses further.",
                solution:
                  "Rebalance policy and investment across both sectors to create fair growth opportunities.",
              },
              {
                title: "Shifting the Burden",
                description:
                  "Tatkal schemes, superficial upgrades, and booking fixes treat symptoms without addressing root causes in railways.",
                impact:
                  "Diverts attention from deeper structural reforms needed in infrastructure, hygiene, and trust.",
                solution:
                  "Focus on long-term structural fixes like governance reform, modernization, and accountability.",
              },
              {
                title: "Eroding Goals",
                description:
                  "Public expectations of railway quality have diminished over time due to poor service and lack of improvements.",
                impact:
                  "Leads to systemic apathy and a normalization of substandard conditions.",
                solution:
                  "Set and enforce higher service standards and communicate progress transparently to the public.",
              },
            ].map((archetype, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    {archetype.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-gray-400">{archetype.description}</p>
                  <p className="mb-2 text-gray-400">
                    <strong>Impact:</strong> {archetype.impact}
                  </p>
                  <p className="text-gray-400">
                    <strong>Solution:</strong> {archetype.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Proposed Structural-Level Interventions
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Rebalance Policy Incentives",
                description:
                  "Equally prioritize railways in Tier 2/3 connectivity planning.",
                icon: <CheckCircle className="h-4 w-4 text-green-500" />,
              },
              {
                title: "Rail Infrastructure Overhaul",
                description:
                  "Modernize tracks, stations, and onboard services.",
                icon: <CheckCircle className="h-4 w-4 text-green-500" />,
              },
              {
                title: "Trust Restoration",
                description:
                  "Improve cybersecurity, hygiene, and punctuality in railways.",
                icon: <Info className="h-4 w-4 text-blue-500" />,
              },
              {
                title: "Public Narrative Shift",
                description:
                  "Campaign to revive the social and environmental value of rail.",
                icon: <Info className="h-4 w-4 text-blue-500" />,
              },
              {
                title: "Smart Pricing in Rail",
                description:
                  "Introduce tiered pricing models to compete with airlines.",
                icon: <Info className="h-4 w-4 text-blue-500" />,
              },
              {
                title: "Feedback-informed Governance",
                description:
                  "Use CLDs in transport policy planning to balance reinforcing/balancing loops intentionally.",
                icon: <Info className="h-4 w-4 text-blue-500" />,
              },
            ].map((intervention, index) => (
              <Alert key={index} className="bg-gray-800 border border-gray-700">
                {intervention.icon}
                <AlertTitle className="text-white">
                  {intervention.title}
                </AlertTitle>
                <AlertDescription className="text-gray-400">
                  {intervention.description}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Potential Risks and Unintended Consequences
          </h2>
          <Alert
            variant="destructive"
            className="bg-gray-800 border border-gray-700 mb-4"
          >
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertTitle className="text-white">Intervention Risks</AlertTitle>
            <AlertDescription className="text-gray-400">
              Any interventions in complex systems may have unintended
              consequences. Our analysis suggests careful monitoring of:
            </AlertDescription>
          </Alert>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>
              Potential economic impacts on emerging aviation sector in Tier 2/3
              cities
            </li>
            <li>Employment shifts between transportation sectors</li>
            <li>Short-term disruptions during infrastructure transitions</li>
            <li>
              Resistance from stakeholders benefiting from current system
              structure
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
