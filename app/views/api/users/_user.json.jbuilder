json.extract! user, :id, :email
json.bookmarks user.bookmarks, :id, :event_id
