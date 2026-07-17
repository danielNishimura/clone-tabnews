export const metadata = {
  title: "Meu Teste",
  description: "Criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
