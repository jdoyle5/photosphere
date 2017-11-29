# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all
Comment.destroy_all
Like.destroy_all

user1= User.create(username: "guest", password: "password")
user2 = User.create(username: "sam_wise", password: "password")
user3 = User.create(username: "peter_parker", password: "password")
user4 = User.create(username: "scott_summers", password: "password")
user5 = User.create(username: "barry_allen", password: "password")
user6 = User.create(username: "peter_quill", password: "password")

photo1 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505721/Photo_Sep_25_10_32_37_PM_ayy13l.jpg",
  title: "Afternoon Delight", owner_id: 1)
photo2 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511911536/Photo_Feb_25_4_54_46_PM_dgjzrx.jpg",
  title: "Whitewash", owner_id: 2)
photo3 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505717/Photo_Nov_20_10_11_27_PM_umwvud.jpg",
  title: "Mad Hatter", owner_id: 3)
photo4 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505713/Photo_Dec_12_12_12_28_AM_r3cb6h.jpg",
  title: "Can't Find Brush", owner_id: 4)
photo5 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505713/Photo_Dec_04_9_51_37_PM_wk2apw.jpg",
  title: "Mashed Potatoes", owner_id: 2)
photo6 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511911536/Photo_Mar_20_4_49_27_PM_rre0xy.jpg",
  title: "Dip n Dots", owner_id: 4)
photo7 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505720/Photo_Sep_18_9_49_38_PM_i5tmr7.jpg",
  title: "Scuffed Shoes", owner_id: 3)
photo8 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505720/Photo_Nov_30_9_17_57_PM_d2zsyi.jpg",
  title: "Tiny Dancer", owner_id: 4)
photo9 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505718/Photo_Nov_21_8_30_02_PM_veqefi.jpg",
  title: "Logan Lucky", owner_id: 2)
photo10 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505716/Photo_Nov_01_3_44_52_PM_xpcdym.jpg",
  title: "Pony Up", owner_id: 5)
photo11 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505716/Photo_May_12_5_02_34_PM_2_rlmmp1.jpg",
  title: "Can't Feel My Face", owner_id: 6)
photo12 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505713/Photo_Dec_12_12_12_28_AM_r3cb6h.jpg",
  title: "Powder", owner_id: 2)
photo13 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505717/Photo_Nov_21_8_26_54_PM_ez0di8.jpg",
  title: "Through The Looking Glass", owner_id: 5)
photo14 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505716/Photo_Nov_20_10_02_29_PM_xiycil.jpg",
  title: "Enough is Enough", owner_id: 6)
photo15 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505718/Photo_Nov_21_8_56_30_PM_hnqxnt.jpg",
  title: "What A Lovely Day", owner_id: 3)
photo16 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505713/Photo_Dec_11_9_57_25_PM_wngnew.jpg",
  title: "Spoon Full", owner_id: 5)
photo17 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505714/Photo_May_12_4_57_20_PM_1_jdd1j2.jpg",
  title: "Crash Course", owner_id: 4)
photo18 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505713/Photo_Aug_16_11_32_29_AM_ctojcy.jpg",
  title: "No Diving", owner_id: 6)
photo19 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505711/Photo_Aug_15_4_36_59_PM_uwqgyo.jpg",
  title: "Stop Spinning", owner_id: 1)
photo20 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1511505719/Photo_Nov_27_6_59_31_PM_ynyesk.jpg",
  title: "Sand", owner_id: 5)
