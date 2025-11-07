'use client';

export function MetricsPanel() {
  // Placeholder data
  const mockMetrics = {
    fragmentationScore: 0.78,
    clusterCohesion: 0.82,
    overSegmentationRatio: 1.3,
    tokenCountRatio: 1.25,
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-700">Fragmentation Score:</span>
        <span className="font-mono">{mockMetrics.fragmentationScore.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-700">Cluster Cohesion:</span>
        <span className="font-mono">{mockMetrics.clusterCohesion.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-700">Segmentation Ratio:</span>
        <span className="font-mono">{mockMetrics.overSegmentationRatio.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-700">Token Count Ratio:</span>
        <span className="font-mono">{mockMetrics.tokenCountRatio.toFixed(2)}</span>
      </div>
    </div>
  );
}
