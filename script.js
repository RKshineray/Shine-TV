// Número de WhatsApp da Shine TV (formato internacional, sem +, espaços ou traços)
const WHATSAPP_NUMBER = "5521996345056";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Shine TV e gostaria de fazer o teste IPTV grátis e consultar os valores.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappUrl;
});
document.getElementById("year").textContent = new Date().getFullYear();
