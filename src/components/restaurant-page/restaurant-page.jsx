/* eslint-disable react/jsx-key */
import { restaurants } from "/materials/mock.js";
import { Restaurant } from "../restaurant/restaurant.jsx"


// eslint-disable-next-line react/prop-types
export const RestaurantPage = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>

            {restaurants.map(({ name, menu, reviews }) => (
                <Restaurant
                    name={name}
                    menu={menu}
                    reviews={reviews}
                />
            ))}
        </div>
    );    
};