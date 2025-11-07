from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import tiktoken
from transformers import AutoTokenizer

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TokenizeRequest(BaseModel):
    text: str
    models: List[str]
    language: str

@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.post("/api/tokenize")
async def tokenize(request: TokenizeRequest):
    results = []

    for model in request.models:
        try:
            # GPT models using tiktoken
            if model.startswith("gpt"):
                enc = tiktoken.encoding_for_model(model)
                token_ids = enc.encode(request.text)
                tokens = [enc.decode([tid]) for tid in token_ids]

                results.append({
                    "model": model,
                    "tokens": tokens,
                    "token_ids": token_ids,
                    "token_count": len(tokens)
                })

            # mBERT using transformers
            elif model == "bert-base-multilingual-cased":
                tokenizer = AutoTokenizer.from_pretrained(model)
                encoded = tokenizer(request.text, return_offsets_mapping=False)
                token_ids = encoded['input_ids']
                tokens = tokenizer.convert_ids_to_tokens(token_ids)

                results.append({
                    "model": model,
                    "tokens": tokens,
                    "token_ids": token_ids,
                    "token_count": len(tokens)
                })

        except Exception as e:
            results.append({
                "model": model,
                "error": str(e)
            })

    return {"results": results}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
