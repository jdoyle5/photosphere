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
Tag.destroy_all
Tagging.destroy_all

user1= User.create(username: "guest_user", password: "password")
user2 = User.create(username: "james_howlett", password: "password")
user3 = User.create(username: "peter_parker", password: "password")
user4 = User.create(username: "bobby_drake", password: "password")
user5 = User.create(username: "barry_allen", password: "password")
user6 = User.create(username: "peter_quill", password: "password")


photo1 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110639/Photo_Sep_18_9_53_45_PM_ulstti.jpg",
  title: "Tall Grass", owner_id: 2)

photo2 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110639/Photo_Sep_01_10_11_11_PM_g6q6gq.jpg",
  title: "Pier Biking", owner_id: 3)

photo3 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110639/Photo_Oct_12_10_42_40_PM_lvsg8u.jpg",
  title: "Harbor Tug Boat", owner_id: 4)

photo4 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110639/Photo_Nov_30_9_17_57_PM_hhg3cm.jpg",
  title: "Orange Blue Lagoon", owner_id: 1)

photo5 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110638/Photo_Nov_21_8_56_30_PM_nshqsx.jpg",
  title: "Desert Red", owner_id: 2)

photo6 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110637/Photo_Nov_03_8_54_07_PM_xdhp6p.jpg",
  title: "City Lights", owner_id: 1)

photo7 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110638/Photo_Nov_20_9_58_10_PM_ujuoxb.jpg",
  title: "Dancing In The Desert", owner_id: 4)

photo8 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110636/Photo_Nov_01_6_44_52_PM_fajhfv.jpg",
  title: "Daily Commute", owner_id: 2)

photo9 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110637/Photo_Nov_01_7_28_43_PM_ubgajl.jpg",
  title: "Purple Skies", owner_id: 3)

photo10 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110638/Photo_Nov_20_9_59_32_PM_jqtlj2.jpg",
  title: "Hold On To Your Hat", owner_id: 2)

photo11 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110637/Photo_Nov_02_2_42_48_PM_c9ullm.jpg",
  title: "Blue Glass", owner_id: 2)

photo12 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110636/Photo_Jul_02_9_17_24_PM_frdaaf.jpg",
  title: "Baker", owner_id: 4)

photo13 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110635/Photo_Jul_09_6_20_23_PM_chcj2g.jpg",
  title: "Golden Gate Traffic", owner_id: 1)

photo14 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110638/Photo_Nov_20_10_02_29_PM_pk0lnp.jpg",
  title: "Rainbow Smiles", owner_id: 3)

photo15 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110637/Photo_Nov_02_5_59_55_PM_v5p4cf.jpg",
  title: "Empire State of Mind", owner_id: 2)

photo16 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110636/Photo_Jul_20_10_11_56_PM_q1vpt2.jpg",
  title: "Tall Grass Sunset", owner_id: 1)

photo17 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110636/Photo_Jun_11_10_17_32_PM_ew1iny.jpg",
  title: "Surfs Up", owner_id: 3)

photo18 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110636/Photo_May_03_6_03_52_PM_ym2cor.jpg",
  title: "Blue Moon", owner_id: 1)

photo19 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110638/Photo_Nov_20_10_11_27_PM_ukegvz.jpg",
  title: "Welcome Home", owner_id: 5)

photo20 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110637/Photo_Nov_02_6_03_08_PM_kvfumn.jpg",
  title: "New York Skyline", owner_id: 4)

photo21 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110638/Photo_Nov_21_8_30_02_PM_ertb56.jpg",
  title: "Desert Unicorn", owner_id: 1)

photo22 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110636/Photo_Jul_20_10_16_07_PM_pir4e9.jpg",
  title: "White Dress", owner_id: 5)

photo23 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110637/Photo_Nov_03_4_13_33_PM_zc3rxd.jpg",
  title: "The Bridge", owner_id: 6)

photo24 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110634/Photo_Aug_15_4_23_26_PM_whmzlf.jpg",
  title: "Couple Goals", owner_id: 3)

photo25 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110635/Photo_Jan_07_3_23_50_AM_ytjntu.jpg",
  title: "Dog Walkin", owner_id: 2)

photo26 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110634/Photo_Aug_15_4_36_59_PM_ylelm0.jpg",
  title: "Loner", owner_id: 1)

photo27 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110635/Photo_Dec_04_9_21_14_PM_yrklgc.jpg",
  title: "Peter Pan", owner_id: 4)

