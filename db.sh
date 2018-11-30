use BlogServer

db.dropDatabase()

db.createCollection("Posts")
db.createCollection("Users")

db.Posts.insert(JSON.parse(cat("posts.json")))
db.Users.insert(JSON.parse(cat("users.json")))