const fs = require('fs');

// Read original file
const original = fs.readFileSync(
  'app/src/components/CommunityDetailPage.tsx',
  'utf8'
);

// Character Page
let character = original
  .replace(
    'export default function CommunityDetailPage()',
    'export default function CharacterPage()'
  )
  .replace(
    'const [category, setCategory] = useState<string>(getInitialCategory);',
    "const category = 'character';"
  )
  .replace(
    "<CategoryTabs activeCategory={category || 'all'} />",
    '<CategoryTabs activeCategory="character" />'
  );

// Remove URL parameter logic
character = character.replace(
  /\/\/ URL에서 category 읽기 \(초기값\)[\s\S]*?return 'character';[\s\S]*?};[\s\S]*?\/\/ URL 변경 감지[\s\S]*?}, \[\]\);/,
  ''
);

// Remove unused functions
character = character.replace(
  /\/\/ Map English route to Korean display name[\s\S]*?};[\s\S]*?\/\/ Map Korean name to English route[\s\S]*?};/,
  ''
);

fs.writeFileSync('app/src/components/CharacterPage.tsx', character);
console.log('CharacterPage created');

// Routine Page
let routine = original
  .replace(
    'export default function CommunityDetailPage()',
    'export default function RoutineBoardPage()'
  )
  .replace(
    'const [category, setCategory] = useState<string>(getInitialCategory);',
    "const category = 'routine';"
  )
  .replace(
    "<CategoryTabs activeCategory={category || 'all'} />",
    '<CategoryTabs activeCategory="routine" />'
  );

routine = routine.replace(
  /\/\/ URL에서 category 읽기 \(초기값\)[\s\S]*?return 'character';[\s\S]*?};[\s\S]*?\/\/ URL 변경 감지[\s\S]*?}, \[\]\);/,
  ''
);

routine = routine.replace(
  /\/\/ Map English route to Korean display name[\s\S]*?};[\s\S]*?\/\/ Map Korean name to English route[\s\S]*?};/,
  ''
);

fs.writeFileSync('app/src/components/RoutineBoardPage.tsx', routine);
console.log('RoutineBoardPage created');

// Tips Page
let tips = original
  .replace(
    'export default function CommunityDetailPage()',
    'export default function TipsBoardPage()'
  )
  .replace(
    'const [category, setCategory] = useState<string>(getInitialCategory);',
    "const category = 'tips';"
  )
  .replace(
    "<CategoryTabs activeCategory={category || 'all'} />",
    '<CategoryTabs activeCategory="tips" />'
  );

tips = tips.replace(
  /\/\/ URL에서 category 읽기 \(초기값\)[\s\S]*?return 'character';[\s\S]*?};[\s\S]*?\/\/ URL 변경 감지[\s\S]*?}, \[\]\);/,
  ''
);

tips = tips.replace(
  /\/\/ Map English route to Korean display name[\s\S]*?};[\s\S]*?\/\/ Map Korean name to English route[\s\S]*?};/,
  ''
);

fs.writeFileSync('app/src/components/TipsBoardPage.tsx', tips);
console.log('TipsBoardPage created');
