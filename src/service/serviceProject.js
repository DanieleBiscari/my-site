const GITHUB_API_URL = 'https://api.github.com/user/repos';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function getGitHubRepos() {
    try {
      const response = await fetch(GITHUB_API_URL, {
        headers: {
          'Authorization': `token ${TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
  
      const repos = await response.json();
      return repos
    } catch (error) {
      console.error('Errore nella richiesta:', error.message);
    }
  }