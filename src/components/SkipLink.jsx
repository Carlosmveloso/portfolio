import { useLanguage } from "../hooks/useLanguage";

function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#conteudo"
      className="sr-only rounded-full bg-laranja font-bold text-sobre-laranja focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-5 focus:py-2"
    >
      {t.nav.skip}
    </a>
  );
}

export default SkipLink;
