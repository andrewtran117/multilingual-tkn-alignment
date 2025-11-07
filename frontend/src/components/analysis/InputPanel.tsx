'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { LANGUAGES, MODELS } from '@/lib/constants';

interface InputPanelProps {
  onAnalyze: (data: any) => void;
}

export function InputPanel({ onAnalyze }: InputPanelProps) {
  const [sourceText, setSourceText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [selectedModels, setSelectedModels] = useState<string[]>(['gpt-4', 'bert-base-multilingual-cased']);

  const languageOptions = LANGUAGES.map(lang => ({
    value: lang.code,
    label: `${lang.name}`,
  }));

  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/tokenize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: sourceText,
          models: selectedModels,
          language: sourceLang
        })
      });
      const data = await response.json();
      console.log('Tokenization results:', data);
      onAnalyze(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border border-gray-300 p-4">
      <div className="space-y-4">
        <div>
          <Textarea
            label="Text"
            placeholder="Enter text..."
            rows={4}
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          />
          <Select
            label="Language"
            options={languageOptions}
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Models
          </label>
          <div className="grid grid-cols-2 gap-2">
            {MODELS.map(model => (
              <label key={model.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedModels.includes(model.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedModels([...selectedModels, model.id]);
                    } else {
                      setSelectedModels(selectedModels.filter(m => m !== model.id));
                    }
                  }}
                  className="h-4 w-4"
                />
                <span className="text-sm text-gray-700">{model.name}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={!sourceText || selectedModels.length === 0}
          isLoading={isLoading}
        >
          Analyze
        </Button>
      </div>
    </div>
  );
}
