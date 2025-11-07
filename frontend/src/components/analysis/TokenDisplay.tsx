'use client';

export function TokenDisplay() {
  // Placeholder data - will be replaced with actual API data
  const mockTokens = [
    { text: 'Hello', id: 0 },
    { text: ',', id: 1 },
    { text: ' world', id: 2 },
    { text: '!', id: 3 },
  ];

  return (
    <div className="space-y-3">
      <div>
        <p className="mb-2 text-sm text-gray-600">Source Tokens (GPT-4):</p>
        <div className="flex flex-wrap gap-2">
          {mockTokens.map(token => (
            <span
              key={token.id}
              className="border border-gray-300 px-2 py-1 font-mono text-sm"
            >
              {token.text}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Count: {mockTokens.length}
        </p>
      </div>
    </div>
  );
}
