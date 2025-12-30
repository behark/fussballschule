import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users, Trophy, Target, Zap, Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center text-white">
          <Badge className="mb-6 bg-[#22C55E] text-sm font-semibold hover:bg-[#22C55E]">
            Performance Bootcamp 2024
          </Badge>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            FÜR ALLE DIE<br />
            <span className="text-[#22C55E]">BESSER WERDEN</span><br />
            WOLLEN.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Die Kabashi-Stöckler Fussballschule bietet professionelles Training für junge Talente. 
            Technik, Koordination und Power - alles was du brauchst, um dein Spiel auf das nächste Level zu bringen.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#22C55E] px-8 text-lg font-bold hover:bg-[#16a34a]">
              <Link href="/contact">
                Jetzt Anmelden
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent px-8 text-lg font-bold text-white hover:bg-white/10">
              <Link href="/camps">Camps entdecken</Link>
            </Button>
          </div>
          
          {/* Quick Info Cards */}
          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-[#22C55E]" />
              <p className="font-bold">27.-28. Oktober</p>
              <p className="text-sm text-gray-300">Nächstes Bootcamp</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
              <Users className="mx-auto mb-2 h-8 w-8 text-[#22C55E]" />
              <p className="font-bold">6-16 Jahre</p>
              <p className="text-sm text-gray-300">Alle Altersgruppen</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-[#22C55E]" />
              <p className="font-bold">Kirchdorf/Krems</p>
              <p className="text-sm text-gray-300">ASKÖ Fußballplatz</p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/50">
            <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-white" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-black text-[#003399] sm:text-4xl">
              UNSERE MISSION
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Wir glauben daran, dass jedes Kind das Potenzial hat, ein großartiger Fußballer zu werden. 
              Unsere Mission ist es, durch qualitativ hochwertiges Training und echte Fußball-Leidenschaft 
              junge Talente zu fördern und zu inspirieren. Bei uns lernt ihr nicht nur Fußball - 
              ihr entwickelt euch als Sportler und als Person.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-black text-[#003399] sm:text-4xl">
            DIE 4 SÄULEN UNSERES TRAININGS
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border-0 bg-gradient-to-br from-[#003399] to-[#001a4d] text-white transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Target className="mb-4 h-12 w-12 text-[#22C55E]" />
                <h3 className="mb-2 text-xl font-bold">TECHNIK</h3>
                <p className="text-sm text-gray-300">
                  Ballkontrolle, Dribbling und Passspiel auf höchstem Niveau
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-gradient-to-br from-[#003399] to-[#001a4d] text-white transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Zap className="mb-4 h-12 w-12 text-[#22C55E]" />
                <h3 className="mb-2 text-xl font-bold">KOORDINATION</h3>
                <p className="text-sm text-gray-300">
                  Beweglichkeit, Balance und Körperbeherrschung verbessern
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-gradient-to-br from-[#003399] to-[#001a4d] text-white transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Trophy className="mb-4 h-12 w-12 text-[#22C55E]" />
                <h3 className="mb-2 text-xl font-bold">POWER</h3>
                <p className="text-sm text-gray-300">
                  Kraft, Schnelligkeit und Ausdauer gezielt entwickeln
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-gradient-to-br from-[#22C55E] to-[#16a34a] text-white transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Heart className="mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-xl font-bold">LEIDENSCHAFT</h3>
                <p className="text-sm text-gray-100">
                  Die Liebe zum Spiel steht bei uns an erster Stelle
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Bootcamp CTA */}
      <section className="bg-[#003399] py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-[#22C55E] text-sm font-semibold hover:bg-[#22C55E]">
            Limitierte Plätze
          </Badge>
          <h2 className="mb-4 text-3xl font-black sm:text-4xl md:text-5xl">
            PERFORMANCE BOOTCAMP
          </h2>
          <p className="mb-2 text-2xl font-bold text-[#22C55E]">27.-28. Oktober 2024</p>
          <p className="mb-8 text-lg text-gray-300">
            Zwei Tage intensives Training am ASKÖ Kirchdorf Fußballplatz
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            <div>
              <p className="text-4xl font-black">€50</p>
              <p className="text-sm text-gray-300">Teilnahmegebühr</p>
            </div>
            <div>
              <p className="text-4xl font-black">09:00-12:00</p>
              <p className="text-sm text-gray-300">Trainingszeit</p>
            </div>
            <div>
              <p className="text-4xl font-black">6-16</p>
              <p className="text-sm text-gray-300">Jahre</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-[#22C55E] px-10 text-lg font-bold hover:bg-[#16a34a]">
            <Link href="/contact">
              Platz Sichern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-black text-[#003399] sm:text-4xl">
                UNSER TRAININGSORT
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Das Training findet am erstklassigen ASKÖ Kirchdorf Fußballplatz statt. 
                Eine professionelle Anlage mit optimalen Bedingungen für intensives Training.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-[#22C55E]" />
                  <span className="font-medium">Ertlstraße 16, 4560 Kirchdorf an der Krems</span>
                </div>
              </div>
              <Button asChild className="mt-6 bg-[#003399] hover:bg-[#001a4d]">
                <Link href="/contact">Anfahrt & Kontakt</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#003399]/20 to-[#22C55E]/20">
                <div className="text-center">
                  <MapPin className="mx-auto h-16 w-16 text-[#003399]" />
                  <p className="mt-4 font-bold text-gray-700">Karten-Platzhalter</p>
                  <p className="text-sm text-gray-500">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
