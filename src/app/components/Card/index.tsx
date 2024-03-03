import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  text?: string;
  Icon: LucideIcon;
  children?: ReactNode;
}
export function Card({ text, Icon, children }: CardProps) {
  return (
    <div className="flex items-center gap-2 border p-4 rounded-md">
      <Icon size={24} className="text-white" />
      {text && <h3 className="text-muted-foreground text-md">{text}</h3>}
      {children}
    </div>
  );
}
