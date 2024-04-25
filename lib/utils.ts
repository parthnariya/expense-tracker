import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPercentage(total: number, count: number): number {
  let result = 0;
  if (count > total) {
    result = 0;
  } else {
    result = Math.floor((count * 100) / total);
  }
  return result;
}
