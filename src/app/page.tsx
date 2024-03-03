import {
  CircleUser,
  Code2,
  CrownIcon,
  MessageCircle,
  SaveAll,
} from "lucide-react";
import { FormCreateLink } from "./components/FormCreateLink";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main className="grid dark bg-primary-foreground grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="p-4 lg:p-24">
        <h1 className="text-white text-3xl max-w-md font-bold">
          <CrownIcon className="text-orange-500" /> Zappey
        </h1>
        <h2 className="text-muted-foreground text-sm">
          Seu gerador de links para whatsapp.
        </h2>
        <FormCreateLink />
      </div>

      <div className="bg-black p-3 lg:p-24 dark space-y-4">
        <Card
          text="Converta seus links em mensagens, sem precisar salvar os contatos."
          Icon={CircleUser}
        />
        <Card text="Envie mensagens personalizadas" Icon={MessageCircle} />
        <Card
          text="Salve aquele contato de forma rápida para não esquecer"
          Icon={SaveAll}
        />
        <Card Icon={Code2}>
          <h3 className="text-muted-foreground text-md">
            Desenvolvido por{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.linkedin.com/in/kayoeliasgverdan/"
            >
              Kayo Elias
            </a>
          </h3>
        </Card>
      </div>
    </main>
  );
}
