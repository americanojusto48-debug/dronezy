import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number to Colombian Peso currency string.
 * Example: 129000 -> "$129.000 COP"
 */
export function formatCOP(amount: number | string): string {
  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) return "$0 COP";

  const formatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(numericAmount);

  return `${formatted} COP`;
}

/**
 * Calculates percentage discount between original and sale price
 */
export function calculateDiscount(originalPrice: number, salePrice: number): number {
  if (originalPrice <= salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}
