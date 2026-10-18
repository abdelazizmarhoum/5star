import { useState, useEffect, useCallback } from "react";
import type { MenuItem } from "@/data/menu";

export const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQr88Y4WJcUylx-yikVaiqoN7ywfZ78wfHfO5yrFTY-iBaFk-aYMOjifGwbp_0j6COQEmmfC8M6E_8y/pub?output=csv";

/**
 * Robust RFC 4180-compliant CSV parser:
 * - Accurately handles quoted strings containing commas and newlines
 * - Handles escaped double-quotes ("")
 * - Handles Windows (\r\n) and Unix (\n) line breaks
 */
export function parseCSV(csvText: string): Record<string, string>[] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentVal = "";
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentVal += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentVal.trim());
      currentVal = "";
    } else if ((char === "\r" || char === "\n") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++; // skip \n in \r\n
      }
      currentRow.push(currentVal.trim());
      currentVal = "";
      if (currentRow.some((col) => col.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentVal += char;
    }
  }

  if (currentVal.length > 0 || currentRow.length > 0) {
    currentRow.push(currentVal.trim());
    if (currentRow.some((col) => col.length > 0)) {
      rows.push(currentRow);
    }
  }

  if (rows.length < 2) return [];

  // Strip UTF-8 BOM if present, trim and normalize headers to lowercase
  const headers = rows[0].map((h) =>
    h.replace(/^\uFEFF/, "").trim().toLowerCase()
  );
  const dataRows = rows.slice(1);

  return dataRows.map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] !== undefined ? row[index] : "";
    });
    return obj;
  });
}

function parseBoolean(val?: string): boolean {
  if (!val) return false;
  return val.trim().toUpperCase() === "TRUE";
}

export function parseMenuItem(
  row: Record<string, string>,
  index: number
): MenuItem {
  const isAvailable = parseBoolean(row.is_available);
  const isPopular = parseBoolean(row.is_popular);
  const isSpicy = parseBoolean(row.is_spicy);
  const price = parseFloat(row.price) || 0;

  const titleAr = row.title_ar || row.name_ar || "";
  const titleFr = row.title_fr || row.name_fr || "";
  const descAr = row.description_ar || row.desc_ar || "";
  const descFr = row.description_fr || row.desc_fr || "";
  const imageUrl = row.image_url || row.image || "";

  return {
    id: row.id || `item-${index + 1}`,
    category: (row.category || "shawarma").toLowerCase().trim(),
    title_ar: titleAr,
    title_fr: titleFr,
    description_ar: descAr,
    description_fr: descFr,
    price,
    image_url: imageUrl,
    is_available: isAvailable,
    is_popular: isPopular,
    is_spicy: isSpicy,

    // Aliases for compatibility with Cart and existing components
    name_ar: titleAr,
    name_fr: titleFr,
    desc_ar: descAr,
    desc_fr: descFr,
    image: imageUrl,
    popular: isPopular,
    spicy: isSpicy,
  };
}

export interface UseMenuResult {
  items: MenuItem[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useMenu(): UseMenuResult {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMenu = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Append cache buster to guarantee fresh data on fetch/retry
      const url = `${GOOGLE_SHEET_CSV_URL}&_t=${Date.now()}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const csvText = await response.text();
      const rows = parseCSV(csvText);
      const parsedItems = rows.map((row, idx) => parseMenuItem(row, idx));

      setItems(parsedItems);
    } catch (err) {
      console.error("Failed to fetch menu from Google Sheets:", err);
      setError(err instanceof Error ? err.message : "Failed to load menu");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return { items, loading, error, refetch: fetchMenu };
}

export default useMenu;
