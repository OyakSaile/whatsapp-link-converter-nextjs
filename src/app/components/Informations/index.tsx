import { Card } from "../Card";
import { CircleUser, Code2, MessageCircle, SaveAll } from "lucide-react";

export const Informations = () => {
  return (
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
  );
};
