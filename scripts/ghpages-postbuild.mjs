// GitHub Pages 預覽部署用：把 dist/ 內的站內絕對路徑加上 repo 子路徑前綴。
// 正式站部署於網域根目錄時不需要此步驟——原始碼保持根路徑寫法。
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.env.PAGES_BASE; // 例如 "/ubi-taiwan-website"
if (!BASE) {
  console.log('PAGES_BASE 未設定，略過路徑改寫');
  process.exit(0);
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|xml|txt)$/.test(name)) rewrite(p);
  }
}

function rewrite(file) {
  let s = readFileSync(file, 'utf8');
  // href="/..." 與 src="/..."（排除 //、http、已含前綴者）
  s = s.replaceAll(/(href|src)="\/(?!\/)/g, `$1="${BASE}/`);
  // meta refresh 的 content="0; url=/..."（轉址頁用，不走 href/src）
  s = s.replaceAll(/(content="\d+;\s*url=)\/(?!\/)/g, `$1${BASE}/`);
  // canonical 與 og 標籤維持 ubitaiwan.org 絕對網址，不受影響
  writeFileSync(file, s);
}

walk('dist');
console.log('已將站內路徑加上前綴:', BASE);
