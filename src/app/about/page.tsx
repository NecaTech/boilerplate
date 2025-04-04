import DefaultLayout from "../../components/layout/DefaultLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export const metadata = {
  title: "À propos | Next.js Boilerplate",
  description: "En savoir plus sur ce boilerplate Next.js",
};

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">À propos</h1>
          <p className="text-lg mb-6">
            Ce boilerplate a été créé pour faciliter le démarrage de nouveaux projets Next.js
            avec une structure organisée et des composants réutilisables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Caractéristiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Card.Header>
                <Card.Title>Structure organisée</Card.Title>
              </Card.Header>
              <Card.Content>
                <p>
                  Le projet est organisé en dossiers logiques pour faciliter la maintenance et l'évolutivité.
                  Les composants, hooks, utilitaires et styles sont séparés pour une meilleure organisation.
                </p>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Composants réutilisables</Card.Title>
              </Card.Header>
              <Card.Content>
                <p>
                  Des composants UI réutilisables sont inclus pour accélérer le développement.
                  Boutons, cartes, conteneurs et plus encore sont prêts à être utilisés.
                </p>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>TypeScript</Card.Title>
              </Card.Header>
              <Card.Content>
                <p>
                  TypeScript est configuré pour offrir un typage statique et une meilleure expérience de développement.
                  Des types communs sont inclus pour faciliter le développement.
                </p>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>TailwindCSS</Card.Title>
              </Card.Header>
              <Card.Content>
                <p>
                  TailwindCSS est intégré pour permettre de créer rapidement des interfaces utilisateur modernes.
                  Le mode sombre est également pris en charge.
                </p>
              </Card.Content>
            </Card>
          </div>
        </section>

        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="mb-6">
            Utilisez ce boilerplate pour démarrer rapidement votre prochain projet Next.js.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/" variant="primary">
              Retour à l'accueil
            </Button>
            <Button href="https://github.com/NecaTech/boilerplate" variant="secondary">
              Voir sur GitHub
            </Button>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
