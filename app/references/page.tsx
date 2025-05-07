import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReferencesPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container max-w-4xl space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          References
        </h1>
        <p className="text-gray-400 md:text-lg">
          Sources and resources that informed our systems thinking research
        </p>
      </div>

      <Separator className="my-8 border-gray-700" />

      <Tabs defaultValue="government" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="government">Government Reports</TabsTrigger>
          <TabsTrigger value="academic">Academic Journals</TabsTrigger>
          <TabsTrigger value="industry">Industry Reports</TabsTrigger>
          <TabsTrigger value="online">Online Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="government" className="space-y-4 pt-6">
          <p className="mb-4 text-center text-gray-400">
            The following government reports and publications informed our
            research:
          </p>
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-white">
                    Ministry of Railways, Government of India
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Annual reports and policy documents related to railway
                    development and passenger services
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    Civil Aviation Authority of India
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Statistics and policy documents on regional air connectivity
                    and UDAN scheme
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    National Institution for Transforming India (NITI Aayog)
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Strategic papers on transportation infrastructure
                    development in India
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    Indian Economic Survey 2024
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Economic data and analysis on transportation sector growth
                    and investment
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4 pt-6">
          <p className="mb-4 text-center text-gray-400">
            The following academic journals and articles provided theoretical
            frameworks and research methodologies:
          </p>
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-white">
                    Journal of Transport Economics and Policy
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Research on transportation mode choice, pricing strategies,
                    and infrastructure development
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    Transportation Research Part A: Policy and Practice
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Studies on transportation policy impacts and passenger
                    behavior
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    International Journal of Sustainable Transportation
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Research on environmental and social impacts of
                    transportation mode shifts
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-4 pt-6">
          <p className="mb-4 text-center text-gray-400">
            The following industry reports and market research provided valuable
            data and insights:
          </p>
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-white">
                    IATA (International Air Transport Association) Reports
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Global and regional trends in air travel demand and market
                    development
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    CRISIL (Credit Rating Information Services of India Limited)
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Market analysis and forecasts for Indian transportation
                    sector
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    FICCI (Federation of Indian Chambers of Commerce & Industry)
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Industry perspectives on transportation infrastructure
                    development
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="online" className="space-y-4 pt-6">
          <p className="mb-4 text-center text-gray-400">
            The following online sources and news articles provided current
            context and case examples:
          </p>
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-white">
                    The Hindu, Economic Times, and Times of India
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    News coverage of transportation trends, policy changes, and
                    passenger experiences
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    NDTV, Reuters, and BBC News
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Reports on transportation infrastructure development and
                    service quality issues
                  </p>
                </li>
                <li>
                  <p className="font-medium text-white">
                    Livemint, Business Standard
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Business and economic analysis of transportation sector
                    developments
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Transport & Infrastructure Tools
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-400 text-left">
          <li>IRCTC (Indian Railway Catering and Tourism Corporation)</li>
          <li>DGCA (Directorate General of Civil Aviation) Data</li>
          <li>Aviation and Rail Infrastructure Development Tools</li>
        </ul>
      </section>
    </div>
  );
}
