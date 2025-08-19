"use client";

// Declarar para o TypeScript reconhecer a função
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(
        "https://api.whatsapp.com/send/?phone=5511977367924&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos+de+seguro+sa%C3%BAde.&type=phone_number&app_absent=0"
      );
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "#fff",
        padding: "15px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      WhatsApp
    </a>
  );
}
