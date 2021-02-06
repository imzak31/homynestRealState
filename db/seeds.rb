# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
House.delete_all 
Reservation.delete_all
Rating.delete_all
Favorite.delete_all

demo = User.create!(
    first_name: "Sebastien",
    last_name: "Kasaz",
    email: 'sebastien@kasaz.com',
    password: 'hiremeplease'
)



house1 = House.create!(
    name: "House One",
    address: "1906 Van Ness Ave",
    sqm: "50",
    state: "California",
    zip: "94109",
    price: "$$$$",
    sort: 'Apartment',
    open_time: DateTime.parse("14:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(415) 885-4605",
    photo: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    lat: 37.793487, 
    lng: -122.422735,
    description: "This is just a sample house, to seed."     
)

house2 = House.create!(
    name: "House Two",
    address: "5955 Melrose Ave",
    sqm: "150",
    state: "California",
    zip: "90038",
    price: "$$$$",
    sort: 'Houses',
    open_time: DateTime.parse("18:00:00"),
    close_time: DateTime.parse("21:00:00"),
    phone_number: "(323) 460-4170",
    photo: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    lat: 34.083677, 
    lng: -118.330198,
    description: "This is just a sample house, to seed."  
)


house3 = House.create!(
    name: "House Three",
    address: "3355 Las Vegas Blvd South",
    sqm: "100",
    state: "Nevada",
    zip: "89109",
    price: "$$$",
    sort: 'Basements',
    open_time: DateTime.parse("15:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(702) 414-6200",
    photo: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    lat: 36.120966, 
    lng: -115.169228,
    description: "This is just a sample house, to seed."
)


house4 = House.create!(
    name: "House Four",
    address: "40 West 40th Street",
    sqm: "100",
    state: "New York",
    zip: "10018",
    price: "$$$",
    sort: 'Apartments',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("23:00:00"),
    phone_number: "(212) 921-3330",
    photo: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    lat: 40.752923, lng: -73.983781,
    description: "This is just a sample house, to seed."      
)

house5 = House.create!(
    name: "House Five",
    address: "25 Yerba Buena",
    sqm: "200",
    state: "California",
    zip: "94103",
    price: "$$$",
    sort: 'Chalets',
    open_time: DateTime.parse("17:00:00"),
    close_time: DateTime.parse("22:00:00"),
    phone_number: "(415) 777-0500",
    photo: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    lat: 37.785900, lng: -122.404679,
    description: "This is just a sample house, to seed." 
)
