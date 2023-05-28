# Car showcase app
This project is a car showcase app built using React, designed to provide users with a comprehensive platform for browsing and exploring various car models. The app features a user-friendly interface consisting of a header, dropdown menu, search car brand name, filter option, reset option and pagination etc..

The dropdown menu contains a list of brand names, with a default value Select a brand name. Upon selecting a brand name and clicking the search button, the app makes an API call to retrieve detailed information about the chosen car from the API Ninjas . To display car images, the app uses the URL obtained from the API call and sets it as the source attribute for the corresponding image element, making API call to Imagin Studio.

The app includes four filter options: car class, fuel type, model type, and year. Users can apply filters to narrow down their search results, and two buttons are available for filtering and resetting the filters. Error messages are displayed when no filters are applied or when the filter/reset buttons are clicked without selecting any options.

During the initial loading, the app fetches car details released in the year 2023. Additionally, users can select a car name from the dropdown menu located above the car listing to fetch specific car details.

The car listing displays 10 car details per page, with a total of 50 car details fetched in both the initial fetch and dropdown selection. Pagination is implemented with previous and next buttons, allowing users to navigate between pages easily.

The app is designed to be responsive, ensuring optimal user experience across different devices. It also includes a footer section to provide additional information or links.

Overall, this car showcase app offers a visually appealing and intuitive interface, allowing users to explore various car models based on different criteria and seamlessly navigate through the available options.

##Video
https://github.com/prakash-s-2210/car-showcase-app/assets/94909544/1c4ad402-497b-4fad-b873-b4a677674961

##Screenshots
![car showcase app img](https://github.com/prakash-s-2210/car-showcase-app/assets/94909544/befc6dbc-f6fa-430f-99fc-1be8d01786b7)
![car showcase app](https://github.com/prakash-s-2210/car-showcase-app/assets/94909544/0bff9a69-ec9c-410f-bf47-cb027fcf6316)







