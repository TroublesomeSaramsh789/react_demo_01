import React from "react";

let UserProvider, UserConsumer;
let users;
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    users = React.createContext(json);

    UserProvider = users.Provider;
    UserConsumer = users.Consumer;
  });

export { UserConsumer, UserProvider };
