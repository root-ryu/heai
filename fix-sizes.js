const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'src', 'components');

const files = [
  'BookmarkPage.tsx',
  'CalendarPage.tsx',
  'ChatPage.tsx',
  'CommunityDetailPage.tsx',
  'CommunityPage.tsx',
  'CustomizePage.tsx',
  'FreeBoardPage.tsx',
  'MainPage.tsx',
  'MyPage.tsx',
  'NotificationsPage.tsx',
  'RankingPage.tsx',
  'RoutinePage.tsx',
  'SettingsPage.tsx',
  'SleepPage.tsx',
  'StepsPage.tsx',
  'WeightPage.tsx',
];

files.forEach((file) => {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/w-\[375px\] h-\[812px\]/g, 'w-full h-full');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${file}`);
  }
});

console.log('All files updated successfully!');
