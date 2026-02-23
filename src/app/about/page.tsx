import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, Heart, ArrowRight } from "lucide-react";

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

      {/* Team Photo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/trainer-team.jpg"
              alt="Albert Kabashi und Jonas Stöckler - Trainer der KS Fussballschule"
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-black text-[#003399]">UNSERE TRAINER</h2>

          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Coach 1 - Jonas Stöckler */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/jonas-stoeckler.jpg"
                  alt="Jonas Stöckler - Co-Founder & Trainer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1 text-2xl font-black text-[#003399]">Jonas Stöckler</h3>
                <p className="mb-4 font-semibold text-[#22C55E]">Co-Founder & Trainer</p>
                <div className="space-y-3 text-gray-600">
                  <p>
                    Jonas Stöckler begann seine fußballerische Laufbahn bereits im Alter von sechs Jahren
                    bei Grün-Weiß Micheldorf. Dort durchlief er alle Nachwuchsstationen und schaffte
                    schließlich den Sprung in die Kampfmannschaft der OÖ-Liga. In dieser Zeit absolvierte
                    er zahlreiche Einsätze und erzielte zwei Tore. Neben seiner Zeit in Micheldorf sammelte
                    er auch wertvolle Erfahrungen in Wien, wo er sechs Monate lang beim Regionalligisten
                    Wiener Viktoria unter der Leitung von Toni Polster mittrainierte.
                  </p>
                  <p>
                    Nach dieser intensiven Phase folgte der Wechsel in die Landesliga Wien zur Sportunion
                    Schönbrunn. Zwei Jahre später kehrte er zurück nach Oberösterreich zur Union Pettenbach,
                    ebenfalls ein Verein der Landesliga. Aufgrund wiederkehrender und hartnäckiger Verletzungen
                    ließ die Motivation und der Antrieb für den leistungsorientierten Fußball jedoch
                    zunehmend nach.
                  </p>
                  <p>
                    Parallel zu seiner sportlichen Laufbahn ist Jonas heute als Lehrperson an der
                    Mittelschule in Kirchdorf tätig.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Coach 2 - Albert Kabashi */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/albert-kabashi.jpg"
                  alt="Albert Kabashi - Co-Founder & Trainer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1 text-2xl font-black text-[#003399]">Albert Kabashi</h3>
                <p className="mb-4 font-semibold text-[#22C55E]">Co-Founder & Cheftrainer | UEFA A-Lizenz</p>
                <div className="space-y-3 text-gray-600">
                  <p>
                    Mit einer beeindruckenden Karriere als Nachwuchsspieler bei Dinamo Zagreb (Junioren),
                    Trešnjevka Zagreb, sowie bei verschiedenen Vereinen in Österreich wie Steyr, Micheldorf,
                    Lenzing, Gmunden und Vöcklabruck bringt Albert Kabashi jahrzehntelange Fußballerfahrung
                    mit auf den Platz.
                  </p>
                  <p>
                    Auch als Trainer gehört er zu den Erfolgreichsten in Oberösterreich: Mit Stationen u.a.
                    beim SV Gmunden, Vöcklabruck, Micheldorf, Stadl-Paura und Molln konnte er gleich
                    4 Meistertitel feiern, wurde 3x Herbstmeister in der OÖ Liga mit Gmunden, 1x mit
                    Stadlpaura und von der Krone zum Trainer des Jahres gewählt. Mit der UEFA A-Lizenz
                    ausgestattet, bringt er höchste fachliche Kompetenz mit.
                  </p>
                  <p>
                    Neben dem Fußball ist er seit über 20 Jahren als Sozialpädagoge beim Land OÖ tätig –
                    eine Kombination aus Herz, Erfahrung und Know-how, die ihn zu einem spitzen Coach machen.
                  </p>
                </div>
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
