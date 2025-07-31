export function detectLangFromURL(pathname) {
    const langSegment = pathname.split("/")[1]; // Assumes language is the first segment, e.g., /en/ or /ar/
    return ["en", "ar"].includes(langSegment) ? langSegment : "en"; // Default to English if no valid lang
  }