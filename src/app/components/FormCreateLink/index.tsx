"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  CreateLinkSchemaType,
  createLinkSchemaResolver,
} from "./validations/zod/createLinkSchema";
import { toast } from "sonner";
import { generateWhatsappLink } from "@/utils/generateWhatsAppLink";
import { copyToCliboard } from "@/utils/copyToCliboard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import { useState } from "react";

export function FormCreateLink() {
  const [textMessage, setTextMessage] = useState<string>("");

  const { register, handleSubmit, reset } = useForm<CreateLinkSchemaType>({
    resolver: createLinkSchemaResolver,
  });
  const onSubmit = (data: CreateLinkSchemaType) => {
    const generatedLink = generateWhatsappLink({
      phone: data.phone,
      message: data?.textMessage,
    });

    copyToCliboard(generatedLink);

    toast.success("Link gerado com sucesso!", {
      action: {
        label: "Copiar",
        onClick: () => {
          copyToCliboard(generatedLink);
          toast.success("Link copiado para a área de transferência!");
        },
      },
    });

    setTextMessage(generatedLink);

    reset();
  };

  return (
    <>
      {!textMessage && (
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 dark mt-8 max-w-md text-muted-foreground"
        >
          <div className="space-y-3">
            <Label>Número de telefone *</Label>
            <Input {...register("phone")} placeholder="(00) 9999-9999" />
          </div>

          <div className="space-y-3">
            <Label>Sua mensagem (opcional)</Label>
            <Textarea
              {...register("textMessage")}
              placeholder="Use esse espaço para a mensagem inicial que será enviada pelo seu link de WhatsApp :)"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Gerar Link Grátis
            </Button>
          </div>
        </form>
      )}

      {textMessage && (
        <Card className="mt-8">
          <CardHeader>
            <span
              onClick={() => setTextMessage("")}
              className="underline text-muted-foreground cursor-pointer"
            >
              Quero Gerar outro link
            </span>
            <h2 className="text-white text-2xl font-bold">
              Seu link de WhatsApp foi gerado com sucesso!
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 lg:items-center lg:flex-row flex-col items-start">
              <Link size={44} />
              <div>
                <h2>Link Gerado com sucesso:</h2>
                <a
                  href={textMessage}
                  className="underline text-muted-foreground"
                >
                  {textMessage}
                </a>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button onClick={() => copyToCliboard(textMessage)}>
              Copiar Link
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
