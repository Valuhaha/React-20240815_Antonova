/* eslint-disable react/prop-types */


import { Reviews } from "../restaurant-rewiews/restaurant-rewiews";
import { Menu } from "../restaurant-menu/restaurant-menu";


export const Restaurant = ({ name, menu, reviews }) => {
    if (!name) {
        return null;
    }

    return (
        <section>         
            <h2>{name}</h2>
            <h3>Menu</h3>
            {menu?.length ? <Menu menu={menu} /> : <div>Menu is empty</div>}
            <h3>Review</h3>
            {reviews?.length ? <Reviews reviews={reviews} /> : <div>Empty reviews</div>}
        </section>
    );
};