photo28 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110635/Photo_Aug_15_4_41_45_PM_ijbtpb.jpg",
  title: "Skate or Die", owner_id: 5)

photo29 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109877/Photo_Sep_03_3_43_16_PM_knwudu.jpg",
  title: "Sail Boat", owner_id: 5)

photo30 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110634/Photo_Aug_14_4_52_06_PM_odhh8p.jpg",
  title: "Rainbow Waterfall", owner_id: 1)

photo31 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110634/Photo_Aug_14_2_31_57_AM_pd9w9k.jpg",
  title: "Starry Night", owner_id: 2)

photo32 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110634/Photo_Aug_08_3_35_20_PM_cpmkxu.jpg",
  title: "Crystal Ball", owner_id: 3)

photo33 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109878/Photo_Sep_03_3_53_35_PM_ialcqx.jpg",
  title: "Golden Gate Lean", owner_id: 5)

photo34 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110634/Photo_Aug_12_4_55_52_PM_friymw.jpg",
  title: "Refill Please", owner_id: 4)

photo35 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109876/Photo_Nov_21_8_26_54_PM_xfwtfi.jpg",
  title: "Black Dress", owner_id: 6)

photo36 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109877/Photo_Sep_03_3_08_58_PM_s3qytn.jpg",
  title: "Navigating The Rocks", owner_id: 1)

photo37 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109877/Photo_Sep_03_2_29_49_PM_qy4trm.jpg",
  title: "Bridge To Nowhere", owner_id: 5)

photo38 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109877/Photo_Sep_03_3_20_32_PM_fyusch.jpg",
  title: "Flying V", owner_id: 3)

photo39 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109876/Photo_May_20_8_55_20_PM_zqvep0.jpg",
  title: "Blue Eyes", owner_id: 2)

photo40 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109875/Photo_May_11_9_23_49_PM_tkjreu.jpg",
  title: "Volleyball Sunset", owner_id: 4)

photo41 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109876/Photo_May_12_5_08_51_PM_cjsscz.jpg",
  title: "Red Square", owner_id: 1)

photo42 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109875/Photo_May_11_9_11_55_PM_nadmel.jpg",
  title: "Sandy Hands", owner_id: 5)

photo43 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109876/Photo_May_11_9_36_28_PM_m0te27.jpg",
  title: "Orange Sunset", owner_id: 6)

photo44 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109876/Photo_May_12_4_57_20_PM_xorfzw.jpg",
  title: "Deserted Lineup", owner_id: 2)

photo45 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109877/Photo_Sep_03_2_46_29_PM_ti0myx.jpg",
  title: "Pinstripe Pajamas", owner_id: 1)

photo46 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109875/Photo_May_11_9_06_52_PM_hboq8i.jpg",
  title: "Whitewash Closeup", owner_id: 3)

photo47 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109876/Photo_May_12_5_02_34_PM_fjsf3m.jpg",
  title: "Split Peak", owner_id: 6)

photo48 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109874/Photo_May_03_6_20_58_PM_wvk8uh.jpg",
  title: "Smile Like You Mean It", owner_id: 5)

photo49 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109875/Photo_May_03_7_16_28_PM_xqtay4.jpg",
  title: "Snow Skippin", owner_id: 4)

photo50 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109875/Photo_May_11_8_51_45_PM_fplffs.jpg",
  title: "Pier Shenanigans", owner_id: 2)

photo51 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109874/Photo_Mar_25_12_42_52_PM_djm3fc.jpg",
  title: "Road To Mammoth", owner_id: 5)

photo52 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/a_90/v1512109874/Photo_Mar_20_4_49_27_PM_rmh0kg.jpg",
  title: "Castle Pool", owner_id: 6)

photo53 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109875/Photo_May_03_6_24_19_PM_p4cdnx.jpg",
  title: "Canon Glasses", owner_id: 3)

photo54 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109874/Photo_May_02_6_49_37_PM_lbyqcg.jpg",
  title: "Ruby's Diner", owner_id: 5)

photo55 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109873/Photo_Mar_20_4_30_22_PM_h9atuo.jpg",
  title: "Balancing Act", owner_id: 5)

photo56 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109873/Photo_Mar_14_8_47_46_PM_ano93q.jpg",
  title: "Flying Solo", owner_id: 1)

photo57 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/q_80/a_270/v1512109874/Photo_Mar_20_4_56_16_PM_dc16au.jpg",
  title: "Rocky Point", owner_id: 6)

