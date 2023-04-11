import logo from './logo.svg';
import './App.css';

import UserProfile from "./componets/UserProfile"

const UserDetails = [
  {
    uniqueKey: 1,
    name: "AdiLakshmi",
    imageUrl: "https://techgrit.atlassian.net/s/1abpwv/b/8/14e09ee48c8984f9fea880b2dded2633/_/jira-logo-scaled.png",
    role: "Software Developer"
  },
  {
    uniqueKey: 2,
    name: "Bonala",
    imageUrl: "https://techgrit.atlassian.net/s/1abpwv/b/8/14e09ee48c8984f9fea880b2dded2633/_/jira-logo-scaled.png",
    role: "Software Developer"
  }
]

const App = () => (
  <ul>
    {UserDetails.map((eachItem => (
      <UserProfile UserDetails={eachItem} key={eachItem.uniqueKey}/>
    )))}
  </ul>
)
export default App;
