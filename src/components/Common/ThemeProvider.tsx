import { FC , useEffect, useState} from 'react'
import useThemeStore from '@/store/useThemeStore'
import styles from '/src/style/ThemeProvider.module.css'


interface ThemeProviderProps {
  children : React.ReactNode
}

const ThemeProvider : FC<ThemeProviderProps> = ({ children }) => {
  const { darkMode } = useThemeStore()
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
<div className={theme === 'dark' ? styles['dark-mode'] : styles['light-mode']}>
      {children}
    </div>
  );
}


export default ThemeProvider
