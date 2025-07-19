import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import HeroImage from '../../public/hero-illustration.png'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">FreelanceCRM</h1>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" className="cursor-pointer">Login</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </header>


      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-neutral-800 leading-tight">
              Organize seus clientes e 
              <span className="text-blue-600"> projetos</span> de forma profissional
            </h2>
            <p className="text-xl text-muted-foreground">
              O CRM perfeito para freelancers e desenvolvedores que querem crescer 
              organizadamente. Gerencie clientes, propostas e histórico em uma ferramenta simples e elegante.
            </p>
            <div className="flex gap-4">
              <Link href="/login">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 cursor-pointer">
                  Começar Gratuitamente
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="cursor-pointer">
                Ver Demo
              </Button>
            </div>
          </div>
          <div className="relative" >
            <Image src={HeroImage} alt="Dashboard do FreelanceCRM" className="rounded-lg shadow-strong w-full"/>
          </div>
        </div>
      </section>
    </div>
  );
}
