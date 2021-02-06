export const createRating = rating => {
    return $.ajax({
        method: 'POST',
        url: '/api/ratings',
        data: {rating}
    })
}

export const fetchRating = ratingId => {
    return $.ajax({
      method: 'GET',
      url: `/api/ratings/${ratingId}`  
    })
}

export const fetchHouseRatings = houseId => {
    return $.ajax({
        method:'GET',
        url: '/api/ratings',
        data: {houseId}
    })
}

export const updateRating = rating => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/ratings/${rating.id}`,
        data: {rating}
    })
}

export const deleteRating = ratingId => {
    return $.ajax({
      method: "DELETE",
      url: `/api/ratings/${ratingId}`,
    });
}