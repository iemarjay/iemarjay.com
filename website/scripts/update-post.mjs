import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  const slug = 'how-a-10k-bug-taught-me-to-build-ai-security-audits';

  // Read the markdown file
  const contentPath = join(__dirname, '../../content/blog/how-a-10k-bug-taught-me-to-build-ai-security-audits.md');
  const content = readFileSync(contentPath, 'utf-8');

  // Extract title (first line after #)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : 'How a $10k Bug Taught Me to Build an AI Security Audit System';

  // Remove title from content body
  const contentWithoutTitle = content.replace(/^#\s+.+\n\n/, '');

  // Extract excerpt (first paragraph after title)
  const excerptMatch = content.match(/^#.+\n\n(.+?)(?:\n\n|$)/s);
  const excerpt = excerptMatch
    ? excerptMatch[1].trim()
    : 'A vulnerability I missed cost my client nearly $10,000. That failure drove me to build something better.';

  const result = await prisma.post.upsert({
    where: { slug },
    update: {
      title,
      content: contentWithoutTitle,
      excerpt,
      updated_at: new Date(),
    },
    create: {
      slug,
      title,
      content: contentWithoutTitle,
      excerpt,
      author: 'Joseph Emmanuel (iemarjay)',
      published_at: new Date(),
    },
  });

  console.log('Post updated:', result.slug);
  console.log('Title:', result.title);
  console.log('Excerpt:', result.excerpt.substring(0, 100) + '...');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
