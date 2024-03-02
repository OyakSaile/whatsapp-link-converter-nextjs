import { CircleUser } from "lucide-react";
import { FormCreateLink } from "./components/FormCreateLink";

export default function Home() {
  return (
    <main className="bg-primary grid grid-cols-2 min-h-screen">
      <div className="p-24">
        <h1 className="text-muted text-3xl max-w-md font-bold">
          Converta links para mensagem no whatsapp.
        </h1>
        <FormCreateLink />
      </div>

      <div className="bg-black p-24">
        <div className="flex items-center gap-2">
          <CircleUser className="text-white" />
          <h2 className="text-muted text-xl font-semibold">
            Converta seus links em mensagens, sem precisar salvar os contatos.
          </h2>
        </div>
      </div>
    </main>
  );
}
