#!/usr/bin/env node
/**
 * OG description cleanup — updates openGraph descriptions to match 
 * the primary meta description that was already updated
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { globSync } from 'fs';

const ROOT = resolve(import.meta.dirname, '..');

// For each page file, find the primary description and set OG description to match
function syncOGMetadata(filePath) {
  const full = resolve(ROOT, filePath);
  let content = readFileSync(full, 'utf-8');
  
  // Extract the metadata block's title
  const titleMatch = content.match(/export const metadata[^{]*\{[^}]*?title:\s*(?:"([^"]+)"|'([^']+)'|\n\s*"([^"]+)")/s);
  const primaryTitle = titleMatch ? (titleMatch[1] || titleMatch[2] || titleMatch[3]) : null;
  
  // Extract the metadata block's description
  const descMatch = content.match(/export const metadata[^{]*\{[^}]*?description:\s*(?:"([^"]+)"|'([^']+)'|\n\s*"([^"]+)")/s);
  const primaryDesc = descMatch ? (descMatch[1] || descMatch[2] || descMatch[3]) : null;
  
  if (!primaryTitle && !primaryDesc) return false;
  
  let changed = false;
  
  // Update OG title if it exists and differs from primary
  if (primaryTitle) {
    const ogTitleRegex = /(openGraph:\s*\{[^}]*?title:\s*)"([^"]+)"/s;
    const ogMatch = content.match(ogTitleRegex);
    if (ogMatch && ogMatch[2] !== primaryTitle) {
      content = content.replace(ogTitleRegex, `$1"${primaryTitle}"`);
      changed = true;
    }
  }
  
  // Update OG description  
  if (primaryDesc) {
    const ogDescRegex = /(openGraph:\s*\{[^}]*?description:\s*)"([^"]+)"/s;
    const ogDescMatch = content.match(ogDescRegex);
    if (ogDescMatch && ogDescMatch[2] !== primaryDesc) {
      content = content.replace(ogDescRegex, `$1"${primaryDesc}"`);
      changed = true;
    }
    
    // Also handle multiline OG descriptions
    const ogDescRegex2 = /(openGraph:\s*\{[^}]*?description:\s*)\n\s*"([^"]+)"/s;
    const ogDescMatch2 = content.match(ogDescRegex2);
    if (ogDescMatch2 && ogDescMatch2[2] !== primaryDesc) {
      content = content.replace(ogDescRegex2, `$1\n      "${primaryDesc}"`);
      changed = true;
    }
  }
  
  // Update Twitter title/desc too
  if (primaryTitle) {
    const twTitleRegex = /(twitter:\s*\{[^}]*?title:\s*)"([^"]+)"/s;
    const twMatch = content.match(twTitleRegex);
    if (twMatch && twMatch[2] !== primaryTitle) {
      content = content.replace(twTitleRegex, `$1"${primaryTitle}"`);
      changed = true;
    }
  }
  if (primaryDesc) {
    const twDescRegex = /(twitter:\s*\{[^}]*?description:\s*)"([^"]+)"/s;
    const twMatch = content.match(twDescRegex);
    if (twMatch && twMatch[2] !== primaryDesc) {
      content = content.replace(twDescRegex, `$1"${primaryDesc}"`);
      changed = true;
    }
  }
  
  if (changed) {
    writeFileSync(full, content, 'utf-8');
    console.log(`✅ OG synced: ${filePath}`);
  }
  return changed;
}

// Find all page.tsx files (excluding blog)
import { execSync } from 'child_process';
const files = execSync('find app -name "page.tsx" -not -path "*/blog/*" -not -path "*/components/*" -not -path "*\\[*"', { cwd: ROOT, encoding: 'utf-8' })
  .trim().split('\n').filter(Boolean);

let count = 0;
for (const f of files) {
  if (syncOGMetadata(f)) count++;
}
console.log(`\n✅ Synced OG metadata for ${count} files`);
