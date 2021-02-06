export const fetchHouses = () => {
    return  $.ajax({
        method: "GET",
        url: "/api/houses",
    })
}
   

export const fetchHouse = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/houses/${id}`, 
    })
}

export const searchHouses = search => {
    return $.ajax({
      method: "GET",
      url: "/api/houses",
      data: {search}
    });
}