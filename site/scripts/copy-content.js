const fs = require('fs');
const path = require('path');

const SITE_DIR = path.resolve(__dirname, '..');
const REPO_DIR = path.resolve(SITE_DIR, '..');
const CONTENT_DIR = path.join(SITE_DIR, 'content');
const DOCS_SRC = path.join(REPO_DIR, 'company-gtm-docs');
const OUTPUT_SRC = path.join(REPO_DIR, 'demo-display', 'output');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean previous content
if (fs.existsSync(CONTENT_DIR)) {
  fs.rmSync(CONTENT_DIR, { recursive: true, force: true });
}

// In dev mode, create symlinks; in build mode, copy files
const isDev = process.argv.includes('--dev');

if (isDev) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  // Symlink company-gtm-docs
  if (fs.existsSync(DOCS_SRC)) {
    for (const entry of fs.readdirSync(DOCS_SRC, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        fs.symlinkSync(
          path.join(DOCS_SRC, entry.name),
          path.join(CONTENT_DIR, entry.name)
        );
      }
    }
  }
  // Symlink output dir
  if (fs.existsSync(OUTPUT_SRC)) {
    fs.symlinkSync(OUTPUT_SRC, path.join(CONTENT_DIR, 'output'));
  }
  console.log('Content symlinked for development.');
} else {
  // Copy everything
  copyDirRecursive(DOCS_SRC, CONTENT_DIR);
  if (fs.existsSync(OUTPUT_SRC)) {
    copyDirRecursive(OUTPUT_SRC, path.join(CONTENT_DIR, 'output'));
  }
  console.log('Content copied for build.');
}
