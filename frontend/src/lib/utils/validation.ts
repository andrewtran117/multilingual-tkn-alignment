import { UI_CONFIG } from '@/lib/constants';

/**
 * Validate text input
 */
export function validateText(text: string): { valid: boolean; error?: string } {
  if (!text || text.trim().length === 0) {
    return { valid: false, error: 'Text cannot be empty' };
  }

  if (text.length > UI_CONFIG.maxTextLength) {
    return {
      valid: false,
      error: `Text exceeds maximum length of ${UI_CONFIG.maxTextLength} characters`,
    };
  }

  return { valid: true };
}

/**
 * Validate language code
 */
export function validateLanguageCode(code: string): boolean {
  return /^[a-z]{2}(-[A-Z]{2})?$/.test(code);
}

/**
 * Validate model selection
 */
export function validateModelSelection(models: string[]): { valid: boolean; error?: string } {
  if (!models || models.length === 0) {
    return { valid: false, error: 'Please select at least one model' };
  }

  if (models.length > 5) {
    return { valid: false, error: 'Maximum 5 models can be selected at once' };
  }

  return { valid: true };
}

/**
 * Check if string is valid JSON
 */
export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