photo58 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109873/Photo_Mar_18_4_22_58_PM_gunjid.jpg",
  title: "Best Friends", owner_id: 4)

photo59 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_31_10_56_52_AM_z4awoa.jpg",
  title: "Light Festival", owner_id: 3)

photo60 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109873/Photo_Jul_15_6_58_35_PM_hvflno.jpg",
  title: "Cabin In The Woods", owner_id: 1)

photo61 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109873/Photo_Mar_14_8_46_44_PM_gvjccg.jpg",
  title: "Orange Reflection", owner_id: 2)

photo62 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109874/Photo_Mar_20_4_53_07_PM_go4a8t.jpg",
  title: "Lighthouse Castle", owner_id: 5)

photo63 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_30_12_37_35_AM_iau70c.jpg",
  title: "Put Em Up", owner_id: 6)

photo64 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_30_6_19_17_AM_pc4uuo.jpg",
  title: "Bangkok Skyline", owner_id: 1)

photo65 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_02_8_00_48_PM_spzx56.jpg",
  title: "Too Cool For School", owner_id: 5)

photo66 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109871/Photo_Feb_25_4_54_46_PM_tnucns.jpg",
  title: "Split Down The Middle", owner_id: 5)

photo67 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_28_3_33_53_AM_kd0nx7.jpg",
  title: "Monkey Business", owner_id: 3)

photo68 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109871/Photo_Feb_25_4_24_12_PM_t9ec69.jpg",
  title: "Winter Wonderland", owner_id: 2)

photo69 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_29_11_52_38_PM_by7h45.jpg",
  title: "Jungle Fever", owner_id: 5)

photo70 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109872/Photo_Jan_02_9_05_30_PM_vrkbp6.jpg",
  title: "Sunset Eyes", owner_id: 4)

photo71 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109871/Photo_Feb_13_12_46_52_PM_qapi7z.jpg",
  title: "Flannel Bridge", owner_id: 1)

photo72 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109871/Photo_Feb_24_5_03_54_PM_vsecoy.jpg",
  title: "Jetty Waves", owner_id: 6)

photo73 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109870/Photo_Feb_12_7_28_56_PM_dmm1jv.jpg",
  title: "White Sky Pier", owner_id: 3)

photo74 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109870/Photo_Feb_13_12_41_28_PM_im70mo.jpg",
  title: "Ocean View", owner_id: 5)

photo75 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109869/Photo_Feb_12_7_04_39_PM_y4eox5.jpg",
  title: "Cape Coastline", owner_id: 2)

photo76 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109869/Photo_Feb_03_5_00_45_AM_wdysjw.jpg",
  title: "Watchu Lookin At", owner_id: 5)

photo77 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109871/Photo_Feb_13_1_40_29_PM_ujtrlt.jpg",
  title: "Hairy Face", owner_id: 6)

photo78 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109869/Photo_Feb_01_5_04_37_AM_joihtl.jpg",
  title: "Jungle Cruisin", owner_id: 1)

photo79 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109869/Photo_Dec_26_9_25_00_PM_azhbgh.jpg",
  title: "First Date", owner_id: 4)

photo80 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109870/Photo_Feb_13_1_28_15_PM_a3rhvf.jpg",
  title: "Blurry Coastline", owner_id: 2)

photo81 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109869/Photo_Dec_11_1_35_47_PM_ki5rsa.jpg",
  title: "Can't Feel My Face", owner_id: 3)

photo82 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109868/Photo_Dec_04_9_22_14_PM_vnynkr.jpg",
  title: "Sandy Toes", owner_id: 5)

photo83 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109868/Photo_Apr_27_9_08_39_PM_xywrbb.jpg",
  title: "Muddy Shoes", owner_id: 6)

photo84 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109867/Photo_Apr_27_6_14_03_PM_wjw0sb.jpg",
  title: "Film Cameras", owner_id: 1)

photo85 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109867/Photo_Apr_27_5_06_02_PM_zg2ycl.jpg",
  title: "Foggy Days", owner_id: 2)

photo86 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109867/Photo_Apr_24_1_03_38_PM_yf6aat.jpg",
  title: "Blue Mountains", owner_id: 3)

photo87 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109867/Photo_Apr_22_3_35_25_PM_ukcxjq.jpg",
  title: "Final Destination", owner_id: 1)

photo88 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512109867/Photo_Apr_22_3_36_22_PM_kyawl2.jpg",
  title: "Pitch Fork Portrait", owner_id: 5)

