import { Helmet } from 'react-helmet'

import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from 'routes/Home'
import PersonalProjectGuide from 'routes/project/PersonalProjectGuide'
import LearningPython from 'routes/project/LearningPython'
import JSHunt from 'routes/project/JSHunt'
import ReactFundamentals from 'routes/project/ReactFundamentals'
// import Happy from 'routes/project/Happy'
import ToDos from 'routes/project/ToDos'
import LearningJS from 'routes/project/LearningJS'
import MooDevProjects from 'routes/project/MooDevProjects'
import TheEnd from 'routes/TheEnd'

import ToggleThemeButton from 'components/ToggleThemeButton'
import Navbar from 'components/Navbar'

import GlobalStyle from 'styles'

import { darkTheme, lightTheme } from 'theme'

let loadedFirstTime = false

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('currentActiveTheme') || 'light')

  const toggleTheme = () => {
    loadedFirstTime = true
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(newTheme)
    localStorage.setItem('currentActiveTheme', newTheme)
  }

  const navLinks = [
    {
      name: 'Home',
      to: '/',
      component: Home
    },
    {
      name: 'Personal Project Guide',
      to: '/project/personal-project-guide',
      component: PersonalProjectGuide
    },
    {
      name: 'Learning Python',
      to: '/project/learning-python',
      component: LearningPython
    },
    {
      name: 'JSHunt',
      to: '/project/jshunt',
      component: JSHunt
    },
    {
      name: 'React Fundamentals',
      to: '/project/react-fundamentals',
      component: ReactFundamentals
    },
    // {
    //   name: 'Happy',
    //   to: '/project/happy',
    //   component: Happy
    // },
    {
      name: 'To-dos',
      to: '/project/to-dos',
      component: ToDos
    },
    {
      name: 'Learning JS',
      to: '/project/learning-js',
      component: LearningJS
    },
    {
      name: 'MooDev Projects',
      to: '/project/moodev-projects',
      component: MooDevProjects
    }
  ]

  navLinks.push({ name: 'The End', to: '/the-end', component: TheEnd })

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <Helmet titleTemplate='Guia de Projetos | %s'>
        {currentTheme === 'dark' ? (
          <meta name='theme-color' content='#1B1D23' />
        ) : (
          <meta name='theme-color' content='#fafbfc' />
        )}
      </Helmet>
      <GlobalStyle loadedFirstTime={loadedFirstTime} />
      <Router>
        <Navbar navLinks={navLinks} currentTheme={currentTheme}>
          <ToggleThemeButton currentTheme={currentTheme} toggleThemeCallback={toggleTheme} />
        </Navbar>
        <Switch>
          {navLinks.map(route => (
            <Route key={route.to} exact path={route.to} component={route.component} />
          ))}
          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
