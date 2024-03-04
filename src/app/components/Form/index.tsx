import {
    CrownIcon
} from "lucide-react";
import { FormCreateLink } from "../FormCreateLink";

export function Form() {
  return (
    <div className="p-4 lg:p-24">
      <h1 className="text-white text-3xl max-w-md font-bold">
        <CrownIcon className="text-orange-500" /> Zappey
      </h1>
      <h2 className="text-muted-foreground text-sm">
        Seu gerador de links para whatsapp.
      </h2>
      <FormCreateLink />
    </div>
  );
}
