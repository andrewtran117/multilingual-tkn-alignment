'use client';

import { useEffect, useRef } from 'react';
import type { AlignmentGridProps } from '@/types';

/**
 * Alignment Grid Visualization Component
 * Uses D3.js for interactive heatmap visualization
 *
 * TODO: Implement D3.js heatmap with:
 * - Similarity matrix visualization
 * - Hover tooltips showing token pairs and similarity scores
 * - Click interaction for detailed alignment view
 * - Color gradient from red (low) to green (high similarity)
 */
export function AlignmentGrid({
  sourceTokens,
  targetTokens,
  similarityMatrix,
  alignments,
  onTokenClick,
}: AlignmentGridProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // D3.js visualization will be implemented here
    // This is a placeholder for the actual implementation
  }, [sourceTokens, targetTokens, similarityMatrix, alignments]);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        className="w-full"
        style={{ minHeight: '400px' }}
      />
      <div className="mt-4 text-center text-sm text-gray-500">
        Alignment grid visualization (D3.js implementation pending)
      </div>
    </div>
  );
}
