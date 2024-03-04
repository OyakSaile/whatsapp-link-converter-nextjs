import { Form } from "./components/Form";
import { Informations } from "./components/Informations";

export default function Home() {
  return (
    <main className="grid dark bg-primary-foreground grid-cols-1 lg:grid-cols-2 min-h-screen">
      <Form />
      <Informations />
    </main>
  );
}
