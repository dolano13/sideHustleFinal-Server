const mongoose = require("mongoose");
const Ideas = require("../models/Ideas");

const dbName = "Sidehustle";
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const ideas = [
  {
    ideas: "Start a blog",
    desc:
      " Okay, so you won't make money that fast with a blog. But, if you start a blog and deliver enormous amounts of value, you could set yourself up with a platform for ending a tremendous amount of passive income. This is something you can easily build on the side with just a few hours of work per week, but you need to stay consistent and post great content regularly.",
    url: "https://www.entrepreneur.com/article/275239"
  },
  {
    ideas: "Create an online course",
    desc:
      "Create an online course with a platform like Udemy or Teachable and leverage some of your skills to create a healthy income. Depending upon how much time you invest in your course, you could make a substantial side revenue stream by creating courses that deliver tremendous amounts of value.",
    url: "https://www.entrepreneur.com/article/249613"
  },
  {
    ideas: "College Application/Financial Aid Planning Consulting Business",
    desc:
      "A financial aid planner helps parents get the lowest possible price for their child's college education, thus saving them money. Tapping into financial aid resources is not just about being smart. It is about being aware of the resources that are available. This business involves advising parents and high school students on selecting a college, filling out the application and financial aid forms, providing tips for writing the college essay, advising parents about tax implications on college savings plans, and negotiating the best possible financial aid package when a college offer is received. A sound knowledge about higher education institutions and a thorough understanding of financial aid options are important. Market your services in high schools, libraries, private tutorial centers and universities. TIP: Have a good understanding of different financial programs like Byrd Scholarships, Stafford Loans, private and federal grants, and PLUS Loans. Also be current with college savings plans including 529 plans, Coverdell Education Savings Accounts, the Uniform Gift to Minors Act, and Charitable Remainder Unitrusts.",
    url:
      "https://www.amazon.com/Start-College-Planning-Consultant-Business/dp/1599185067/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=8b4dd2669297c406ba2a3006902c556c"
  },
  {
    ideas: "Consignment Shop",
    desc:
      "Talking about wearing 'pre-owned' clothing has never been a popular coffee table discussion. Times may be changing, though. Recycled clothes are back. The recession has led consumers to save their bucks by buying 'gently used' items. Consignment items also work will as an online business. As a consignment shop owner, you don't pay anything for your inventory until it is sold, which makes this business ideal for the startup entrepreneur. Take clean, well-cared-for items and display and merchandise them online or at a physical location for the owners, splitting the profits when you make a sale. Many times, the profit split is either 50/50 or 60/40, with the higher percentage going to the consignment shops.TIP: The key to a successful consignment shop is a pleasant atmosphere. Make it clean, fresh and fashionable.",
    url:
      "https://www.amazon.com/Start-Your-Clothing-Store-More/dp/1599183951/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=7bf42cf6e4c078e122fddf63fb1a0331"
  },
  {
    ideas: "Freelance Writer",
    desc:
      "Freelance writers can write articles on any topic, from horse training to buying an RV. A good way to start is by writing about subjects in which you are already an expert. The Writer's Market lists guidelines for thousands of publications.Ghost writing is a good pursuit for freelancers looking for money and willing to forgo a byline. Websites are always on the lookout for quality freelancers, too. Create a website to promote your freelance writing business.vTIP: Your initial queries are likely to get rejected many times. Cultivate a stoic resilience to rejection.",
    url:
      "https://www.amazon.com/Start-Your-Freelance-Writing-Business/dp/1599181754/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=fb8396827103a56cfdac3624a5a9588a"
  },
  {
    ideas: "Gift Basket Making Business",
    desc:
      "From corporate parties to baby showers, holidays and birthdays, gift baskets can be tailored to suit the taste of anyone. Gift basket entrepreneurs need a flair for the creative and the design ability to buy gifts and tuck them into baskets, decorative tins, boxes or bags. Attractive packaging is an important part of the gift basket business. You can't just throw some objects together and stick on a bow. Market your gift baskets by taking photos of them. Prepare a brochure listing the contents of each basket and its price. You can sell your baskets online, to corporate offices, through mail order and in local shops. TIP: There is a large, untapped market for merchandise with university and sports team logos on them. You will first need to get approval from the university's licensing department to make gift baskets that have merchandise with their logo.",
    url:
      "https://www.amazon.com/Start-Your-Gift-Basket-Business-ebook/dp/B004RUH4LC/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=dbce1b627f73f30cd696828af206c4b0"
  },
  {
    ideas: "Medical Billing",
    desc:
      "Medical billing is the process by which doctors and hospitals receive payment from health insurance companies. It also involves resolving any disputes and following up on claims that have been delayed or rejected. Medical billing services provide coding, invoicing and collection services to different types of health-care facilities. Individuals can get certified by enrolling in schools that have medicalbilling programs, or via online courses. TIP: Working in a doctor's office can be helpful in understanding how patients are billed.",
    url:
      "https://www.amazon.com/Start-Medical-Claims-Billing-Service/dp/1599185938/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=78b19f73107c26d8583067463dba1417"
  },
  {
    ideas: "Graphic Design",
    desc:
      "Duties of a graphic designer include designing flyers, informational pamphlets, product catalogs and advertisements. Graphic designers also consult with printers or publishers to identify the best choice of paper, cover stocks and printing processes for any given assignment.Market your services to ad agencies, publishing companies, small magazines, corporations, product manufacturers and individual entrepreneurs.TIP: Good listening skills are essential to running a successful graphic designing business. You need to understand completely what your clients want.",
    url:
      "https://www.amazon.com/Start-Graphic-Design-Business-Step/dp/1599181630/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=8b81bbc39c72dd9e6a937cdfbfacf9c0"
  },
  {
    ideas: "Grant Writer",
    desc:
      "The grant writer is the vital link between a funder and a grant seeker. Grant writers work as independent contractors, full- or part-time development officers, and freelancers. Nonprofit organizations account for the largest percentage of grant seekers.Grant writers can apply for a myriad of categories of funding, including project grants, general operating grants, endowment grants, restricted grants, startup funding, matching grants, and challenge grants. TIP: Some websites that will help you start researching funders are www.fdncenter.org, www.tgci.com and www.fundsnetservices.com.",
    url:
      "https://www.amazon.com/Grant-Writing-Business-Step---Step-Startup-ebook/dp/B00C0JJ0NC/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=52cea47ec4739dc60b52a04ad55cf734"
  },
  {
    ideas: "Mobile Spa",
    desc:
      "Bring the spa experience to your clients via a mobile day spa. Mobile spa treatments can be offered in homes, offices or hotels. A mobile spa offers facials, massages, bridal hair and makeup, body treatments, manicures and pedicures. Mobile spas have low startup costs. There are no ongoing costs like those involved in operating a storefront operation such as rent, utilities, maintenance and insurance. Massage therapists, manicurists and hairdressers can run a successful mobile spa business. Market your business to clients who are working from home and do not have time to go to a spa, older folks who cannot leave their homes, working professionals who want a break during a high-stress period, and clients who are not physically able to get themselves out of the house due to illness.TIP: Carry a mobile retail shop with skin-care products and accessories such as herbal neck wraps, spa slippers and ointments for your clients.",
    url:
      "https://www.amazon.com/Start-Your-Salon-Step-Step/dp/1599185431/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=ad523254b6e3e2b5457e3cf3cbf56930"
  },
  {
    ideas: "Personal Chef",
    desc:
      "There's nothing like satisfying a hungry stomach with a hearty meal and getting paid for it. Personal chefs can market their business to just about anybody who likes to eat well and is willing to pay for it. In addition to cooking skills, personal chefs also need a working knowledge of nutrition and excellent organizational skills. A sound understanding of safe food handling practices, health regulations and product liability laws are also essential. TIP: Be ready to adapt to working in different kitchens. Some clients will have good, workable pots and pans and utensils; others won't. Investing in a travel set of cooking utensils and pots and pans may be a wise idea.",
    url:
      "https://www.amazon.com/Professional-Personal-Chef-Business-Doing/dp/0471752193/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=c1eb9d693b4190f9b3c761616f2f19f6"
  },
  {
    ideas: "Pet Sitting/Dog Walking",
    desc:
      "This is a great job for animal lovers who enjoy getting paid for caring for and playing with other people's pets. Dogs and cats are the most common pets that need care when owners are away, but you will occasionally be asked to take care of rabbits, hamsters, birds and tropical fish. Dog walking can bring in good cash, especially if you market your services in retirement communities, where many residents may lack the energy and motivation to take their pets for their daily walks.",
    url:
      "https://www.amazon.com/Start-Your-Own-Business-More/dp/159918186X/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=34c364f95d1d8927c3fbf4045c45f064"
  },
  {
    ideas: "Soap Making",
    desc:
      "A bar of soap may cost 10 cents to make and can be sold from $1 to $4, and there is a growing market of green buyers in this market. Many people are going back to basics and buying all-natural soaps. By adding special herbs, fragrances and colors, you can make gourmet and specialty soaps right in your own kitchen. TIP: Packaging is everything.",
    url:
      "https://www.amazon.com/Bubbles-Bucks-Make-Money-Selling/dp/0982965419/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=ed8695822483a15a2a108e6e2773161c"
  },
  {
    ideas: "Website Consultant",
    desc:
      "Every Tom, Dick and Harry wants a website these days, but they don't know how to do it themselves. If you are running any kind of business today, a website is just as important as naming your business. From hosting domain names to managing web content, a website consultant builds and maintains websites. Having an understanding of Search Engine Optimization (SEO) is a plus. As a website consultant, you will need experience in links, banners and affiliate programs, and a talent for graphics and copywriting. TIP: Branch off your business into website maintenance, where you charge a monthly fee to make small changes and additions to a client's website.",
    url:
      "https://www.amazon.com/Ultimate-Guide-Optimizing-Your-Website/dp/1599185202/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=904e44f3f8bf443fe76abf5ca8c73de5"
  },
  {
    ideas: "Wedding Planner",
    desc:
      "Couples are marrying later than ever, after having spent years as working singles, getting advanced degrees or living together. They have the funds to splurge on lavish weddings. This means great earning potential for wedding planners. You will need a working knowledge of what goes into planning a wedding, including resources and price ranges for everything from invitations to musicians. TIP: This is a business where you have to be extremely organized and detail-oriented. Forgetting to put down the deposit for the ballroom or to order the yellow roses can be disastrous.",
    url:
      "https://www.amazon.com/Start-Event-Planning-Business-Step-/dp/1599185628/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=40598208a772cb9a85ee0a6a251fe73c"
  },
  {
    ideas: "Sewing Business",
    desc:
      "Custom curtain making is a profitable business if you have an interest in interior design. You can specialize in designing, sewing and installing window treatments. By providing multiple services, you can charge a great deal more than if you just stitch together basic curtains for customers. If you enjoy embroidery and hand sewing, a quilt designing business is for you. Monogrammed baby quilts are particularly popular since they make wonderful gifts. Doll dress designing is trendy. Ask as many little girls as you can what kinds of doll clothes they like. If you are not in touch with what the kids like, your clothes won't sell. Offering such accessories as doll hair ribbons, hats, socks, tights and slippers can be good for your business. TIP: Making custom bridal veils is a great way to make money using your sewing skills. It is also a good way to enter the lucrative bridal market. Provide a distinctive service by crafting one-of-a-kind veils and headpieces. The ability to choose a headpiece that is most flattering to a particular bride's facial structure is important. You can branch out by making First Communion veils.",
    url:
      "https://www.amazon.com/Start-Maintain-Profitable-Sewing-Business/dp/1419624547/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=b70a04b034d601f8808f6da177ef507c"
  },
  {
    idea: "Paper Shredding",
    desc:
      "Many businesses -- such as banks, financial institutions and medical facilities -- are required by law to protect the confidentiality and security of patrons. Many businesses have an overload of documents that, for security reasons, cannot be thrown in the trash. Hiring a papershredding service is an investment for them. A mobile document shredding service goes to its clients and shreds their documents on-site, then removes the shredded paper and takes it to a recycling center. TIP: Aside from shredding paper documents, a paper shredding service can offer the ability to destroy hard drives as well, along with other media such as CDs and DVDs.",
    url:
      "https://www.amazon.com/Document-Shredding-Service-Sample-Business-ebook/dp/B004NNV2R0/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=ec00eed56b14b6c90b86aaba3183bc60"
  },
  {
    ideas: "Cosmetology Spa",
    desc:
      "Check with the medical board in your state to determine its position on medical spa treatments. Opening a medical spa can be a sensitive issue in certain areas of the industry because there is controversy in the field. Next, determine which type of medical spa you want to start. Popular medical spa treatments include Botox, laser hair removal and anti-aging skin-care services. TIP: Always have an attorney review documents before signing any contracts.",
    url:
      "https://www.amazon.com/Start-Your-Salon-Step-Step/dp/1599185431/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=f8ba764447c6a35b4ee5e05e665deeaa"
  },
  {
    ideas: "Cleaning Service",
    desc:
      "As long as dirt and grime exist, there will be a need for house-cleaning services. In many homes and apartments, people want to enjoy the luxury of not having to scrub floors and dust furniture. TIP: With each new client, find out exactly what they need and expect from you. Catering to the wishes of your clients is as important as a good cleaning job and will earn you loyal and returning customers.",
    url:
      "https://www.amazon.com/Start-Your-Own-Cleaning-Service/dp/1599185288/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=600cb5c8a2677d33a75b5dd013d57ff7"
  },
  {
    ideas: "At Home Health Care Service",
    desc:
      "An 80-year-old wants to live in his own home but has trouble bathing, fixing meals and cleaning the house. As a home health-care business, your responsibility is to send an employee to assist with the daily tasks of living. Home health care is a rapidly growing business with today's skyrocketing costs of assisted living facilities and live-in nurses. Find out the legal requirements to run a home health-care agency in your area. Always be up to date on the laws for administering any kind of medication. Advertise your services at local community centers, rehabilitation centers, doctors' offices and hospitals. TIP: You need top-notch people skills and an instinct for determining which caregiver to pair with which client. Most importantly, you must have a knack for hiring employees with monumental patienc",
    url:
      "https://www.amazon.com/Start-Your-Senior-Services-Business/dp/1599185415/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=a1fd5dabed6cb7f99dc5eb1208343e10"
  },
  {
    ideas: "Gardening/Landscaping",
    desc:
      "Herb farms are one of the fastest-growing industries. Medicinal herbs, herbal teas, culinary herbs, and herbs for candles and aromatherapy are just the tip of the iceberg. A solid working knowledge of growing herbs is essential. Flowers used to scent potpourri, soap, candles and fragrant concoctions require just a few square feet of growing space. Most of your product preparation can easily take place in an average-size kitchen equipped with no more than a shelf, stove and counter work space. Becoming a gardening teacher is a creative way to make money from your green thumb. Offer gardening seminars in your backyard, community colleges, recreation centers and local nurseries. Offer a class each month on a different aspect of gardening, including planning flower beds, learning about perennials, preparing the soil, creating an English garden, bulb planting, and the like. Growing orchids can be a lucrative business if you are willing to spend time and considerable effort. Although they are typically grown in tropical areas, orchids can also be grown as houseplants or in greenhouses. TIP: Through gardening, you can branch off to floral arrangements and market your products to local inns, hotels, wedding planners, churches, roadside flower sales and florists.",
    url:
      "https://www.amazon.com/Start-Landscaping-Business-Step-Step/dp/159918592X/ref=sr_1_2?keywords=lawn+care+career&qid=1559154673&s=gateway&sr=8-2"
  },
  {
    ideas: "Virtual Assistant",
    desc:
      "To become a successful Virtual Assistant, all you really need to know is how to get things done. Horkey Handbook, a site dedicated to educating and connecting virtual assistants, lists these categories as areas that many companies, as well as individuals, look for extra help: customer support, website design, calendar management and travel arrangements, keyword research, bookkeeping, data entry, video and photo editing, and much more. TIPS: 1. Choose your business structure. 2. Decide which services you’ll offer your clients. 3. Decide on your pricing structure. 4. Launch your website and create your online presence. 5. Start pitching and networking. 6. Build relationship",
    url: "https://horkeyhandbook.com/how-to-become-a-virtual-assistant/"
  },
  {
    ideas: "Personal Shopper",
    desc:
      "Love to buy gifts? This might be the perfect business for you. The clientele for this industry ranges from wealthy business people who are pressed for time to corporations that hire personal shoppers to buy gifts for customers, prospects, partners, investors, employees, and executives.",
    url:
      "https://www.amazon.com/Start-Personal-Concierge-Service-Step-/dp/1599184257/?&tag=entbookstore-20"
  },
  {
    ideas: "Daycare Owner",
    desc:
      "According to GOBankingRates, if you have a home that meets all safety and zoning requirements, you can start a child care business for as little as $1,000, which you will need to obtain a license, proper insurance and your supplies. Depending on how many children you take in, newcomers can expect $1,000—$5,000 in monthly revenue",
    url:
      "https://www.amazon.com/Child-Care-Millionaire-Building-Profitable/dp/1726776018/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=F7P2V79EJ46T8F26AE95"
  },
  {
    ideas: "Real Estate Agent",
    desc:
      "While licensing requirements and associated costs can vary from state to state, an initial investment in the low thousands can put you on a path to massive earnings. Sure you won’t start off on the level of the realtors you see on shows like Million Dollar Listing, but here’s the thing, neither did they! Speaking to Entrepreneur, Josh Altman, one of the stars of Bravo's Million Dollar Listing Los Angeles, explained, 'At the beginning of your career, you have to take whatever listing or client comes your way.” But if you build off of one sale to the next, and if you have the drive that Altman and his brother have, you could end up with a business that sells on average $1 million of real estate a day.'",
    url:
      "https://www.amazon.com/Miracle-Morning-Real-Estate-Agents/dp/B00S05Q0HE"
  },
  {
    ideas: "Personal Trainer",
    desc:
      "Are you a gym rat? Put your knowledge and muscles to work! Becoming a certified personal trainer can range in cost from $400 to a few thousand dollars, depending on where you live, and you’ll also need funds for advertising and liability insurance. In an article that appeared on Entrepreneur, John Romanelli, founder of the fitness website No Bad Reps, explained that personal training has the potential to generate revenue of $6,000 per month.",
    url:
      "https://www.amazon.com/ACE-Personal-Trainer-Manual-Professionals/dp/1890720143"
  },
  {
    ideas: "Children Party Planner",
    desc:
      "The children’s birthday party business is a multiple-million dollar industry. If you are a parent, you already know that on average Americans spend about $500 per shindig. If you think you have the personality and patience to command a room full of sugar-infuse kids, this could be a great business for you. There are two main ways to run a children's party service: 1. Operating a mobile service that throws a party at clients' locations and 2. Hosting parties from a rented space or reserved park. The book Start Your Own Kid-Focused Business offers the ins and outs of getting your own business off the ground, focusing on everything from insurance costs to food and beverages to throwing a great party that kids (and their parents) will never forget. Depending on the scope of the party, rates are usually in the $20 per guest zone, with higher rates for more specialized parties.",
    url:
      "https://www.amazon.com/Start-Your-Focused-Business-More/dp/1599182580/?&tag=entbookstore-20"
  },
  {
    ideas: "Bakery Business",
    desc:
      "Between allergy concerns and the desire to have something that blows guests’ minds, specialty cakes, cupcakes and cookies are in high demand. If you have a love for baking and a decent oven, you can start your own operation right out of your kitchen. Or rent a commercial kitchen space if you are looking to go bigger. But with a minimal investment in advertising and ingredients (ingredient costs are only about 15 to 20 percent of the retail sale price in the specialty baking industry) you can expect to start pulling in some decent dough.",
    url:
      "https://www.thriftbooks.com/w/the-business-of-baking-the-book-that-inspires-motivates-and-educates-bakers-and-decorators-to-achieve-sweet-business-success_michelle-z-green/13572788/?mkwid=sRZPk9m9U%7cdc&pcrid=280059949098&pkw=&pmt=&plc=&pgrid=58426391753&ptaid=pla-468782593109&gclid=CjwKCAjw27jnBRBuEiwAdjQXDCf8aEe2ENQ14H6DP-cONQ818WGTEh0ADd7cCsWCUOzKAlku0N4jdRoCThMQAvD_BwE#isbn=0994524102&idiq=15266872"
  },
  {
    ideas: "Social Media Consultant",
    desc:
      "Small business owners who are amazing at making cupcakes might not be so amazing at taking pictures and writing cute captions. Or navigating the changing algorithms of Facebook and Instagram. That’s where you come in. If you basically live online, things come second-nature to you that don’t come second nature to others -- and those people know that they help. To market yourself as a social media guru, you need to first show that you can get results. Build an amazing online and social media presence for yourself, then expand to helping out non-profit groups and friends. Create word of mouth and soon enough, busy bakers, harried restaurant owners and the like will be banging on your virtual door to help them break through the noise and grab customers. Besides utilizing what you already know, there are a ton of free courses and webinars you can take to pick up some new tricks",
    url:
      "https://www.amazon.com/SOCIAL-MEDIA-CONSULTING-BUSINESS-Management-ebook/dp/B01F4L1YH2"
  }
];
Ideas.create(ideas, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${ideas.length} ideas`);
  mongoose.connection.close();
});
