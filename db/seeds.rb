User.destroy_all
User.create!(
  email: "guest@eventbryte.com",
  password: "password"
)

Type.destroy_all
types = [
  "Party", "Class", "Performance", "Tour", "Networking", "Seminar",
  "Other", "Festival", "Conference", "Gala", "Screening", "Game",
  "Attraction", "Appearance", "Expo", "Race", "Retreat", "Covention",
  "Tournament", "Rally"
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
    "Folk", "Hip Hop / Rap", "Indie", "Latin", "Metal", "Opera", "Pop",
    "R&B", "Reggae", "Religious/Spiritual", "Rock", "Top 40"
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
