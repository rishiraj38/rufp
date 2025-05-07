import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDownUp, GitBranch, Network, RefreshCw } from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="container max-w-4xl space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Methodology
        </h1>
        <p className="text-muted-foreground">
          Our approach to applying systems thinking in the research
        </p>
      </div>

      <Separator className="my-8" />

      <div className="container max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Process Followed
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-left">
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
          <h2 className="text-2xl font-bold mb-4 text-center">
            Systems Thinking Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Network className="h-6 w-6 text-primary" />
                <CardTitle>Causal Loop Diagrams</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We created causal loop diagrams to visualize feedback
                  relationships between key variables in the system, identifying
                  reinforcing and balancing loops that drive system behavior.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GitBranch className="h-6 w-6 text-primary" />
                <CardTitle>Leverage Points Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We identified key leverage points in the system using Donella
                  Meadows' framework to determine where interventions could have
                  the most significant impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <ArrowDownUp className="h-6 w-6 text-primary" />
                <CardTitle>System Archetypes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We identified common system archetypes such as "Success to the
                  Successful" and "Shifting the Burden" to recognize recurring
                  patterns of system behavior.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <RefreshCw className="h-6 w-6 text-primary" />
                <CardTitle>EPS Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We performed Events, Patterns, Structure analysis to
                  understand the visible events, underlying patterns, and deeper
                  systemic structures driving the transportation shift.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Key Variables Identified
          </h2>
          <p className="mb-4 text-center">
            Our research identified the following key variables affecting the
            system:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <p className="font-medium">Demand for Air Travel</p>
              <p className="text-sm text-muted-foreground">
                The total number of people choosing to travel by air.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">Development in Tier 2/3 Cities</p>
              <p className="text-sm text-muted-foreground">
                Economic and infrastructural growth in smaller Indian cities.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">Income Levels</p>
              <p className="text-sm text-muted-foreground">
                The average or rising earnings of individuals in Tier 2/3
                cities.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">Paradigm Shift to Air Travels</p>
              <p className="text-sm text-muted-foreground">
                A change in mindset favoring air travel over traditional
                transport methods.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">Rail Preference</p>
              <p className="text-sm text-muted-foreground">
                The tendency or choice of people to travel by train.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">
                Number of Airports in Tier 2/3 Cities
              </p>
              <p className="text-sm text-muted-foreground">
                The count of operational airports in smaller cities.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">Air Travel Accessibility</p>
              <p className="text-sm text-muted-foreground">
                Ease of reaching and using air travel services in a region.
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-medium">Policy Focusing on Aviation</p>
              <p className="text-sm text-muted-foreground">
                Government strategies and schemes to promote regional air
                connectivity.
              </p>
            </Card>
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">
              And 8 more variables including Air Travel Affordability, Search
              Pricing, Price Gap between Air & Rail, etc.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
