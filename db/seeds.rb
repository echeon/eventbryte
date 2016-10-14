User.destroy_all
User.create!(
email: "euibinc@gmail.com",
password: "password"
)
User.create!(
  email: "guest@eventbryte.com",
  password: "password"
)

Type.destroy_all
types = [
  "Attraction", "Appearance", "Class", "Conference", "Convention",
  "Expo", "Festival", "Gala", "Game", "Networking", "Other",
  "Party", "Performance", "Race", "Rally", "Retreat",
  "Screening", "Seminar", "Tour", "Tournament"
]
types.each do |type|
  Type.create!(name: type)
end

Category.destroy_all
Subcategory.destroy_all
categories = [
  "Auto, Boat & Air", "Business & Professional", "Charity & Causes",
  "Community & Culture", "Family & Education", "Fashion & Beauty",
  "Film, Media & Entertainment", "Food & Drink",
  "Government & Politics", "Health & Wellness",
  "Hobbies & Special Interest", "Home & Lifestyle",
  "Music", "Other", "Performing & Visual Arts",
  "Religion & Spirituality", "Science & Technology",
  "Seasonal & Holiday", "Sports & Fitness", "Travel & Outdoor"
]
subcategories = [
  ["Air", "Auto", "Boat", "Motorcycle/ATV", "Other"],
  [
    "Career", "Design", "Educators", "Environment & Sustainability",
    "Finance", "Investment", "Media", "Non Profit & NGOs",
    "Other", "Real Estate", "Sales & Marketing",
    "Startups & Small Business"
  ],
  [
    "Animal Welfare", "Disaster Relief", "Education", "Environment",
    "Healthcare", "Human Rights", "International Aid", "Other",
    "Poverty"
  ],
  [
    "City/Town", "County", "Heritage", "Historic", "LGBT",
    "Language", "Medieval", "Nationality", "Other", "Renaissance", "State"
  ],
  [
    "Alumni", "Baby", "Children & Youth", "Education", "Other",
    "Parenting", "Parents Association", "Reunion", "Senior Citizen"
  ],
  ["Accessories", "Beauty", "Bridal", "Fashion", "Other"],
  ["Adult", "Anime", "Comedy", "Comics", "Film", "Gaming", "Other", "TV"],
  ["Food", "Spirits", "Beer", "Other", "Wine"],
  [
    "County/Municipal Government", "Democratic Party", "Federal Government",
    "International Affairs", "Military", "National Security", "Non-partisan",
    "Other", "Other Party", "Republican Party", "State Government"
  ],
  ["Medical", "Mental health", "Other", "Personal health", "Spa", "Yoga"],
  [
    "Adult", "Anime/Comics", "Books", "DIY", "Drawing & Painting", "Gaming",
    "Knitting", "Other", "Photography"
  ],
  ["Dating", "Home & Garden", "Other", "Pets & Animals"],
  [
    "Blues & Jazz", "Classical", "Country", "Cultural", "EDM/Electronic",
    "Folk", "Hip Hop / Rap", "Indie", "Latin", "Metal", "Opera", "Other",
    "Pop", "R&B", "Reggae", "Religious/Spiritual", "Rock", "Top 40"
  ],
  [],
  [
    "Ballet", "Comedy", "Craft", "Dance", "Design", "Fine Art", "Jewelry",
    "Literary Arts", "Musical", "Opera", "Orchestra", "Other",
    "Painting", "Sculpture", "Theatre"
  ],
  [
    "Buddhism", "Christianity", "Eastern Religion", "Islam",
    "Judaism", "Mormonism", "Mysticism and Occult", "New Age",
    "Other", "Sikhism"
  ],
  [
    "Biotech", "High Tech", "Medicine", "Mobile", "Other", "Robotics",
    "Science", "Social Media"
  ],
  [
    "Channukah", "Christmas", "Easter", "Fall events", "Halloween/Haunt",
    "Independence Day", "New Years Eve", "Other", "St Patricks Day",
    "Thanksgiving"
  ],
  [
    "Baseball", "Basketball", "Cycling", "Exercise", "Fighting & Martial Arts",
    "Football", "Golf", "Hockey", "Motorsports", "Mountain Biking",
    "Obstacles", "Other", "Rugby", "Running", "Snow Sports", "Soccer",
    "Softball", "Swimming & Water Sports", "Tennis", "Volleyball",
    "Walking", "Yoga"
  ],
  ["Canoeing", "Climbing", "Hiking", "Kayaking", "Other", "Rafting", "Travel"]
]
categories.each do |category|
  Category.create!(name: category)
end

subcategories.each_with_index do |sub_list, i|
  sub_list.each do |subcategory|
    Subcategory.create!(name: subcategory, category_id: (i + 1))
  end
end


