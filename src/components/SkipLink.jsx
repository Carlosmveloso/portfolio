import { useLanguage } from "../hooks/useLanguage";

function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#conteudo"
      className="sr-only rounded-full bg-laranja px-5 py-2 font-bold text-sobre-laranja focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
    >
      {t.nav.skip}
    </a>
  );
}

export default SkipLink;
