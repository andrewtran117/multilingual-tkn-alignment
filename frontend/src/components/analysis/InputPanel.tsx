'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { LANGUAGES, MODELS } from '@/lib/constants';

interface InputPanelProps {
  onAnalyze: () => void;
}

export function InputPanel({ onAnalyze }: InputPanelProps) {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('th');
  const [selectedModels, setSelectedModels] = useState<string[]>(['gpt-4']);

  const languageOptions = LANGUAGES.map(lang => ({
    value: lang.code,
    label: `${lang.name}`,
  }));

  const handleAnalyze = () => {
    // API call will be implemented later
    onAnalyze();
  };

  return (
    <div className="border border-gray-300 p-4">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <Textarea
              label="Source Text"
              placeholder="Enter text..."
              rows={4}
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
            />
            <Select
              label="Source Language"
              options={languageOptions}
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Textarea
              label="Target Text"
              placeholder="Enter translation..."
              rows={4}
              value={targetText}
              onChange={(e) => setTargetText(e.target.value)}
            />
            <Select
              label="Target Language"
              options={languageOptions}
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Models
          </label>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {MODELS.slice(0, 6).map(model => (
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
        >
          Analyze
        </Button>
      </div>
    </div>
  );
}
