import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFullDate(date: Date) {
  return format(date, "eeee',' e 'de' MMMM").replace(/(^\w{1})|(\s\w{1})/g, letter => letter.toUpperCase()).replace(' De ', ' de ')
}
