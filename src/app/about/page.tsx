import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Heart, ArrowRight, Camera } from "lucide-react";

export const metadata = {
  title: "Über Uns | Kabashi-Stöckler Fussballschule",
  description: "Lerne das Team hinter der Kabashi-Stöckler Fussballschule kennen. Unsere Geschichte, unsere Trainer und unsere Vision.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#22C55E] hover:bg-[#22C55E]">Über Uns</Badge>
          <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-6xl">
            DAS TEAM
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Lerne die Menschen kennen, die hinter der Kabashi-Stöckler Fussballschule stehen.
          </p>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-black text-[#003399]">UNSERE TRAINER</h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Coach 1 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64 bg-gradient-to-br from-[#003399]/20 to-[#22C55E]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Foto Platzhalter</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1 text-2xl font-black text-[#003399]">KABASHI</h3>
                <p className="mb-4 font-semibold text-[#22C55E]">Co-Founder & Trainer</p>
                <p className="text-gray-600">
                  Mit jahrelanger Erfahrung im Fußball bringt Kabashi technisches Know-how 
                  und echte Leidenschaft für die Entwicklung junger Spieler mit. 
                  Sein Fokus liegt auf der individuellen Förderung und dem Aufbau 
                  von Selbstvertrauen bei jedem Kind.
                </p>
              </CardContent>
            </Card>

            {/* Coach 2 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64 bg-gradient-to-br from-[#003399]/20 to-[#22C55E]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Foto Platzhalter</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1 text-2xl font-black text-[#003399]">STÖCKLER</h3>
                <p className="mb-4 font-semibold text-[#22C55E]">Co-Founder & Trainer</p>
                <p className="text-gray-600">
                  Stöckler kombiniert moderne Trainingsmethoden mit traditionellem 
                  Fußball-Know-how. Seine Stärke liegt in der Koordinations- und 
                  Athletikschulung sowie der Vermittlung von Spielintelligenz 
                  auf spielerische Art und Weise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-black text-[#003399]">UNSERE GESCHICHTE</h2>
            <p className="mb-6 text-lg text-gray-700">
              Die Kabashi-Stöckler Fussballschule wurde aus der gemeinsamen Leidenschaft 
              für den Fußball und dem Wunsch gegründet, jungen Talenten in Oberösterreich 
              professionelles Training zu bieten.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              Was als kleine Initiative begann, hat sich zu einem anerkannten Trainingszentrum 
              entwickelt, das Kinder und Jugendliche von 6 bis 16 Jahren auf ihrem fußballerischen 
              Weg begleitet und fördert.
            </p>
            <p className="text-lg text-gray-700">
              Unser Ziel ist es, nicht nur bessere Fußballer zu entwickeln, sondern auch 
              Werte wie Teamgeist, Fairplay und Durchhaltevermögen zu vermitteln - 
              Eigenschaften, die weit über den Fußballplatz hinaus wichtig sind.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-black text-[#003399]">UNSERE WERTE</h2>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-[#003399] p-8 text-center text-white">
              <Award className="mx-auto mb-4 h-12 w-12 text-[#22C55E]" />
              <h3 className="mb-2 text-xl font-bold">Qualität</h3>
              <p className="text-sm text-gray-300">
                Professionelles Training auf höchstem Niveau mit modernsten Methoden
              </p>
            </div>

            <div className="rounded-xl bg-[#003399] p-8 text-center text-white">
              <Users className="mx-auto mb-4 h-12 w-12 text-[#22C55E]" />
              <h3 className="mb-2 text-xl font-bold">Gemeinschaft</h3>
              <p className="text-sm text-gray-300">
                Teamgeist und Zusammenhalt stehen bei uns an erster Stelle
              </p>
            </div>

            <div className="rounded-xl bg-[#003399] p-8 text-center text-white">
              <Heart className="mx-auto mb-4 h-12 w-12 text-[#22C55E]" />
              <h3 className="mb-2 text-xl font-bold">Leidenschaft</h3>
              <p className="text-sm text-gray-300">
                Die Liebe zum Fußball treibt uns jeden Tag an
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-black text-[#003399]">GALERIE</h2>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-[#003399]/10 to-[#22C55E]/10"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-500">
            Fotos von unseren Camps und Trainings werden hier bald hinzugefügt!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003399] py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-3xl font-black">WERDE TEIL UNSERES TEAMS!</h2>
          <p className="mb-8 text-lg text-gray-300">
            Melde dich jetzt für unser nächstes Bootcamp an.
          </p>
          <Button asChild size="lg" className="bg-[#22C55E] px-10 text-lg font-bold hover:bg-[#16a34a]">
            <Link href="/contact">
              Jetzt Anmelden
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
