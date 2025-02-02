// Sample data for car packages
const carPackages = [
    {
        id: 1,
        title: "Metropolitan Police Sedan",
        category: "sedan",
        update: "Updated",
        image: "imgs/mppd/sedan.png",
        description: "The Falcon Police Interceptor Sedan is a high-performance law enforcement vehicle designed for durability, speed, and safety. Built on a robust platform, it features a powerful engine, advanced suspension, and cutting-edge technology to meet the demanding needs of police work. With enhanced handling and pursuit capabilities, the Falcon Police Interceptor Sedan is engineered to excel in urban and highway environments.",
        codes: {
            left1: "13995040784",
            left2: "N/A",
            right1: "13995037071",
            right2: "N/A",
            top1: "13995041856",
            top2: "N/A",
            back1: "N/A",
            back2: "13995043090",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 2,
        title: "Metropolitan Police Utility",
        category: "suv",
        update: "Updated",
        image: "imgs/mppd/fpiu20.png",
        description: "[!] All Falcon (Ford) Police Interceptor Utility liveries are technically compatible with every version of the vehicle, including the 2013, 2019, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Falcon Police Interceptor Utility is a versatile and rugged law enforcement vehicle built to handle a variety of challenges. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and innovative safety features, it provides exceptional performance in both urban and off-road settings. With ample interior space for equipment and personnel, the Falcon Police Interceptor Utility is designed to meet the diverse needs of modern police forces.",
        codes: {
            left1: "13140459966",
            left2: "N/A",
            right1: "13140461716",
            right2: "N/A",
            top1: "13140463962",
            top2: "N/A",
            back1: "13140466148",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 3,
        title: "Metropolitan Police Utility",
        category: "suv",
        update: "Updated",
        image: "imgs/mppd/fpiu13.png",
        description: "[!] All Falcon (Ford) Police Interceptor Utility liveries are technically compatible with every version of the vehicle, including the 2013, 2019, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Falcon Police Interceptor Utility is a versatile and rugged law enforcement vehicle built to handle a variety of challenges. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and innovative safety features, it provides exceptional performance in both urban and off-road settings. With ample interior space for equipment and personnel, the Falcon Police Interceptor Utility is designed to meet the diverse needs of modern police forces.",
        codes: {
            left1: "13126584052",
            left2: "N/A",
            right1: "13126582759",
            right2: "N/A",
            top1: "126286170181554",
            top2: "N/A",
            back1: "73364569983611",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 4,
        title: "Metropolitan Police Utility",
        category: "suv",
        update: "Updated",
        image: "imgs/mppd/fpiu19.png",
        description: "[!] All Falcon (Ford) Police Interceptor Utility liveries are technically compatible with every version of the vehicle, including the 2013, 2019, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Falcon Police Interceptor Utility is a versatile and rugged law enforcement vehicle built to handle a variety of challenges. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and innovative safety features, it provides exceptional performance in both urban and off-road settings. With ample interior space for equipment and personnel, the Falcon Police Interceptor Utility is designed to meet the diverse needs of modern police forces.",
        codes: {
            left1: "13126584052",
            left2: "N/A",
            right1: "13126582759",
            right2: "N/A",
            top1: "13126495450",
            top2: "N/A",
            back1: "128428392211967",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 5,
        title: "Metropolitan Police Eques",
        category: "sedan",
        update: "Updated",
        image: "imgs/mppd/crownvic.png",
        description: "The Falcon Crown Victoria Police Interceptor is a legendary law enforcement vehicle known for its reliability, durability, and commanding presence. Built on a sturdy body-on-frame design, it features a powerful V8 engine, rear-wheel drive, and enhanced suspension for pursuit and patrol duties. Renowned for its spacious interior and proven performance, the Falcon Crown Victoria Police Interceptor remains a symbol of dependable service in police fleets.",
        codes: {
            left1: "13148958633",
            left2: "N/A",
            right1: "13148959997",
            right2: "N/A",
            top1: "13148962043",
            top2: "N/A",
            back1: "13149005064",
            back2: "13148956802",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 6,
        title: "Metropolitan Police Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/mppd/charger11.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "13148880160",
            left2: "N/A",
            right1: "13148876784",
            right2: "N/A",
            top1: "13148878960",
            top2: "N/A",
            back1: "13148877931",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
      }
    },
    {
        id: 7,
        title: "Metropolitan Police Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/mppd/charger15.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "13148823613",
            left2: "N/A",
            right1: "13148822600",
            right2: "N/A",
            top1: "13148825735",
            top2: "N/A",
            back1: "13148824653",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
      }
    },
    {
        id: 8,
        title: "Metropolitan Police Camion PPV",
        category: "suv",
        update: "Updated",
        image: "imgs/mppd/tahoe08.png",
        description: "[!] All Chevlon Camion Police Pursuit Vehicle (Chevrolet Tahoe PPV) liveries are technically compatible with every version of the vehicle, including the 2008, 2018, and 2021 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Chevlon Camion Police Pursuit Vehicle is a robust and versatile law enforcement SUV designed for high-performance operations. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and a durable chassis, it delivers exceptional performance in both urban and rugged terrains. With a spacious interior for officers and equipment, the Chevlon Camion Police Pursuit Vehicle is built to meet the rigorous demands of modern policing.",
        codes: {
            left1: "13140261821",
            left2: "N/A",
            right1: "13140257935",
            right2: "N/A",
            top1: "98205043092386",
            top2: "N/A",
            back1: "13140259745",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 9,
        title: "Metropolitan Police Camion PPV",
        category: "suv",
        update: "Semi-Updated",
        image: "imgs/mppd/tahoe21.png",
        description: "[!] All Chevlon Camion Police Pursuit Vehicle (Chevrolet Tahoe PPV) liveries are technically compatible with every version of the vehicle, including the 2008, 2018, and 2021 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Chevlon Camion Police Pursuit Vehicle is a robust and versatile law enforcement SUV designed for high-performance operations. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and a durable chassis, it delivers exceptional performance in both urban and rugged terrains. With a spacious interior for officers and equipment, the Chevlon Camion Police Pursuit Vehicle is built to meet the rigorous demands of modern policing.",
        codes: {
            left1: "13140348314",
            left2: "N/A",
            right1: "13140342703",
            right2: "N/A",
            top1: "126866871844893",
            top2: "N/A",
            back1: "133203201593323",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 10,
        title: "Metropolitan Police Camion PPV",
        category: "suv",
        update: "Semi-Updated",
        image: "imgs/mppd/tahoe18.png",
        description: "[!] All Chevlon Camion Police Pursuit Vehicle (Chevrolet Tahoe PPV) liveries are technically compatible with every version of the vehicle, including the 2008, 2018, and 2021 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Chevlon Camion Police Pursuit Vehicle is a robust and versatile law enforcement SUV designed for high-performance operations. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and a durable chassis, it delivers exceptional performance in both urban and rugged terrains. With a spacious interior for officers and equipment, the Chevlon Camion Police Pursuit Vehicle is built to meet the rigorous demands of modern policing.",
        codes: {
            left1: "13140261821",
            left2: "N/A",
            right1: "13140257935",
            right2: "N/A",
            top1: "98205043092386",
            top2: "N/A",
            back1: "13140259745",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 11,
        title: "Illinois State Trooper Eques",
        category: "sedan",
        update: "Updated",
        image: "imgs/isp/crownvic.png",
        description: "The Falcon Crown Victoria Police Interceptor is a legendary law enforcement vehicle known for its reliability, durability, and commanding presence. Built on a sturdy body-on-frame design, it features a powerful V8 engine, rear-wheel drive, and enhanced suspension for pursuit and patrol duties. Renowned for its spacious interior and proven performance, the Falcon Crown Victoria Police Interceptor remains a symbol of dependable service in police fleets.",
        codes: {
            left1: "12084395211",
            left2: "N/A",
            right1: "12084417046",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "N/A",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 12,
        title: "Illinois State Trooper WB Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/isp/charger20.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "12084323675",
            left2: "N/A",
            right1: "12084328616",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "12084366653",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 13,
        title: "Illinois State Trooper Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/isp/charger15.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "12084323675",
            left2: "N/A",
            right1: "12084328616",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "12084366653",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 14,
        title: "Illinois State Trooper Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/isp/charger11.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "12084323675",
            left2: "N/A",
            right1: "12084328616",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "12084366653",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 15,
        title: "Illinois State Trooper Stallion 350",
        category: "other",
        update: "Semi-Updated",
        image: "imgs/isp/mustang15.png",
        description: "The Falcon Stallion 350 Police variant is a high-performance law enforcement vehicle built for speed, power, and precision. Equipped with a formidable engine, advanced suspension, and state-of-the-art technology, it excels in high-speed pursuits and rapid response situations. With its striking design and enhanced handling, the Falcon Stallion 350 Police variant offers unmatched agility, making it a top choice for officers in need of exceptional performance and control.",
        codes: {
            left1: "12084100141",
            left2: "N/A",
            right1: "12084093268",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "12084366653",
            back2: "12084125291 (This is not Back2, but instead a secondary option for back 1.",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 16,
        title: "Illinois State Trooper Corbeta TZ",
        category: "other",
        update: "Updated",
        image: "imgs/isp/corvette14.png",
        description: "The Chevlon Corbeta TZ Police variant is a high-performance law enforcement vehicle designed for ultimate speed and agility. Featuring a supercharged V8 engine, advanced handling systems, and cutting-edge technology, it delivers exceptional pursuit capabilities on both highways and urban roads. With a sleek, aerodynamic design and enhanced safety features, the Chevlon Corbeta TZ Police variant combines speed, power, and precision for modern law enforcement needs.",
        codes: {
            left1: "12083746064",
            left2: "N/A",
            right1: "12083785504",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "12083806245",
            back2: "12083836725 (This is not Back2, but instead a secondary option for back 1.",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 17,
        title: "Illinois State Trooper Utility",
        category: "suv",
        update: "Updated",
        image: "imgs/isp/fpiu19.png",
        description: "[!] All Falcon (Ford) Police Interceptor Utility liveries are technically compatible with every version of the vehicle, including the 2013, 2019, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Falcon Police Interceptor Utility is a versatile and rugged law enforcement vehicle built to handle a variety of challenges. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and innovative safety features, it provides exceptional performance in both urban and off-road settings. With ample interior space for equipment and personnel, the Falcon Police Interceptor Utility is designed to meet the diverse needs of modern police forces.",
        codes: {
            left1: "12074337300",
            left2: "N/A",
            right1: "12074406996",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "12074458693",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 18,
        title: "Illinois State Trooper Sedan",
        category: "sedan",
        update: "Updated",
        image: "imgs/isp/sedan17.png",
        description: "The Falcon Police Interceptor Sedan is a high-performance law enforcement vehicle designed for durability, speed, and safety. Built on a robust platform, it features a powerful engine, advanced suspension, and cutting-edge technology to meet the demanding needs of police work. With enhanced handling and pursuit capabilities, the Falcon Police Interceptor Sedan is engineered to excel in urban and highway environments.",
        codes: {
            left1: "12083612491",
            left2: "N/A",
            right1: "12083619144",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "N/A",
            back2: "12083597427",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 19,
        title: "California Highway Patrol Camion",
        category: "suv",
        update: "Updated",
        image: "imgs/chp/tahoe08.png",
        description: "[!] All Chevlon Camion Police Pursuit Vehicle (Chevrolet Tahoe PPV) liveries are technically compatible with every version of the vehicle, including the 2008, 2018, and 2021 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Chevlon Camion Police Pursuit Vehicle is a robust and versatile law enforcement SUV designed for high-performance operations. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and a durable chassis, it delivers exceptional performance in both urban and rugged terrains. With a spacious interior for officers and equipment, the Chevlon Camion Police Pursuit Vehicle is built to meet the rigorous demands of modern policing.",
        codes: {
            left1: "13762181000",
            left2: "N/A",
            right1: "13630528518",
            right2: "N/A",
            top1: "124795595331717",
            top2: "N/A",
            back1: "13630430251",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 20,
        title: "California Highway Patrol Utility",
        category: "suv",
        update: "Updated",
        image: "imgs/chp/fpiu13.png",
        description: "[!] All Falcon (Ford) Police Interceptor Utility liveries are technically compatible with every version of the vehicle, including the 2013, 2019, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Falcon Police Interceptor Utility is a versatile and rugged law enforcement vehicle built to handle a variety of challenges. Equipped with a powerful engine, advanced all-wheel-drive capabilities, and innovative safety features, it provides exceptional performance in both urban and off-road settings. With ample interior space for equipment and personnel, the Falcon Police Interceptor Utility is designed to meet the diverse needs of modern police forces.",
        codes: {
            left1: "13617182197",
            left2: "N/A",
            right1: "13617205853",
            right2: "N/A",
            top1: "13617191725",
            top2: "N/A",
            back1: "13617148890",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 21,
        title: "California Highway Patrol Prancer",
        category: "suv",
        update: "Updated",
        image: "imgs/chp/charger15.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "13608312556",
            left2: "N/A",
            right1: "13762117710",
            right2: "N/A",
            top1: "13608355419",
            top2: "N/A",
            back1: "13608363284",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 22,
        title: "California Highway Patrol Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/chp/charger11.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "13601951654",
            left2: "N/A",
            right1: "13601975159",
            right2: "N/A",
            top1: "13601950691",
            top2: "N/A",
            back1: "13601954244",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 23,
        title: "Alexandria Police Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/alpd/charger11.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "11701468092",
            left2: "N/A",
            right1: "11701472222",
            right2: "N/A",
            top1: "11701479995",
            top2: "N/A",
            back1: "11701476186",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 24,
        title: "Alexandria Police Eques",
        category: "sedan",
        update: "Updated",
        image: "imgs/alpd/charger11.png",
        description: "The Falcon Crown Victoria Police Interceptor is a legendary law enforcement vehicle known for its reliability, durability, and commanding presence. Built on a sturdy body-on-frame design, it features a powerful V8 engine, rear-wheel drive, and enhanced suspension for pursuit and patrol duties. Renowned for its spacious interior and proven performance, the Falcon Crown Victoria Police Interceptor remains a symbol of dependable service in police fleets.",
        codes: {
            left1: "11701521265",
            left2: "N/A",
            right1: "11701525876",
            right2: "N/A",
            top1: "11701528699",
            top2: "N/A",
            back1: "11701532498",
            back2: "11701535928",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 25,
        title: "Alexandria Police Sedan",
        category: "sedan",
        update: "Updated",
        image: "imgs/alpd/sedan17.png",
        description: "The Falcon Police Interceptor Sedan is a high-performance law enforcement vehicle designed for durability, speed, and safety. Built on a robust platform, it features a powerful engine, advanced suspension, and cutting-edge technology to meet the demanding needs of police work. With enhanced handling and pursuit capabilities, the Falcon Police Interceptor Sedan is engineered to excel in urban and highway environments.",
        codes: {
            left1: "11701385304",
            left2: "N/A",
            right1: "11701393633",
            right2: "N/A",
            top1: "11701399298",
            top2: "N/A",
            back1: "11701391019",
            back2: "11701388322",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 26,
        title: "Calorado Highway Patrol Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/calorp/charger15hp.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "11694175540",
            left2: "N/A",
            right1: "11694157793",
            right2: "N/A",
            top1: "11694172103",
            top2: "N/A",
            back1: "11694167212",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 27,
        title: "Calorado Springs Police Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/calorp/charger15pd.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "11694415773",
            left2: "N/A",
            right1: "11694408790",
            right2: "N/A",
            top1: "11694530269",
            top2: "N/A",
            back1: "11694515501",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 28,
        title: "Calorado Springs Police Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/calorp/charger15pd2.png",
        description: "[!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "11694859100",
            left2: "N/A",
            right1: "11694796261",
            right2: "N/A",
            top1: "11694894657",
            top2: "N/A",
            back1: "11694885935",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 29,
        title: "Calorado State Patrol Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/calorp/charger15sp.png",
        description: "[!] You need to change the vehicle color to any grey! Recommend: #8A8A8A\n\n [!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "11699213399",
            left2: "N/A",
            right1: "11699149900",
            right2: "N/A",
            top1: "11699227527",
            top2: "N/A",
            back1: "11699144358",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 30,
        title: "Calorado Douglas County Prancer",
        category: "sedan",
        update: "Updated",
        image: "imgs/ndrp/charger11.png",
        description: "[!] You need to change the vehicle color to any grey! Recommend: #8A8A8A\n\n [!] All Bullhorn Prancer (Dodge Charger) Pursuit liveries are technically compatible with every version of the vehicle, including the 2011, 2015, and 2020 models. However, you may encounter some glitches due to slight differences between the models.\n\n The Bullhorn Prancer Pursuit is a high-powered law enforcement vehicle engineered for speed, agility, and reliability. Featuring a robust engine, advanced performance technology, and a durable design, it excels in high-speed pursuits and demanding conditions. With a sleek profile and modern safety features, the Bullhorn Prancer Pursuit is built to support officers in maintaining control and authority on the road.",
        codes: {
            left1: "11553246139",
            left2: "N/A",
            right1: "11553212786",
            right2: "N/A",
            top1: "N/A",
            top2: "N/A",
            back1: "11553075852",
            back2: "N/A",
            front1: "N/A",
            front2: "N/A"
        }
    },
    {
        id: 31,
        title: "Calorado Douglas County Utility",
        category: "suv",
        update: "Updated",
        image: "imgs/ndrp/fpiu20.png",
        description: "The Falcon Police Interceptor Sedan is a high-performance law enforcement vehicle designed for durability, speed, and safety. Built on a robust platform, it features a powerful engine, advanced suspension, and cutting-edge technology to meet the demanding needs of police work. With enhanced handling and pursuit capabilities, the Falcon Police Interceptor Sedan is engineered to excel in urban and highway environments.",
        codes: {
            left1: "11551551109",
            left2: "N/A",
            right1: "11551547739",
            right2: "N/A",
            top1: "11551521147",
            top2: "N/A",
            back1: "11551464721",
            back2: "N/A",
            front1: "11551457869",
            front2: "N/A"
        }
    }
];

// DOM Elements
const packageGrid = document.getElementById('packageGrid');
const itemupdateSpan = document.getElementById('itemupdate');
const tabButtons = document.querySelectorAll('.tab-btn');
const packageTemplate = document.getElementById('packageTemplate');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

// Current filter state
let currentCategory = 'all';

// Initialize the grid
function initializeGrid() {
    renderPackages(carPackages);
    setupEventListeners();
    initializeModal();
    initializeAnnouncement();
}

// Render packages based on current filter
function renderPackages(packages) {
    packageGrid.innerHTML = '';
    const filteredPackages = currentCategory === 'all' 
        ? packages 
        : packages.filter(pkg => pkg.category === currentCategory);

    if (filteredPackages.length === 0) {
        packageGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No vehicles found</p>
            </div>
        `;
    } else {
        // Add staggered animation
        filteredPackages.forEach((pkg, index) => {
            setTimeout(() => {
                const card = createPackageCard(pkg);
                packageGrid.appendChild(card);
            }, index * 50); // Stagger each card by 50ms
        });
    }

    itemupdateSpan.textContent = filteredPackages.length;
}

// Create a package card from template
function createPackageCard(package) {
    const card = packageTemplate.content.cloneNode(true);
    
    card.querySelector('.package-title').textContent = package.title;
    card.querySelector('.package-update').textContent = `${package.update} `;
    card.querySelector('.package-image img').src = package.image;
    card.querySelector('.package-image img').alt = package.title;

    // Make the card clickable except for the Get button
    const packageCard = card.querySelector('.package-card');
    const getBtn = card.querySelector('.get-btn');
    
    packageCard.addEventListener('click', (e) => {
        if (!e.target.closest('.get-btn')) {
            showPackageDetails(package);
        }
    });

    // Add Get button click handler
    getBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPackageDetails(package);
    });

    return card;
}

// Setup event listeners
function setupEventListeners() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update current category and render
            currentCategory = button.dataset.category;
            renderPackages(carPackages);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    clearSearch.addEventListener('click', clearSearchField);
}

// Modal handling
function initializeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const closeButton = modalOverlay.querySelector('.close-modal');

    closeButton.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
        }
    });
}

function showPackageDetails(package) {
    const modalOverlay = document.getElementById('modalOverlay');
    
    // Update basic content
    modalOverlay.querySelector('.modal-title').textContent = package.title;
    modalOverlay.querySelector('.modal-update').textContent = `${package.update} `;
    const descriptionElement = modalOverlay.querySelector('.modal-description');
    descriptionElement.textContent = package.description;
    descriptionElement.style.whiteSpace = 'pre-wrap';
    
    // Preload image before showing modal
    const img = new Image();
    img.onload = () => {
        modalOverlay.querySelector('.modal-image img').src = package.image;
        modalOverlay.querySelector('.modal-image img').alt = package.title;
        
        // Update codes
        updateModalCodes(package, modalOverlay);
        
        // Show modal with animation
        requestAnimationFrame(() => {
            modalOverlay.classList.add('active');
        });
    };
    img.src = package.image;
}

// Separate function for updating modal codes
function updateModalCodes(package, modalOverlay) {
    const codesGrid = modalOverlay.querySelector('.codes-grid');
    codesGrid.innerHTML = '';

    Object.entries(package.codes).forEach(([key, code]) => {
        const codeItem = document.createElement('div');
        codeItem.className = 'code-item';
        
        const isNA = code === 'N/A';
        
        codeItem.innerHTML = `
            <span>${key.replace(/(\d+)/, ' $1').toUpperCase()}:</span>
            <div class="code-container ${isNA ? 'na' : ''}">
                <code class="code-text">${code}</code>
                ${!isNA ? `
                    <button class="copy-btn" title="Copy code">
                        <i class="fas fa-copy"></i>
                    </button>
                ` : ''}
            </div>
        `;

        if (!isNA) {
            const copyBtn = codeItem.querySelector('.copy-btn');
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(code).then(() => {
                    copyBtn.classList.add('copied');
                    copyBtn.querySelector('i').className = 'fas fa-check';
                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                        copyBtn.querySelector('i').className = 'fas fa-copy';
                    }, 2000);
                });
            });
        }

        codesGrid.appendChild(codeItem);
    });
}

// Update the handleSearch function
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    clearSearch.classList.toggle('visible', searchTerm.length > 0);

    const filteredPackages = carPackages.filter(pkg => {
        const matchesCategory = currentCategory === 'all' || pkg.category === currentCategory;
        const matchesSearch = pkg.title.toLowerCase().includes(searchTerm); // Only search titles
        return matchesCategory && matchesSearch;
    });

    renderPackages(filteredPackages);
}

function clearSearchField() {
    searchInput.value = '';
    clearSearch.classList.remove('visible');
    renderPackages(carPackages);
}

// Update the initializeAnnouncement function
function initializeAnnouncement() {
    const banner = document.getElementById('announcementBanner');
    const closeBtn = document.getElementById('closeAnnouncement');
    const container = document.querySelector('.container');
    
    // Check if the banner was previously closed
    const isBannerClosed = localStorage.getItem('announcementClosed');
    
    if (isBannerClosed) {
        banner.classList.add('hidden');
        container.classList.add('no-banner');
    }
    
    closeBtn.addEventListener('click', () => {
        banner.classList.add('hidden');
        container.classList.add('no-banner');
        localStorage.setItem('announcementClosed', 'true');
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeGrid);

// Add these functions at the end of app.js
function showDonationModal() {
    document.getElementById('donationModal').classList.add('active');
}

function closeDonationModal() {
    document.getElementById('donationModal').classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('donationModal').addEventListener('click', (e) => {
    if (e.target.id === 'donationModal') {
        closeDonationModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('donationModal').classList.contains('active')) {
        closeDonationModal();
    }
}); 