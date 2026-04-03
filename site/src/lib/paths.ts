import path from 'path';
import fs from 'fs';

// Content is either symlinked (dev) or copied (build) into site/content/
const SITE_ROOT = path.resolve(/*turbopackIgnore: true*/ process.cwd());
export const CONTENT_DIR = path.join(SITE_ROOT, 'content');
export function safePath(base: string, ...segments: string[]): string | null {
  const resolved = path.resolve(base, ...segments);
  if (!resolved.startsWith(path.resolve(base))) return null;
  return resolved;
}

export function readFileIfExists(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

export function dirEntries(dirPath: string): fs.Dirent[] {
  try {
    // Use recursive: false to follow symlinks properly
    return fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }
}

/** Check if an entry is a directory, following symlinks */
export function isDir(dirPath: string, name: string): boolean {
  try {
    const stat = fs.statSync(path.join(dirPath, name));
    return stat.isDirectory();
  } catch {
    return false;
  }
}
