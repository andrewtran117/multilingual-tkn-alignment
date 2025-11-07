'use client';

interface TokenDisplayProps {
  data: any;
}

export function TokenDisplay({ data }: TokenDisplayProps) {
  if (!data || !data.results || data.results.length === 0) {
    return <p className="text-gray-500">No tokens to display</p>;
  }

  return (
    <div className="space-y-4">
      {data.results.map((result: any, idx: number) => (
        <div key={idx}>
          <p className="mb-2 text-sm font-medium text-gray-700">{result.model}:</p>
          <div className="flex flex-wrap gap-2">
            {result.tokens.map((token: string, tokenIdx: number) => (
              <span
                key={tokenIdx}
                className="border border-gray-300 px-2 py-1 font-mono text-sm bg-gray-50"
                title={`ID: ${result.token_ids[tokenIdx]}`}
              >
                {token}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Token count: {result.token_count}
          </p>
        </div>
      ))}
    </div>
  );
}
