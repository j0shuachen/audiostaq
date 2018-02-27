json.users @users.each do |user|
  json.extract! user, :id, :username
end
