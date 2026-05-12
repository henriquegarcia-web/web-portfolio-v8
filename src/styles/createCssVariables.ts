function isTokenRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function toCssVariableName(path: string[]) {
  return `--${path.join('-')}`;
}

export function createCssVariables(tokens: Record<string, unknown>, path: string[] = []): string {
  return Object.entries(tokens)
    .map(([key, value]) => {
      const nextPath = [...path, key];

      if (isTokenRecord(value)) {
        return createCssVariables(value, nextPath);
      }

      if (typeof value !== 'string' && typeof value !== 'number') {
        return '';
      }

      return `${toCssVariableName(nextPath)}: ${String(value)};`;
    })
    .filter(Boolean)
    .join('\n');
}
