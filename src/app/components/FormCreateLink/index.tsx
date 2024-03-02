import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function FormCreateLink() {
  return (
    <form action="" className="space-y-4 mt-8 max-w-md">
      <div>
        <Label className="text-muted">Número de telefone *</Label>
        <Input placeholder="(00) 9999-9999" />
      </div>

      <div>
        <Label className="text-muted">Sua mensagem (opcional)</Label>
        <Textarea placeholder="Use esse espaço para a mensagem inicial que será enviada pelo seu link de WhatsApp :)" />
      </div>

      <div>
        <Button className="w-full bg-transparent text-white" variant="outline">
          Gerar Link Grátis
        </Button>
      </div>
    </form>
  );
}
