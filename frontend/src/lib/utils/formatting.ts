/**
 * Format a number to a fixed number of decimal places
 */
export function formatNumber(value: number, decimals: number = 2): string {
  return value.toFixed(decimals);
}

/**
 * Format a percentage value
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Truncate text to a maximum length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Get color based on similarity value
 */
export function getSimilarityColor(similarity: number): string {
  if (similarity >= 0.75) return '#22c55e'; // green
  if (similarity >= 0.5) return '#fbbf24';  // yellow
  return '#ef4444'; // red
}

/**
 * Calculate metric quality (good, moderate, poor)
 */
export function getMetricQuality(
  value: number,
  threshold: number,
  higherIsBetter: boolean = true
): 'good' | 'moderate' | 'poor' {
  const isGood = higherIsBetter ? value >= threshold : value <= threshold;
  const isBorderline = Math.abs(value - threshold) < threshold * 0.2;

  if (isGood) return 'good';
  if (isBorderline) return 'moderate';
  return 'poor';
}
