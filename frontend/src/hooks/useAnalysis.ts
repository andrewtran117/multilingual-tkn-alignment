import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import type {
  TokenizeRequest,
  AlignRequest,
  MetricsRequest,
  TranslateRequest,
} from '@/types';

/**
 * Hook for tokenization
 */
export function useTokenize() {
  return useMutation({
    mutationFn: (request: TokenizeRequest) => apiClient.tokenize(request),
  });
}

/**
 * Hook for alignment computation
 */
export function useAlign() {
  return useMutation({
    mutationFn: (request: AlignRequest) => apiClient.align(request),
  });
}

/**
 * Hook for metrics calculation
 */
export function useMetrics() {
  return useMutation({
    mutationFn: (request: MetricsRequest) => apiClient.calculateMetrics(request),
  });
}

/**
 * Hook for translation
 */
export function useTranslate() {
  return useMutation({
    mutationFn: (request: TranslateRequest) => apiClient.translate(request),
  });
}

/**
 * Hook for health check
 */
export function useHealthCheck() {
  return useQuery({
    queryKey: ['health'],
    queryFn: () => apiClient.healthCheck(),
    refetchInterval: 30000, // Check every 30 seconds
  });
}
