# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json'
Sneaker.destroy_all
User.destroy_all
featured_sneakers = JSON.parse(File.read('./snkr_data_copy/featured.json'))
popular_sneakers = JSON.parse(File.read('./snkr_data_copy/most_popular.json'))

sneakers = featured_sneakers.concat(popular_sneakers)

sneakers = sneakers.uniq{|s| s["uuid"]}


sneakers.each do |firstSnkr| 
    Sneaker.create!(
        title: firstSnkr["title"], 
        category: firstSnkr["category"], 
        shoe: firstSnkr["shoe"], 
        release_date: firstSnkr["release_date"], 
        colorway: firstSnkr["colorway"], 
        uuid: firstSnkr["uuid"], 
        brand: firstSnkr["brand"], 
        style_id: firstSnkr["style_id"], 
        retail_price: firstSnkr["retail_price"],
        market_value: firstSnkr["retail_price"], 
        img_url: firstSnkr["media"]["imageUrl"])
end

User.create(username: "Sandy", password: "123", age: "25", city: "New York", avatarUrl: 'https://66.media.tumblr.com/avatar_ef9c7b69b12d_128.pnj', bio: "Founder Sandy" )
