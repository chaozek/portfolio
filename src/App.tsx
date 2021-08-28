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
import Header from './Layout/components/Header'
import HtmlToReact from './HWs/HW2/HtmlToReact'
import LandingPage from './Layout/LandingPage'
import NotFound from './Layout/NotFound'
import SinglePost from './HWs/HW6/Blog/SinglePost'
import StarterPage from './Layout/StarterPage'
import Todo from './HWs/HW4/Todo/TodoApp'
import styled from 'styled-components'

const store = createStore(allReducers)

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Header />
        <Spacer>
          <Component {...props} />
        </Spacer>
      </Layout>
    )}
  />
)
const HomeRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)
function App() {
  return (
    <>
      <Router>
        <CardsProvider>
          <BlogProvider>
            <ContextProvider>
              <Provider store={store}>
                <Switch>
                  <HomeRoute exact layout={HomeLayout} path='/' component={LandingPage} />
                  <AppRoute exact layout={Section} path='/third' component={Counter} />
                  <AppRoute exact layout={Section} path='/second' component={HtmlToReact} />
                  <AppRoute exact layout={Section} path='/hackertyper' component={HackerTyper} />
                  <AppRoute exact layout={Section} path='/todo' component={Todo} />
                  <AppRoute exact layout={Section} path='/redux' component={Redux} />
                  <AppRoute exact layout={Section} path='/tic-tac-toe' component={GameContainer} />
                  <AppRoute exact layout={Section} path='/blog' component={Blog} />
                  <AppRoute exact layout={Section} path='/new-article' component={BlogForm} />
                  <AppRoute exact layout={Section} path='/pexeso' component={CardStack} />
                  <AppRoute exact layout={Section} path='/chuck' component={Chuck} />
                  <AppRoute exact layout={Section} path='/landing' component={StarterPage} />
                  <AppRoute
                    layout={Section}
                    path='/article/:articleSlug'
                    component={props => <SinglePost {...props} />}
                  />
                  <AppRoute
                    exact
                    layout={Section}
                    path='/jokes/:category'
                    component={props => <SingleJoke {...props} />}
                  />
                  <AppRoute exact layout={Section} path='*' component={NotFound} />
                </Switch>
              </Provider>
            </ContextProvider>
          </BlogProvider>
        </CardsProvider>
      </Router>
      <GlobalStyles />
    </>
  )
}

export default App

export const Section = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 100%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 5px;
  min-height: 700px;
  background-position: 98% 100%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const HomeLayout = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: 0;
  background: white;
`
export const Spacer = styled.div`
  padding: 2rem 1rem;
`
const GlobalStyles = createGlobalStyle`

*{
  font-family: 'Roboto', sans-serif;

}

}
  body {
    background-color: #FBFBFB;
  a{

    text-decoration: none;
    color: #AACCFF;
    font-weight: bold;
    }
 a:hover{
   color: white;
 }
`
