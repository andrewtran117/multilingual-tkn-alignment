import axios, { AxiosInstance, AxiosError } from 'axios';
import { API_BASE_URL, ERROR_MESSAGES, UI_CONFIG } from '@/lib/constants';
import type {
  TokenizeRequest,
  TokenizeResponse,
  EmbedRequest,
  EmbedResponse,
  AlignRequest,
  AlignResponse,
  MetricsRequest,
  MetricsResponse,
  TranslateRequest,
  TranslateResponse,
  BatchAnalyzeRequest,
} from '@/types';

/**
 * API Client for backend communication
 */
class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = API_BASE_URL) {
    this.client = axios.create({
      baseURL,
      timeout: UI_CONFIG.requestTimeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add authentication token if available
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        return Promise.reject(this.handleError(error));
      }
    );
  }

  /**
   * Handle API errors
   */
  private handleError(error: AxiosError): Error {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const data = error.response.data as any;

      switch (status) {
        case 400:
          return new Error(data.message || ERROR_MESSAGES.INVALID_INPUT);
        case 404:
          return new Error(data.message || ERROR_MESSAGES.MODEL_NOT_FOUND);
        case 429:
          return new Error(ERROR_MESSAGES.RATE_LIMIT);
        case 500:
          return new Error(data.message || ERROR_MESSAGES.UNKNOWN);
        default:
          return new Error(data.message || ERROR_MESSAGES.UNKNOWN);
      }
    } else if (error.request) {
      // Request made but no response
      return new Error(ERROR_MESSAGES.NETWORK_ERROR);
    } else {
      // Something else happened
      return new Error(error.message || ERROR_MESSAGES.UNKNOWN);
    }
  }

  /**
   * Tokenize text using specified models
   */
  async tokenize(request: TokenizeRequest): Promise<TokenizeResponse> {
    const response = await this.client.post<TokenizeResponse>('/api/tokenize', request);
    return response.data;
  }

  /**
   * Extract embeddings for text
   */
  async embed(request: EmbedRequest): Promise<EmbedResponse> {
    const response = await this.client.post<EmbedResponse>('/api/embed', request);
    return response.data;
  }

  /**
   * Compute cross-lingual alignment
   */
  async align(request: AlignRequest): Promise<AlignResponse> {
    const response = await this.client.post<AlignResponse>('/api/align', request);
    return response.data;
  }

  /**
   * Calculate fragmentation metrics
   */
  async calculateMetrics(request: MetricsRequest): Promise<MetricsResponse> {
    const response = await this.client.post<MetricsResponse>('/api/metrics', request);
    return response.data;
  }

  /**
   * Translate text
   */
  async translate(request: TranslateRequest): Promise<TranslateResponse> {
    const response = await this.client.post<TranslateResponse>('/api/translate', request);
    return response.data;
  }

  /**
   * Batch analyze multiple sentences
   */
  async batchAnalyze(request: BatchAnalyzeRequest): Promise<any> {
    const response = await this.client.post('/api/batch-analyze', request);
    return response.data;
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<{ status: string }> {
    const response = await this.client.get('/health');
    return response.data;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
