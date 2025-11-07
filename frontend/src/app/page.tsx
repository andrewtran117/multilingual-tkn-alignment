import { AnalysisWorkspace } from '@/components/analysis/AnalysisWorkspace';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Token Alignment Analysis</h1>
      <AnalysisWorkspace />
    </div>
  );
}
