import {
  CircleUser,
  Code2,
  CrownIcon,
  MessageCircle,
  Save,
} from "lucide-react";
import { FormCreateLink } from "./components/FormCreateLink";

export default function Home() {
  return (
    <main className="grid dark bg-primary-foreground grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="p-12 lg:p-24">
        <h1 className="text-white text-3xl max-w-md font-bold">
          <CrownIcon className="text-orange-500" /> Zappey
        </h1>
        <h2 className="text-muted-foreground text-sm">
          Seu gerador de links para whatsapp.
        </h2>
        <FormCreateLink />
      </div>

      <div className="bg-black p-3 lg:p-24 dark space-y-4">
        <div className="flex items-center gap-2 border p-4 rounded-md">
          <CircleUser size={24} className="text-white" />
          <h3 className="text-muted-foreground text-md">
            Converta seus links em mensagens, sem precisar salvar os contatos.
          </h3>
        </div>

        <div className="flex items-center gap-2 border p-4 rounded-md">
          <MessageCircle size={24} className="text-white" />
          <h3 className="text-muted-foreground text-md">
            Envie mensagens personalizadas
          </h3>
        </div>

        <div className="flex items-center gap-2 border p-4 rounded-md">
          <Save size={24} className="text-white" />
          <h3 className="text-muted-foreground text-md">
            Salve aquele contato de forma rápida para não esquecer
          </h3>
        </div>

        <div className="flex items-center gap-2 border p-4 rounded-md">
          <Code2 size={24} className="text-white" />
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
        </div>
      </div>
    </main>
  );
}
