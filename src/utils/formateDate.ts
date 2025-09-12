/**
 * Formats a date using Intl.DateTimeFormat
 * @param date - Date object or date string
 * @param options - Intl.DateTimeFormat options (customize formatting)
 * @param locale - Locale string, defaults to "en-US"
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {},
  locale: string = "en-US"
): string {
  if (!date) return "";

  const parsedDate = date instanceof Date ? date : new Date(date);

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(parsedDate);
}