photo89 = Photo.create(img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1512110639/Photo_Sep_28_10_55_27_PM_dp8wyj.jpg",
  title: "Blue Palm Trees", owner_id: 4)



tag1 = Tag.create(name: "drone")
tag2 = Tag.create(name: "portrait")
tag3 = Tag.create(name: "landscape")



tagging1 = Tagging.create(photo_id: photo1.id, tag_id: tag2.id)

tagging2 = Tagging.create(photo_id: photo2.id, tag_id: tag3.id)

tagging3 = Tagging.create(photo_id: photo3.id, tag_id: tag3.id)

tagging4 = Tagging.create(photo_id: photo4.id, tag_id: tag2.id)

tagging5 = Tagging.create(photo_id: photo5.id, tag_id: tag2.id)

tagging6 = Tagging.create(photo_id: photo6.id, tag_id: tag3.id)

tagging7 = Tagging.create(photo_id: photo7.id, tag_id: tag2.id)

tagging8 = Tagging.create(photo_id: photo8.id, tag_id: tag3.id)

tagging9 = Tagging.create(photo_id: photo9.id, tag_id: tag3.id)

tagging10 = Tagging.create(photo_id: photo10.id, tag_id: tag2.id)

tagging11 = Tagging.create(photo_id: photo11.id, tag_id: tag3.id)

tagging12 = Tagging.create(photo_id: photo12.id, tag_id: tag2.id)

tagging13 = Tagging.create(photo_id: photo13.id, tag_id: tag3.id)

tagging14 = Tagging.create(photo_id: photo14.id, tag_id: tag2.id)

tagging15 = Tagging.create(photo_id: photo15.id, tag_id: tag3.id)

tagging16 = Tagging.create(photo_id: photo16.id, tag_id: tag2.id)

tagging17 = Tagging.create(photo_id: photo17.id, tag_id: tag2.id)

tagging18 = Tagging.create(photo_id: photo18.id, tag_id: tag3.id)

tagging19 = Tagging.create(photo_id: photo19.id, tag_id: tag2.id)

tagging20 = Tagging.create(photo_id: photo20.id, tag_id: tag3.id)

tagging21 = Tagging.create(photo_id: photo21.id, tag_id: tag2.id)

tagging22 = Tagging.create(photo_id: photo22.id, tag_id: tag2.id)

tagging23 = Tagging.create(photo_id: photo23.id, tag_id: tag3.id)

tagging24 = Tagging.create(photo_id: photo24.id, tag_id: tag3.id)

tagging25 = Tagging.create(photo_id: photo25.id, tag_id: tag3.id)

tagging26 = Tagging.create(photo_id: photo26.id, tag_id: tag2.id)

tagging27 = Tagging.create(photo_id: photo27.id, tag_id: tag2.id)

tagging28 = Tagging.create(photo_id: photo28.id, tag_id: tag2.id)

tagging29 = Tagging.create(photo_id: photo29.id, tag_id: tag3.id)

tagging30 = Tagging.create(photo_id: photo30.id, tag_id: tag2.id)

tagging31 = Tagging.create(photo_id: photo31.id, tag_id: tag3.id)

tagging32 = Tagging.create(photo_id: photo32.id, tag_id: tag2.id)

tagging33 = Tagging.create(photo_id: photo33.id, tag_id: tag2.id)

tagging34 = Tagging.create(photo_id: photo34.id, tag_id: tag3.id)

tagging35 = Tagging.create(photo_id: photo35.id, tag_id: tag2.id)

tagging36 = Tagging.create(photo_id: photo36.id, tag_id: tag3.id)

tagging37 = Tagging.create(photo_id: photo37.id, tag_id: tag3.id)

tagging38 = Tagging.create(photo_id: photo38.id, tag_id: tag3.id)

tagging39 = Tagging.create(photo_id: photo39.id, tag_id: tag2.id)

tagging40 = Tagging.create(photo_id: photo40.id, tag_id: tag2.id)

tagging41 = Tagging.create(photo_id: photo41.id, tag_id: tag1.id)

tagging42 = Tagging.create(photo_id: photo42.id, tag_id: tag2.id)

tagging43 = Tagging.create(photo_id: photo43.id, tag_id: tag3.id)

tagging44 = Tagging.create(photo_id: photo44.id, tag_id: tag1.id)

tagging45 = Tagging.create(photo_id: photo45.id, tag_id: tag2.id)

