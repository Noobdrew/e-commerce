# e-commerce

I created the app with Vite React and React router
App.jsx contais all the routes of the app where it renders Layout as the root route
App.jsx creates context for the json data as well as windwSize
Layout.jsx contains the header main and footer main contains a react router Outlet
Layout creates a state for the filter side menu popup , the state gets sent down as a prop to Header.jsx
Header.jsx adds an onClick to the Hamburger menu icon which changes menuOpen state and displays side menu
Header.jsx also has navlinks to bags and shoes pages
The Bags page is in Bags.jsx in that file i set state to manage the Load more button and a ref to get the number of loaded bags
Bags.jsx renders two elements a Filter and BagElement, filter is only loaded when screen width is over 770px
Bags page changes ui if width is bigger than 770px
created filter fuctionality can filter by mutiple colors and can filter by max price
decided to use search queries from react router to create the filter
it was challenging to know where to put the filtering functionality and how to manage the data
it was also challenging to create the mutiple filtering functionality
added sorting functionallity it was very difficult to fix filter being applied on every 2nd click , it was also challenging to create the sorting state and finding out how to implement it
