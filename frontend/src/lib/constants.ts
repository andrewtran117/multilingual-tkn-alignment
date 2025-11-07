import { Language, Model } from '@/types';

// ==================== API Configuration ====================

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  TOKENIZE: '/api/tokenize',
  EMBED: '/api/embed',
  ALIGN: '/api/align',
  METRICS: '/api/metrics',
  TRANSLATE: '/api/translate',
  BATCH_ANALYZE: '/api/batch-analyze',
} as const;

// ==================== Supported Languages ====================

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Germanic' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', script: 'Thai', family: 'Tai-Kadai' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', script: 'Han', family: 'Sino-Tibetan' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', script: 'Han/Hiragana/Katakana', family: 'Japonic' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', script: 'Hangul', family: 'Koreanic' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', family: 'Semitic' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Romance' },
  { code: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Romance' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Germanic' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Slavic' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'Devanagari', family: 'Indo-Aryan' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Romance' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', script: 'Latin', family: 'Austroasiatic' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Romance' },
];

// ==================== Supported Models ====================

export const MODELS: Model[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    type: 'gpt',
    supportsEmbeddings: false,
    description: 'OpenAI GPT-4 tokenizer (tiktoken)',
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    type: 'gpt',
    supportsEmbeddings: false,
    description: 'OpenAI GPT-3.5 tokenizer',
  },
  {
    id: 'bert-base-multilingual-cased',
    name: 'mBERT',
    provider: 'Google',
    type: 'bert',
    supportsEmbeddings: true,
    description: 'Multilingual BERT base model',
  },
  {
    id: 'xlm-roberta-base',
    name: 'XLM-RoBERTa',
    provider: 'Facebook',
    type: 'xlm',
    supportsEmbeddings: true,
    description: 'Cross-lingual RoBERTa base model',
  },
  {
    id: 'xlm-roberta-large',
    name: 'XLM-RoBERTa Large',
    provider: 'Facebook',
    type: 'xlm',
    supportsEmbeddings: true,
    description: 'Cross-lingual RoBERTa large model',
  },
  {
    id: 'sentence-transformers/paraphrase-multilingual-mpnet-base-v2',
    name: 'Multilingual MPNet',
    provider: 'Sentence Transformers',
    type: 'bert',
    supportsEmbeddings: true,
    description: 'Multilingual sentence transformer',
  },
];

// ==================== Visualization Settings ====================

export const VISUALIZATION_DEFAULTS = {
  colorScheme: {
    similarity: {
      low: '#ef4444',      // red-500
      mid: '#fbbf24',      // yellow-400
      high: '#22c55e',     // green-500
    },
    language: {
      source: '#0ea5e9',   // primary-500
      target: '#a855f7',   // secondary-500
    },
  },
  thresholds: {
    alignment: 0.5,
    highSimilarity: 0.75,
    lowSimilarity: 0.3,
  },
  dimensions: {
    default: 2,
    max: 3,
  },
} as const;

// ==================== Metrics Configuration ====================

export const METRICS_CONFIG = {
  fragmentationScore: {
    label: 'Fragmentation Score',
    description: 'Lower score indicates more fragmentation',
    min: 0,
    max: 1,
    goodThreshold: 0.7,
  },
  clusterCohesion: {
    label: 'Cluster Cohesion',
    description: 'Higher score indicates better cohesion',
    min: 0,
    max: 1,
    goodThreshold: 0.6,
  },
  overSegmentationRatio: {
    label: 'Over-segmentation Ratio',
    description: 'Ratio of tokens to semantic units',
    min: 1,
    max: 10,
    goodThreshold: 1.5,
  },
  tokenCountRatio: {
    label: 'Token Count Ratio',
    description: 'Source tokens / target tokens',
    min: 0,
    max: 5,
    goodThreshold: 1.2,
  },
} as const;

// ==================== Sample Data ====================

export const SAMPLE_TEXTS = {
  en: {
    short: 'Hello, world!',
    medium: 'The quick brown fox jumps over the lazy dog.',
    long: 'Natural language processing is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language.',
  },
  th: {
    short: 'สวัสดีชาวโลก',
    medium: 'สุนัขจิ้งจอกสีน้ำตาลที่รวดเร็วกระโดดข้ามสุนัขขี้เกียจ',
    long: 'การประมวลผลภาษาธรรมชาติเป็นสาขาหนึ่งของภาษาศาสตร์ วิทยาการคอมพิวเตอร์ และปัญญาประดิษฐ์ที่เกี่ยวข้องกับการโต้ตอบระหว่างคอมพิวเตอร์และภาษามนุษย์',
  },
} as const;

// ==================== UI Constants ====================

export const UI_CONFIG = {
  maxTextLength: 5000,
  maxBatchSize: 100,
  debounceDelay: 300,
  requestTimeout: 30000,
  cacheExpiry: 3600000, // 1 hour in ms
} as const;

// ==================== Export Formats ====================

export const EXPORT_FORMATS = [
  { value: 'json', label: 'JSON', extension: '.json' },
  { value: 'csv', label: 'CSV', extension: '.csv' },
  { value: 'pdf', label: 'PDF Report', extension: '.pdf' },
] as const;

// ==================== Error Messages ====================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Unable to connect to the server. Please check your connection.',
  INVALID_INPUT: 'Please provide valid input text.',
  MODEL_NOT_FOUND: 'The selected model is not available.',
  LANGUAGE_NOT_SUPPORTED: 'The selected language is not supported.',
  RATE_LIMIT: 'Too many requests. Please try again later.',
  UNKNOWN: 'An unexpected error occurred. Please try again.',
} as const;
