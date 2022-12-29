\\\\majaor changes on react router V6 from V5\\\\\

import BrowserRouter from "react-router-dom"
<BrowserRouter>
</BrowserRouter>

works like context provides all the routing features and custom routes services

<Routes>
 <Route path="/book" element={<Books/>}/>
 <Route path="/places" element={<Places/>}/>
</Routes>

specify the routes under Routes wrapper, when ever the url changes the route will render the element of that route with out calling ever route this will makes better performance and userexperience

handling navagation

can handle the navagation using the Link tag. normally we use the <a> in ordinary navigations.

 <nav>
  <ul>
    <li><Link to="/about">About</Link></li>
    <li><Link to="home">Home</Link></li>
  </ul>
 </nav>
 <Routes>
 <Route path="/about" element={<About/>}>
 <Route path="/home" element={<Home/>}>
 </Routes>

This is the ways to handle the navigation in the app. this ways the nav doesnot rerender but the routes are changes as the url changes.

Addvanced Routing Concepts
