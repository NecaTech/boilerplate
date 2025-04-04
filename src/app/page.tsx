import Image from "next/image";
import DefaultLayout from "../components/layout/DefaultLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="space-y-12">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Next.js Boilerplate</h1>
          <p className="text-xl mb-8">Un point de départ moderne pour vos projets Next.js</p>
          <div className="flex justify-center gap-4">
            <Button href="https://github.com/NecaTech/boilerplate" variant="primary" size="lg">
              Voir sur GitHub
            </Button>
            <Button href="/docs" variant="secondary" size="lg">
              Documentation
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>Composants réutilisables</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>Ce boilerplate inclut des composants UI réutilisables pour accélérer votre développement.</p>
            </Card.Content>
            <Card.Footer>
              <Button href="/components" variant="secondary" size="sm">
                Explorer les composants
              </Button>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>TypeScript</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>TypeScript est configuré pour vous offrir un typage statique et une meilleure expérience de développement.</p>
            </Card.Content>
            <Card.Footer>
              <Button href="/typescript" variant="secondary" size="sm">
                En savoir plus
              </Button>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>TailwindCSS</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>TailwindCSS est intégré pour vous permettre de créer rapidement des interfaces utilisateur modernes.</p>
            </Card.Content>
            <Card.Footer>
              <Button href="/tailwind" variant="secondary" size="sm">
                Voir les exemples
              </Button>
            </Card.Footer>
          </Card>
        </section>

        <section className="bg-black/[.03] dark:bg-white/[.03] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Démarrage rapide</h2>
          <div className="font-mono bg-black/[.05] dark:bg-white/[.05] p-4 rounded">
            <p className="mb-2">1. Clonez le dépôt</p>
            <p className="mb-2">2. Installez les dépendances avec <code className="bg-black/[.1] dark:bg-white/[.1] px-1 rounded">npm install</code></p>
            <p className="mb-2">3. Démarrez le serveur avec <code className="bg-black/[.1] dark:bg-white/[.1] px-1 rounded">npm run dev</code></p>
            <p>4. Ouvrez <a href="http://localhost:3000" className="text-blue-600 dark:text-blue-400 hover:underline">http://localhost:3000</a> dans votre navigateur</p>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="text-center">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              className="mx-auto mb-4 dark:invert"
              priority
            />
            <p>Propulsé par Next.js 15</p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
