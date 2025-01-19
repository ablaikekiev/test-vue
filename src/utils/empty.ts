export function empty<T>(
  value: T | null | undefined,
): value is null | undefined {
  // false, null, undefined, 0, ''
  if (!value) return true;

  if (Array.isArray(value)) return value.length === 0;

  if (typeof value === 'object') return Object.keys(value).length === 0;

  return !value;
}

export function notEmpty<T>(value: T | null | undefined): value is T {
  return !empty(value);
}

export function firstNotEmpty<T>(...values: T[]): T | undefined {
  return values.find((value) => !empty(value));
}
