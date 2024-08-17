const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}

function getErrorType(error: ERROR_TYPES): string {
  switch (error) {
    case ERROR_TYPES.NOT_FOUND:
      return 'Not found';
    case ERROR_TYPES.UNAUTHORIZED:
      return 'Unauthorized';
    case ERROR_TYPES.FORBIDDEN:
      return 'Forbidden';
    default:
      return 'Unknown error';
  }
}

// Assertions types
const canvas = document.querySelector('canvas');

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
}

// Fetching data in TypeScript with Assertions types
import { GitHubAPIResponse } from './types';

const API_URL = 'https://api.github.com/search/repositories?q=sebasclz';

async function getRepositories() {
  const response = await fetch(API_URL);
  const data = (await response.json()) as GitHubAPIResponse;
  return data.items.map((item) => {
    console.log(item);
  });
}

getRepositories();
