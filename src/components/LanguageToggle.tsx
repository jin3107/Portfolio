import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
      aria-label="Switch language / Chuyển ngôn ngữ"
    >
      {lang === 'vi' ? 'VI' : 'EN'}
    </button>
  )
}
