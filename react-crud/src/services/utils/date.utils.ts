export const getDateFormated = (date: Date | string, lang = "fr-FR", timeZone = 'Europe/Paris') => {
  return new Date(date).toLocaleDateString(lang, {
    timeZone,  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}
