import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function FindingsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="container max-w-4xl space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Findings
        </h1>
        <p className="text-muted-foreground">
          Key insights and discoveries from our systems thinking research
        </p>
      </div>

      <Separator className="my-8" />

      <div className="container max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Key System Archetypes
          </h2>
          <p className="mb-4 text-center">
            Our analysis identified three primary system archetypes that explain
            the current transportation dynamics:
          </p>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Success to the Successful
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Aviation gets more investment and infrastructure as demand
                  increases, while rail continues to decline due to neglect.
                </p>
                <p className="mb-2">
                  <strong>Impact:</strong> Creates a self-reinforcing loop where
                  air travel dominates and rail collapses further.
                </p>
                <p>
                  <strong>Solution:</strong> Rebalance policy and investment
                  across both sectors to create fair growth opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Shifting the Burden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Tatkal schemes, superficial upgrades, and booking fixes treat
                  symptoms without addressing root causes in railways.
                </p>
                <p className="mb-2">
                  <strong>Impact:</strong> Diverts attention from deeper
                  structural reforms needed in infrastructure, hygiene, and
                  trust.
                </p>
                <p>
                  <strong>Solution:</strong> Focus on long-term structural fixes
                  like governance reform, modernization, and accountability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Eroding Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Public expectations of railway quality have diminished over
                  time due to poor service and lack of improvements.
                </p>
                <p className="mb-2">
                  <strong>Impact:</strong> Leads to systemic apathy and a
                  normalization of substandard conditions.
                </p>
                <p>
                  <strong>Solution:</strong> Set and enforce higher service
                  standards and communicate progress transparently to the
                  public.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Proposed Structural-Level Interventions
          </h2>
          <div className="space-y-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Rebalance Policy Incentives</AlertTitle>
              <AlertDescription>
                Equally prioritize railways in Tier 2/3 connectivity planning
              </AlertDescription>
            </Alert>
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Rail Infrastructure Overhaul</AlertTitle>
              <AlertDescription>
                Modernize tracks, stations, and onboard services
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Trust Restoration</AlertTitle>
              <AlertDescription>
                Improve cybersecurity, hygiene, and punctuality in railways
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Public Narrative Shift</AlertTitle>
              <AlertDescription>
                Campaign to revive the social and environmental value of rail
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Smart Pricing in Rail</AlertTitle>
              <AlertDescription>
                Introduce tiered pricing models to compete with airlines
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Feedback-informed Governance</AlertTitle>
              <AlertDescription>
                Use CLDs in transport policy planning to balance
                reinforcing/balancing loops intentionally
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">
            High-Impact Leverage Points
          </h2>
          <p className="mb-4 text-center">
            Our analysis identified the following high-impact leverage points
            where interventions could create significant change:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Passenger Trust in Rail</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Trust drives behavior. Restoring confidence in railways can
                  shift public preference back to rail, leading to increased
                  rail usage and better load balancing between transport modes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Public Perception / Status of Travel Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Status perception fuels the shift to air travel. Reframing
                  rail as modern and respectable can reverse this trend,
                  resulting in reduction in unnecessary air travel and improved
                  utilization of rail.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Government Funding Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Current investment favors aviation. Changing funding logic to
                  reward service quality and passenger experience can fix
                  structural neglect, leading to enhanced rail service,
                  reinvestment cycles, and increased satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Search Pricing Algorithms</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Dynamic pricing impacts affordability and access. Greater
                  transparency or caps can make air travel more equitable,
                  resulting in stabilized ticket pricing and demand
                  rationalization.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Potential Risks and Unintended Consequences
          </h2>
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Intervention Risks</AlertTitle>
            <AlertDescription>
              Any interventions in complex systems may have unintended
              consequences. Our analysis suggests careful monitoring of:
            </AlertDescription>
          </Alert>
          <ul className="list-disc pl-6 space-y-2 text-left">
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
