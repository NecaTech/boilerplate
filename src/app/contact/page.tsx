import DefaultLayout from "../../components/layout/DefaultLayout";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export const metadata = {
  title: "Contact | Next.js Boilerplate",
  description: "Contactez-nous pour plus d'informations sur ce boilerplate Next.js",
};

export default function ContactPage() {
  return (
    <DefaultLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        
        <Card className="mb-8">
          <Card.Content>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-black/[.1] dark:border-white/[.1] rounded-md bg-transparent"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-black/[.1] dark:border-white/[.1] rounded-md bg-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-black/[.1] dark:border-white/[.1] rounded-md bg-transparent"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" variant="primary" className="w-full">
                  Envoyer le message
                </Button>
              </div>
            </form>
          </Card.Content>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>Email</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="mb-2">Pour toute question ou information :</p>
              <a href="mailto:contact@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                contact@example.com
              </a>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Header>
              <Card.Title>GitHub</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="mb-2">Consultez le code source sur GitHub :</p>
              <a
                href="https://github.com/NecatTech/lab_1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                github.com/NecatTech/lab_1
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
