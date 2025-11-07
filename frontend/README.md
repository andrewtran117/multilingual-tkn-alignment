# Multilingual Token Alignment - Frontend

A Next.js frontend application for analyzing and visualizing token alignment and semantic fragmentation across languages and models.

## Features

- 🔍 Multi-model tokenization comparison (GPT, BERT, Claude, Gemini, LLaMA)
- 🌍 Support for 15+ languages
- 📊 Interactive visualizations with D3.js and Plotly.js
- 📈 Detailed fragmentation and efficiency metrics
- 💾 Export functionality for research purposes

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Visualizations**: D3.js, Plotly.js
- **API Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Set up environment variables:

Copy `.env.local` and update the API base URL if needed:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will auto-reload when you make changes.

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── analysis/          # Analysis workspace page
│   │   └── compare/           # Model comparison page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── analysis/         # Analysis-specific components
│   │   ├── comparison/       # Comparison components
│   │   ├── visualizations/   # D3.js & Plotly components
│   │   └── layout/           # Layout components
│   ├── lib/                   # Utility functions and API client
│   │   ├── api/              # API client
│   │   ├── utils/            # Helper functions
│   │   └── constants.ts      # App constants
│   ├── types/                 # TypeScript type definitions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Key Components

### Pages

- **Home (`/`)**: Landing page with quick start
- **Analysis (`/analysis`)**: Full workspace for token analysis
- **Compare (`/compare`)**: Side-by-side model comparison

### Core Components

- **InputPanel**: Text input and configuration
- **TokenDisplay**: Visual token representation
- **MetricsPanel**: Fragmentation metrics display
- **AlignmentGrid**: D3.js heatmap visualization (TODO)
- **EmbeddingVisualization**: Plotly.js scatter plot (TODO)

## API Integration

The frontend communicates with the FastAPI backend through the API client in `src/lib/api/client.ts`.

### Available Endpoints

- `POST /api/tokenize` - Tokenize text
- `POST /api/embed` - Extract embeddings
- `POST /api/align` - Compute alignment
- `POST /api/metrics` - Calculate metrics
- `POST /api/translate` - Translate text
- `POST /api/batch-analyze` - Batch analysis

## Next Steps

### Implementation TODOs

1. **Visualization Components**
   - Implement D3.js alignment grid heatmap
   - Implement Plotly.js embedding visualization
   - Add UMAP/t-SNE dimensionality reduction

2. **API Integration**
   - Connect InputPanel to backend API
   - Implement React Query hooks for data fetching
   - Add error handling and loading states

3. **Features**
   - Export functionality (JSON, CSV, PDF)
   - Batch analysis interface
   - User session management
   - Model comparison charts

4. **Optimization**
   - Add request caching
   - Implement virtual scrolling for large datasets
   - Optimize bundle size

## Contributing

This is a research project. See the main README for contribution guidelines.

## License

See the main project LICENSE file.
