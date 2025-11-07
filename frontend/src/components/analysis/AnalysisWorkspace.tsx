'use client';

import { useState } from 'react';
import { InputPanel } from './InputPanel';
import { TokenDisplay } from './TokenDisplay';
import { MetricsPanel } from './MetricsPanel';

export function AnalysisWorkspace() {
  const [analysisData, setAnalysisData] = useState<any>(null);

  return (
    <div className="space-y-6">
      <InputPanel onAnalyze={(data) => setAnalysisData(data)} />

      {analysisData && (
        <>
          <div className="border border-gray-300 p-4">
            <h3 className="text-lg font-semibold mb-4">Tokens</h3>
            <TokenDisplay data={analysisData} />
          </div>

          <div className="border border-gray-300 p-4">
            <h3 className="text-lg font-semibold mb-4">Metrics</h3>
            <MetricsPanel />
          </div>
        </>
      )}
    </div>
  );
}
