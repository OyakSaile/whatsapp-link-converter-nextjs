import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link as LucideLink } from "lucide-react";
import Link from "next/link";
export default function GeneratedLinks() {
  return (
    <main className="min-h-screen bg-primary flex justify-center items-center">
      <Card className="bg-primary">
        <CardHeader>
          <CardTitle className="text-muted">
            <div className="flex gap-2 items-center">
              <LucideLink />
              Link Gerado
            </div>
          </CardTitle>
          <CardDescription className="text-gray-400">
            <p>
              Prontinho, seu link foi gerado, agora é só copiar a url e usar
              como desejar.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <a
              className="text-gray-400 underline"
            >
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 items-center">
            <Button variant="secondary">Copiar link</Button>
            <Link href="/">
              <Button className="text-white border w-full">Gerar outro link</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
