import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'theme';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  const [isThemeLoading, setIsThemeLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_KEY);
        if (stored === 'light' || stored === 'dark') {
          setTheme(stored);
        }
      } finally {
        setIsThemeLoading(false);
      }
    })();
  }, []);

  const toggleTheme = async () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    await AsyncStorage.setItem(THEME_KEY, next);
  };

  return { theme, toggleTheme, isThemeLoading };
}
