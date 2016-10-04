User.destroy_all

User.create!(
  username: "guest",
  password: "password"
)
