import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from "/materials/mock.js";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

const Restaurant = (restaurant) => {
  return (
      <div>
          <h2>{restaurant.name}</h2>
          <h3>Menu</h3>
          <ul>
              {restaurant.menu.map(item => (
                  <li key={item.id}> {item.name} - {item.price}$
                  </li>
              ))}
          </ul>
          <h3>Reviews</h3>
          <ul>
              {restaurant.reviews.map(review => (
                  <li key={review.id}> {review.user}: {review.text} (Rate: {review.rating})
                  </li>
              ))}
          </ul>
      </div>
  );
};

root.render(
  createElement("div", {},
      restaurants.map(restaurant => Restaurant(restaurant))
  )
);


/*root.render(createElement("ul", 
                            {className: "someClass", style: {color:"red"}},
                             [1, 2, 3, 4, 5].map((id) => createElement("li", {}, id))
)
);*/

/*root.render(
  <ul className = 'someClass' style = {{color : 'red'}}>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
);*/