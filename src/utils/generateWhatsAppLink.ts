interface GenerateWhatsAppLinkProps {
  message: string;
  phone: string;
}
export const generateWhatsappLink = ({
  message,
  phone,
}: GenerateWhatsAppLinkProps) => {
  const baseWhatsAppUrl = "https://api.whatsapp.com/";

  return `${baseWhatsAppUrl}send?phone=${phone}&text=${encodeURIComponent(message)}`;
};
