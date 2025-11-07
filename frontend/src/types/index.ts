// ==================== Core Data Types ====================

export interface Token {
  id: string;
  text: string;
  tokenId: number;
  position: number;
  language: string;
  model: string;
  embedding?: number[];
}

export interface AlignmentResult {
  sourceToken: Token;
  targetToken: Token;
  similarity: number;
  alignmentType: 'exact' | 'partial' | 'fragmented';
  sourceIdx?: number;
  targetIdx?: number;
}

export interface FragmentationMetrics {
  fragmentationScore: number;
  clusterCohesion: number;
  overSegmentationRatio: number;
  tokenCountRatio: number;
  avgSimilarity: number;
  tokenCountSource: number;
  tokenCountTarget: number;
  semanticUnitCount: number;
}

// ==================== API Request Types ====================

export interface TokenizeRequest {
  text: string;
  models: string[];
  language: string;
}

export interface TokenizeResponse {
  results: Array<{
    model: string;
    tokens: string[];
    token_ids: number[];
    token_count: number;
  }>;
}

export interface EmbedRequest {
  text: string;
  model: string;
  layer?: number;
}

export interface EmbedResponse {
  embeddings: number[][];
  dimensions: number;
  token_count: number;
}

export interface AlignRequest {
  source_text: string;
  target_text: string;
  source_language: string;
  target_language: string;
  model: string;
  threshold?: number;
}

export interface AlignResponse {
  alignments: Array<{
    source_token: string;
    target_token: string;
    similarity: number;
    source_idx: number;
    target_idx: number;
  }>;
  similarity_matrix: number[][];
  source_tokens: string[];
  target_tokens: string[];
}

export interface MetricsRequest {
  source_text: string;
  target_text: string;
  source_language: string;
  target_language: string;
  models: string[];
}

export interface MetricsResponse {
  results: Array<{
    model: string;
    fragmentation_score: number;
    cluster_cohesion: number;
    over_segmentation_ratio: number;
    token_count_ratio: number;
    avg_similarity: number;
  }>;
}

export interface TranslateRequest {
  text: string;
  source_language: string;
  target_language: string;
  provider?: 'deepl' | 'google';
}

export interface TranslateResponse {
  translated_text: string;
  source_language: string;
  target_language: string;
  provider: string;
}

export interface BatchAnalyzeRequest {
  sentences: string[];
  source_language: string;
  target_language: string;
  models: string[];
}

// ==================== UI State Types ====================

export interface AnalysisState {
  sourceText: string;
  targetText: string;
  sourceLanguage: string;
  targetLanguage: string;
  selectedModels: string[];
  isLoading: boolean;
  error: string | null;
  results: AnalysisResults | null;
}

export interface AnalysisResults {
  tokenization: TokenizeResponse;
  alignment: AlignResponse;
  metrics: MetricsResponse;
  timestamp: string;
}

export interface VisualizationConfig {
  colorScheme: 'default' | 'colorblind' | 'monochrome';
  showLabels: boolean;
  highlightThreshold: number;
  dimensionReduction: 'umap' | 'tsne';
}

// ==================== Language and Model Types ====================

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  script: string;
  family: string;
}

export interface Model {
  id: string;
  name: string;
  provider: string;
  type: 'gpt' | 'bert' | 'claude' | 'gemini' | 'llama' | 'xlm';
  supportsEmbeddings: boolean;
  description: string;
}

// ==================== Session and Export Types ====================

export interface UserSession {
  session_id: string;
  user_id?: string;
  created_at: string;
  last_accessed: string;
}

export interface ExportConfig {
  format: 'json' | 'csv' | 'pdf';
  includeVisualizations: boolean;
  includeRawData: boolean;
}

// ==================== Visualization Data Types ====================

export interface EmbeddingPoint {
  x: number;
  y: number;
  z?: number;
  token: string;
  language: string;
  model: string;
  tokenId: number;
}

export interface ClusterData {
  id: number;
  centroid: number[];
  members: Token[];
  cohesion: number;
}

// ==================== Component Props Types ====================

export interface AlignmentGridProps {
  sourceTokens: Token[];
  targetTokens: Token[];
  similarityMatrix: number[][];
  alignments: AlignmentResult[];
  onTokenClick?: (sourceIdx: number, targetIdx: number) => void;
}

export interface EmbeddingVisualizationProps {
  embeddings: number[][];
  tokens: Token[];
  language: string;
  model: string;
  method: 'umap' | 'tsne';
  dimensions: 2 | 3;
}

export interface MetricsDashboardProps {
  metrics: FragmentationMetrics[];
  models: string[];
  languages: string[];
}

export interface TokenDisplayProps {
  tokens: Token[];
  language: string;
  model: string;
  highlightedIndices?: number[];
  onTokenClick?: (index: number) => void;
}

// ==================== Utility Types ====================

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type ComparisonMode = 'side-by-side' | 'overlay' | 'stacked';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  key: string;
  direction: SortDirection;
}
