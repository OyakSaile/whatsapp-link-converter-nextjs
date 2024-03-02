interface GenerateWhatsAppLinkProps {
  message: string;
  phone: string;
}
export const generateWhatsappLink = ({
  message,
  phone,
}: GenerateWhatsAppLinkProps): string => {
  const baseWhatsAppUrl = "https://api.whatsapp.com/";

  const hasMessage = message ? `&text=${encodeURIComponent(message)}` : "";
  return `${baseWhatsAppUrl}send?phone=55${phone}${hasMessage}`;
};
