# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all
Rating.destroy_all

user1 = User.create!(username: 'admin_josh', password: 'adminadmin')
guest1 = User.create!(username: 'guest_user', password: 'guest_user')


movie1 = Movie.create!(title: 'django unchained', release: '12252012', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432754/75e9c24995ae7f59f192c78230f4133d--classic-movie-posters-classic-movies.jpg', trailer: 'https://www.youtube.com/trailer/eUdM9vrCbow' )
movie2 = Movie.create!(title: 'back to the future', release: '07/03/1985', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432754/63bbe130a2fbf9c2240c7c9c44f13c3a--minimalist-movie-posters-classic-movie-posters.jpg', trailer: 'https://www.youtube.com/embed/qvsgGtivCgs' )
movie3 = Movie.create!(title: 'pulp fiction', release: '10/14/1994', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432754/6cc488d74b68e2cd131fd11f69f03e62--vintage-movie-posters-vintage-movies.jpg', trailer: 'https://www.youtube.com/embed/s7EdQ4FqbhY'  )
movie4 = Movie.create!(title: 'die hard', release: '07/15/1988', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432755/5021acd26b9b68240977110febfd650b--guns-die-hard-.jpg', trailer: 'https://www.youtube.com/embed/QIOX44m8ktc')
movie5 = Movie.create!(title: 'kill bill', release: '10/10/2003', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432755/847d8d0a2c748413dadaf94ab4d74966--quentin-tarantino-tarantino-movies.jpg', trailer: 'https://www.youtube.com/embed/-czwy-aVbbU' )
movie6 = Movie.create!(title: "ferris bueller's day off", release: '06/11/1986', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432764/da6a066209f0c9093e511713ea528983---s-comic-book.jpg', trailer: 'https://www.youtube.com/embed/R-P6p86px6U' )
movie7 = Movie.create!(title: 'the incredibles', release: '11/05/2004', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432766/f29aafaff9a8121bd7b24381c60d7145--disney-movie-posters-disney-movies.jpg', trailer: 'https://www.youtube.com/embed/eZbzbC9285I' )
movie8 = Movie.create!(title: 'fight club', release: '09/21/1999', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519432769/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg', trailer: 'https://www.youtube.com/embed/SUXWAEX2jlg' )
movie9 = Movie.create!(title: 'spirited away', release: '09/20/2002', user_id: user1.id, poster: 'https://res.cloudinary.com/dxeyfggji/image/upload/v1519778634/3db7c67f3b22f2b18d041caf5ff8a9eb--spirited-away-poster-spirited-away-art.jpg', trailer: 'https://www.youtube.com/embed/ByXuk9QqQkk' )
