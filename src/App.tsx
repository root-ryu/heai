import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import RoutinePage from './components/RoutinePage';
import WeightPage from './components/WeightPage';
import SleepPage from './components/SleepPage';
import StepsPage from './components/StepsPage';
import CommunityPage from './components/CommunityPage';
import CommunityDetailPage from './components/CommunityDetailPage';
import FreeBoardPage from './components/FreeBoardPage';
import CommunityWritePage from './pages/CommunityWritePage';
import CalendarPage from './components/CalendarPage';
import NotificationsPage from './components/NotificationsPage';
import ChatPage from './components/ChatPage';
import CustomizePage from './components/CustomizePage';
import MyPage from './components/MyPage';
import BookmarkPage from './components/BookmarkPage';
import SettingsPage from './components/SettingsPage';
import RankingPage from './components/RankingPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] relative">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/routine" element={<RoutinePage />} />
            <Route path="/weight" element={<WeightPage />} />
            <Route path="/sleep" element={<SleepPage />} />
            <Route path="/steps" element={<StepsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/free" element={<FreeBoardPage />} />
            <Route path="/community/write" element={<CommunityWritePage />} />
            <Route path="/community/:category" element={<CommunityDetailPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/customize" element={<CustomizePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/bookmarks" element={<BookmarkPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/ranking" element={<RankingPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}