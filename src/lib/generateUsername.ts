/**
 * Generates a random username from a person's name by appending 4 random digits.
 *
 * e.g. "Carter Cote" -> "cartercote4821"
 *
 * Call this when creating a new user to assign them a default username.
 */
export function generateUsername(name: string): string {
  const base = name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^a-z0-9]/g, "");

  const digits = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  return `${base || "user"}${digits}`;
}
