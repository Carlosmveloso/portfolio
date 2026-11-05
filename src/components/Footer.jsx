import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import Monograma from "./ui/Monograma";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t-2 border-linha py-10">
      <div className="conteudo text-texto-suave">
        <Monograma className="text-3xl" />
        <p className="mt-4">{t.footer.tagline}</p>
        <p className="mt-1">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
