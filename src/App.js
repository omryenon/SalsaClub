import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/about"
        element={
          <DetailPage
            title="אודות"
            imageSeed="about-page"
            text="כאן אפשר לכתוב על המורה, הדרך שלה, הניסיון, סגנון ההוראה והאווירה בשיעורים."
          />
        }
      />
      <Route
        path="/private-lessons"
        element={
          <DetailPage
            title="שיעורים פרטיים"
            imageSeed="private-lessons"
            text="כאן אפשר לפרט למי מתאימים שיעורים פרטיים, איך זה עובד, משך שיעור, מחיר ויתרונות."
          />
        }
      />
      <Route
        path="/group-lessons"
        element={
          <DetailPage
            title="שיעורים קבוצתיים"
            imageSeed="group-lessons"
            text="כאן אפשר לפרט על קבוצות, רמות, שעות, סגנונות מוזיקליים ואיך מצטרפים."
          />
        }
      />
      <Route
        path="/schedule"
        element={
          <DetailPage
            title="לו״ז ושעות"
            imageSeed="schedule-page"
            text="כאן אפשר להציג מערכת שעות, ימים קבועים, סטודיו, שיעורי ניסיון ואירועים מיוחדים."
          />
        }
      />
      <Route
        path="/contact"
        element={
          <DetailPage
            title="יצירת קשר"
            imageSeed="contact-page"
            text="כאן אפשר לשים טלפון, וואטסאפ, אינסטגרם, טופס יצירת קשר, כתובת ומפה."
          />
        }
      />
    </Routes>
  );
}
