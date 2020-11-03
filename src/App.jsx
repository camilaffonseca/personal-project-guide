import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from 'routes/Home'
import PersonalProjectGuide from 'routes/project/PersonalProjectGuide'
import LearningPython from 'routes/project/LearningPython'
import JSHunt from 'routes/project/JSHunt'
import ReactFundamentals from 'routes/project/ReactFundamentals'
import Happy from 'routes/project/Happy'
import ToDos from 'routes/project/ToDos'
import LearningJS from 'routes/project/LearningJS'
import MooDevProjects from 'routes/project/MooDevProjects'
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
    { name: 'Home', to: '/' },
    { name: 'Personal Project Guide', to: '/project/personal-project-guide' },
    { name: 'Learning Python', to: '/project/learning-python' },
    { name: 'JSHunt', to: '/project/jshunt' },
    { name: 'React Fundamentals', to: '/project/react-fundamentals' },
    { name: 'Happy', to: '/project/happy' },
    { name: 'To-dos', to: '/project/to-dos' },
    { name: 'Learning JS', to: '/project/learning-js' },
    { name: 'MooDev Projects', to: '/project/moodev-projects' }
  ]

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle loadedFirstTime={loadedFirstTime} />
      <Router>
        <Navbar navLinks={navLinks}>
          <ToggleThemeButton currentTheme={currentTheme} toggleThemeCallback={toggleTheme} />
        </Navbar>
        <Switch>
          <Route exact path='/project/personal-project-guide' component={PersonalProjectGuide} />
          <Route exact path='/project/learning-python' component={LearningPython} />
          <Route exact path='/project/jshunt' component={JSHunt} />
          <Route exact path='/project/react-fundamentals' component={ReactFundamentals} />
          <Route exact path='/project/happy' component={Happy} />
          <Route exact path='/project/to-dos' component={ToDos} />
          <Route exact path='/project/learning-js' component={LearningJS} />
          <Route exact path='/project/moodev-projects' component={MooDevProjects} />
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
