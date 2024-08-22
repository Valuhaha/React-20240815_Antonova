/* eslint-disable react/prop-types */
export const Reviews = ({reviews}) => {
    return (
       <div>
        {reviews?.map((review) => (
              <li key={review.id}> {review.user}: {review.text} (Rate: {review.rating})
              </li>
        ))}
       </div>
    )
};