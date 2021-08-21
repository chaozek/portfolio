import { CardStack } from './HWs/HW6/Pexeso/CardStack'
import { Chuck } from './HWs/HW7/ChuckNorris/ChuckMainPage'
import { Provider } from 'react-redux'
import { Redux } from './HWs/HW7/ReduxCounter/Redux'
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'
import { SingleJoke } from './HWs/HW7/ChuckNorris/SingleJoke'
import { allReducers } from './HWs/HW7/ReduxCounter/components/Counter.jsx'
import { createGlobalStyle } from 'styled-components'
import { createStore } from 'redux'
import Blog from './HWs/HW6/Blog/HomePage'
import BlogForm from './HWs/HW6/Blog/BlogForm'
import BlogProvider from './HWs/HW6/Blog/BlogContextProvider'
import CardsProvider from './HWs/HW6/Pexeso/ContextProvider'
import ContextProvider from './HWs/HW5/ContextAPI/ContextProvider'
import Counter from './HWs/HW3/Counter'
import GameContainer from './HWs/HW5/GameContainer'
import HackerTyper from './HWs/HW4/HackerTyper/HackerTyper'
import Header from './HWs/HW1/components/Header'
import HtmlToReact from './HWs/HW2/HtmlToReact.jsx'
import SinglePost from './HWs/HW6/Blog/SinglePost'
import StarterPage from './HWs/HW1/StarterPage'
import Todo from './HWs/HW4/Todo/TodoApp'
import styled from 'styled-components'
const store = createStore(allReducers)
function App() {
  return (
    <>
      <Section>
        <GlobalStyles />

        <CardsProvider>
          <BlogProvider>
            <ContextProvider>
              <Router>
                <Header />
                <Spacer>
                  <Switch>
                    <Route exact path='/second'>
                      <HtmlToReact />
                    </Route>
                    <Route path='/third'>
                      <Counter />
                    </Route>
                    <Route path='/hackertyper'>
                      <HackerTyper />
                    </Route>
                    <Route path='/todo'>
                      <Todo />
                    </Route>
                    <Route path='/tic-tac-toe'>
                      <GameContainer />
                    </Route>
                    <Route path='/blog'>
                      <Blog />
                    </Route>
                    <Route path='/new-article'>
                      <BlogForm />
                    </Route>
                    <Route
                      path='/article/:articleSlug'
                      render={props => <SinglePost {...props} />}
                    />
                    <Route path='/add-post'>
                      <BlogForm />
                    </Route>
                    <Route path='/pexeso'>
                      <CardStack />
                    </Route>
                    <Route path='/chuck'>
                      <Chuck />
                    </Route>
                    <Route exact path='/'>
                      <StarterPage />
                    </Route>
                    <Route path='/jokes/:category' render={props => <SingleJoke {...props} />} />
                    <Provider store={store}>
                      <Route path='/redux'>
                        <Redux />
                      </Route>
                    </Provider>
                  </Switch>
                </Spacer>
              </Router>
            </ContextProvider>
          </BlogProvider>
        </CardsProvider>
      </Section>
    </>
  )
}

export default App

export const Section = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 5px;
  min-height: 500px;
`
export const Spacer = styled.div`
  padding: 2rem 1rem;
`
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap');
  body {
    font-family: 'Oswald', sans-serif;
    background-color: #FBFBFB;
  }
  a{
    text-decoration: none;
    color: #AACCFF
  }
    
`
