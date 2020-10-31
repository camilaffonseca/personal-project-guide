import React from 'react'
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

import GlobalStyle from 'styles'

import { darkTheme, lightTheme } from 'theme'

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/project/personal-project-guide' component={PersonalProjectGuide} />
        <Route exact path='/project/learning-python' component={LearningPython} />
        <Route exact path='/project/jshunt' component={JSHunt} />
        <Route exact path='/project/react-fundamentals' component={ReactFundamentals} />
        <Route exact path='/project/happy' component={Happy} />
        <Route exact path='/project/to-dos' component={ToDos} />
        <Route exact path='/project/learning-js' component={LearningJS} />
        <Route exact path='/project/moodev-projects' component={MooDevProjects} />

        <Redirect to='/' />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App
