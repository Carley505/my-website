/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  const gitHubRepo = process.env.GITHUB_REPOSITORY || '';
  repo = gitHubRepo.split('/')[1] || '';
}

// Ensure basePath matches repository name for GitHub Pages subpath
const basePath = repo ? `/${repo}` : (process.env.NEXT_PUBLIC_BASE_PATH || '');

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'behance.net',
      },
      {
        protocol: 'https',
        hostname: 'mir-s3-cdn-cf.behance.net',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
