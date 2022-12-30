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

1. dynamic routing
   <Routes>
   <Route path="/book" element={<Book/>}/>
   <Route path="/book/outStock" element={<BookOutStock/>}/>
   <Route path="/book/:id" element={<Books/>}/>
   </Routes>

here the routing can be anythings /books/anythings or /books/1 or /books/djskafjasd
use params from the url parameters to get the url.
cosnt path =useParams();

2. routing priority
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/books/:id" element={<HomeId/>}/>
   <Route path="/books/new" element={<HomeNew/>}/>
   </Routes>
   In this way it will be dynamic and able to get the specific routes as need.

Nested Routes

  <Routes>
     <Route path="/books">
       <Route path=":id" element={<books/>}>
       <Route path="new" element={<NewBooks/>}>
      </Route> 
  </Routes>

  this is the nested routes where the routing are nested on the /books and other url on this routes are /books/:id and /books/new etc.

  