tagging46 = Tagging.create(photo_id: photo46.id, tag_id: tag3.id)

tagging47 = Tagging.create(photo_id: photo47.id, tag_id: tag1.id)

tagging48 = Tagging.create(photo_id: photo48.id, tag_id: tag2.id)

tagging49 = Tagging.create(photo_id: photo49.id, tag_id: tag3.id)

tagging50 = Tagging.create(photo_id: photo50.id, tag_id: tag2.id)

tagging51 = Tagging.create(photo_id: photo51.id, tag_id: tag3.id)

tagging52 = Tagging.create(photo_id: photo52.id, tag_id: tag1.id)

tagging53 = Tagging.create(photo_id: photo53.id, tag_id: tag2.id)

tagging54 = Tagging.create(photo_id: photo54.id, tag_id: tag1.id)

tagging55 = Tagging.create(photo_id: photo55.id, tag_id: tag2.id)

tagging56 = Tagging.create(photo_id: photo56.id, tag_id: tag3.id)

tagging57 = Tagging.create(photo_id: photo57.id, tag_id: tag1.id)

tagging58 = Tagging.create(photo_id: photo58.id, tag_id: tag2.id)

tagging59 = Tagging.create(photo_id: photo59.id, tag_id: tag2.id)

tagging60 = Tagging.create(photo_id: photo60.id, tag_id: tag1.id)

tagging61 = Tagging.create(photo_id: photo61.id, tag_id: tag3.id)

tagging62 = Tagging.create(photo_id: photo62.id, tag_id: tag1.id)

tagging63 = Tagging.create(photo_id: photo63.id, tag_id: tag2.id)

tagging64 = Tagging.create(photo_id: photo64.id, tag_id: tag3.id)

tagging65 = Tagging.create(photo_id: photo65.id, tag_id: tag2.id)

tagging66 = Tagging.create(photo_id: photo66.id, tag_id: tag1.id)

tagging67 = Tagging.create(photo_id: photo67.id, tag_id: tag2.id)

tagging68 = Tagging.create(photo_id: photo68.id, tag_id: tag3.id)

tagging69 = Tagging.create(photo_id: photo69.id, tag_id: tag2.id)

tagging70 = Tagging.create(photo_id: photo70.id, tag_id: tag2.id)

tagging71 = Tagging.create(photo_id: photo71.id, tag_id: tag2.id)

tagging72 = Tagging.create(photo_id: photo72.id, tag_id: tag1.id)

tagging73 = Tagging.create(photo_id: photo73.id, tag_id: tag2.id)

tagging74 = Tagging.create(photo_id: photo74.id, tag_id: tag3.id)

tagging75 = Tagging.create(photo_id: photo75.id, tag_id: tag3.id)

tagging76 = Tagging.create(photo_id: photo76.id, tag_id: tag2.id)

tagging77 = Tagging.create(photo_id: photo77.id, tag_id: tag2.id)

tagging78 = Tagging.create(photo_id: photo78.id, tag_id: tag3.id)

tagging79 = Tagging.create(photo_id: photo79.id, tag_id: tag3.id)

tagging80 = Tagging.create(photo_id: photo80.id, tag_id: tag3.id)

tagging81 = Tagging.create(photo_id: photo81.id, tag_id: tag2.id)

tagging82 = Tagging.create(photo_id: photo82.id, tag_id: tag2.id)

tagging83 = Tagging.create(photo_id: photo83.id, tag_id: tag2.id)

tagging84 = Tagging.create(photo_id: photo84.id, tag_id: tag2.id)

tagging85 = Tagging.create(photo_id: photo85.id, tag_id: tag3.id)

tagging86 = Tagging.create(photo_id: photo86.id, tag_id: tag3.id)

tagging87 = Tagging.create(photo_id: photo87.id, tag_id: tag2.id)

tagging88 = Tagging.create(photo_id: photo88.id, tag_id: tag2.id)

tagging89 = Tagging.create(photo_id: photo89.id, tag_id: tag3.id)

rand_tags = [
tag4 = Tag.create(name: "lovely"),
tag5 = Tag.create(name: "awesome"),
tag6 = Tag.create(name: "gorgeous"),
tag7 = Tag.create(name: "crazy"),
tag8 = Tag.create(name: "cool"),
]


(1..Photo.count-1).each do |photoId|
  random_tags = rand_tags.sample(3)
  rand_tags.each do |tag|
    Tagging.create!(photo_id: photoId, tag_id: tag.id)
  end
end