Event.destroy_all
Event.create!(
  title: "4th Annual Transplantation Symposium",
  description: "395 Lenox Rd, Brooklyn, NY 11203",
  organizer_id: 1,
  type_id: 4,
  category_id: 17,
  subcategory_id: 140,
  start_date: "2015-10-21",
  start_time: "07:30",
  end_date: "2015-10-21",
  end_time: "15:30",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23758028%2F78370782%2F1%2Foriginal.jpg?w=800&rect=347%2C0%2C312%2C156&s=74dd9cf5340495b49941d5227facfe1c",
  venue_name: "SUNY Downstate Medical",
  place_id: "ChIJ1x7fQWZbwokRQw0xIkN0_HU",
  num_tickets: 10,
  ticket_price: 15.95
)
Event.create!(
  title: "Dance for Dance 2016",
  description: "107 Suffolk Street, New York, NY 10002",
  organizer_id: 1,
  type_id: 12,
  category_id: 3,
  subcategory_id: 25,
  start_date: "2016-11-18",
  start_time: "19:00",
  end_date: "2016-11-18",
  end_time: "23:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F22568018%2F71848482273%2F1%2Foriginal.jpg?w=800&rect=0%2C1036%2C7000%2C3500&s=f87e4d696a7d0ef97b195e352c089814",
  venue_name: "Falmboyan Theater, The Clemente Center",
  place_id: "ChIJR-Q6CIFZwokRJ3awXmc49QU",
  num_tickets: 5,
  ticket_price: 3.50
)
Event.create!(
  title: "NYC WINE TASTING EVENT",
  description: "167 West 23rd Street, New York, NY 10011",
  organizer_id: 2,
  type_id: 10,
  category_id: 2,
  subcategory_id: 14,
  start_date: "2016-10-25",
  start_time: "18:00",
  end_date: "2016-10-25",
  end_time: "21:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24378566%2F31569815541%2F1%2Foriginal.jpg?w=800&rect=110%2C0%2C630%2C315&s=bc345c8d532225ae6803376e77271d33",
  venue_name: "NYC Wine Company",
  place_id: "ChIJP6UiLLtZwokRmmEpN75bO88",
  num_tickets: 20,
  ticket_price: 10.50
)
Event.create!(
  title: "Children's Fashion Show in Manhattan New York",
  description: "369 W. 46th Street, New York, New York 10036",
  organizer_id: 1,
  type_id: 12,
  category_id: 6,
  subcategory_id: 50,
  start_date: "2017-03-18",
  start_time: "18:00",
  end_date: "2017-03-18",
  end_time: "21:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F18764072%2F143309020817%2F1%2Foriginal.jpg?w=800&rect=0%2C9%2C600%2C300&s=ded8baff4be147fc16af43a38791ef6a",
  venue_name: "The Ritz",
  place_id: "ChIJXRLW4VNYwokROWXypVDs7hk",
  num_tickets: 100,
  ticket_price: 0.75
)
Event.create!(
  title: "New York City New Year's Eve Pub Crawl",
  description: "98 Third Avenue, New York, New York 10003",
  organizer_id: 2,
  type_id: 12,
  category_id: 18,
  subcategory_id: 152,
  start_date: "2016-12-31",
  start_time: "17:00",
  end_date: "2017-01-01",
  end_time: "04:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24481731%2F131949733542%2F1%2Foriginal.jpg?w=800&rect=0%2C198%2C650%2C325&s=79a141cbde67e8f77be9fec67d3ce1cd",
  venue_name: "Bar None",
  place_id: "ChIJBSxtyJ5ZwokRHc-BD4eJ0OA",
  num_tickets: 300,
  ticket_price: 2
)
Event.create!(
  title: "Gang of the French Caribbean - NYADIFF 2016 Centerpiece",
  description: "260 W 23rd St, New York, New York 10011",
  organizer_id: 1,
  type_id: 17,
  category_id: 7,
  subcategory_id: 56,
  start_date: "2016-12-03",
  start_time: "18:00",
  end_date: "2016-12-03",
  end_time: "22:30",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24671274%2F3218157509%2F1%2Foriginal.jpg?w=800&rect=0%2C78%2C780%2C390&s=c4f5fd3c293d98156a1922c6a40f4cec",
  venue_name: "Cinépolis Chelsea",
  place_id: "ChIJOf6_VLpZwokRKXjVKeBJDdY",
  num_tickets: 1,
  ticket_price: 100.25
)
Event.create!(
  title: "Sam Eaton's The Quantum Eye - Mentalism and Magic Show",
  description: "80 Saint Marks Place, (just west of 1st Ave), New York, NY 10003",
  organizer_id: 2,
  type_id: 1,
  category_id: 15,
  subcategory_id: 124,
  start_date: "2016-12-31",
  start_time: "16:00",
  end_date: "2016-12-31",
  end_time: "17:30",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24275626%2F3731031672%2F1%2Foriginal.jpg?w=800&rect=3%2C0%2C300%2C150&s=cf66f7f32f6ba216ac99d20beeeabe51",
  venue_name: "Theatre 80",
  place_id: "ChIJAx8pBZ1ZwokRkvoc-l_eoqw",
  num_tickets: 10,
  ticket_price: 9.99
)
Event.create!(
  title: "Music Composition Hackathon",
  description: "45 W 18th St, 7th Floor, New York, NY 10011",
  organizer_id: 1,
  type_id: 13,
  category_id: 13,
  subcategory_id: 107,
  start_date: "2017-01-21",
  start_time: "12:00",
  end_date: "2017-01-21",
  end_time: "22:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24248592%2F36290066614%2F1%2Foriginal.jpg?w=800&rect=0%2C21%2C368%2C184&s=2c69a18dc464bc0f7da35cbc4843d18e",
  venue_name: "Spotify Headquarters",
  place_id: "ChIJ0YSSKKNZwokRR3hLnbxkKew",
  num_tickets: 10,
  ticket_price: 5.00
)
Event.create!(
  title: "BKFaux V: The Faux Classic",
  description: "194 31st Street, Brooklyn, NY 11232",
  organizer_id: 2,
  type_id: 9,
  category_id: 11,
  subcategory_id: 87,
  start_date: "2016-11-12",
  start_time: "10:00",
  end_date: "2016-11-13",
  end_time: "15:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F22799677%2F31595518209%2F1%2Foriginal.jpg?w=800&rect=0%2C3%2C478%2C239&s=404acebaa04f9a3eb8973d768d60619c",
  venue_name: "Nu Brand Gaming LLC.",
  place_id: "ChIJg4ZiKsJawokRsHzPE-1hdBM",
  num_tickets: 15,
  ticket_price: 3.25
)
Event.create!(
  title: "Game Night",
  description: "228 Main Street, Chatham, NJ 07928",
  organizer_id: 2,
  type_id: 9,
  category_id: 11,
  subcategory_id: 87,
  start_date: "2016-11-05",
  start_time: "17:00",
  end_date: "2016-11-05",
  end_time: "20:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24058343%2F33575586337%2F1%2Foriginal.jpg?w=800&rect=0%2C30%2C960%2C480&s=35bcb395966a47924c9a874617367465",
  venue_name: "Satellite Comics & Games",
  place_id: "ChIJTUvaNw2vw4kRSSuBColx-vs",
  num_tickets: 20,
  ticket_price: 4.25
)
Event.create!(
  title: "BOOTLEG KARAOKE",
  description: "12518 Burbank Boulevard, CA 91607",
  organizer_id: 1,
  type_id: 12,
  category_id: 13,
  subcategory_id: 112,
  start_date: "2016-11-22",
  start_time: "21:30",
  end_date: "2016-11-22",
  end_time: "23:30",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23238283%2F21182949900%2F1%2Foriginal.jpg?w=800&rect=0%2C400%2C1700%2C850&s=37d8c2c5419227b972447ad8f5fe2f3c",
  venue_name: "Bar One Tap Room",
  place_id: "ChIJdZ67am2WwoARUbMeGMOuqvQ",
  num_tickets: 50,
  ticket_price: 0
)
Event.create!(
  title: "Who's Who in Music Tech",
  description: "4245 N Knox Ave, Chicago, IL 60641",
  organizer_id: 1,
  type_id: 10,
  category_id: 13,
  subcategory_id: 106,
  start_date: "2016-11-17",
  start_time: "18:00",
  end_date: "2016-11-17",
  end_time: "20:00",
  image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23496337%2F148971855107%2F1%2Foriginal.jpg?w=800&rect=0%2C19%2C600%2C300&s=3c36142fda13a4348574292f5e8d491b",
  venue_name: "2112 inc",
  place_id: "ChIJtfD-TjbMD4gRWYATzd1Qrkg",
  num_tickets: 2,
  ticket_price: 0.50
)


Bookmark.destroy_all
Bookmark.create!(user_id: 2, event_id: 1)
Bookmark.create!(user_id: 2, event_id: 2)
Bookmark.create!(user_id: 2, event_id: 5)
Bookmark.create!(user_id: 2, event_id: 7)
Bookmark.create!(user_id: 1, event_id: 8)
Bookmark.create!(user_id: 1, event_id: 1)
Bookmark.create!(user_id: 1, event_id: 6)
Bookmark.create!(user_id: 1, event_id: 9)


Ticket.destroy_all
Ticket.create!(user_id: 1, event_id: 10)
Ticket.create!(user_id: 1, event_id: 3)
Ticket.create!(user_id: 1, event_id: 1)
Ticket.create!(user_id: 2, event_id: 1)
Ticket.create!(user_id: 2, event_id: 3)
Ticket.create!(user_id: 2, event_id: 5)
Ticket.create!(user_id: 2, event_id: 7)
Ticket.create!(user_id: 2, event_id: 9)
