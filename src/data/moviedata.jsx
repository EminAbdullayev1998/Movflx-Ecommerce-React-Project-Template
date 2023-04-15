import { v4 as uuidv4 } from 'uuid';
import marvel from '../img/marvel.jpg'
import netflix from '../img/netflix.jpg'
import wednesday from '../img/wednesday.mp4'
import womensday from '../img/movieOne.jpg'
import perfectmatch from '../img/movieTwo.jpg'
import dogwoof from '../img/movieThree.jpg'
import easyreach from '../img/movieFour.jpg'
import cooking from '../img/movieFive.jpg'
import hikaru from '../img/movieSix.jpg'
import lifequotes from '../img/movieSeven.jpg'
import beachball from '../img/movieEight.jpg'
import anotherdream from '../img/movieNine.jpg'
import cat from '../img/movieTen.jpg'
import avatar from '../img/movieEleven.jpg'
import sports from '../img/movieTwelve.jpg'
import thor from '../img/movieThirteen.jpg'
import blackwidow from '../img/movieFourteen.jpg'
import thelastofus from '../img/movieFifteen.jpg'
import witcher from '../img/movieSixteen.jpg'
import sportnight from '../img/movieSeventeen.jpg'
import breakpoint from '../img/movieEighteen.jpg'
import wednesdayposter from '../img/movieNineteen.png'
import mayfairwitches from '../img/movieTwenty.jpg'



const moviedata = [
    {
        id: uuidv4(),
        img: womensday,
        thumb1: marvel,
        thumb2: netflix,
        trailer: wednesday,
        title:"Women's Day",
        desc:"Five childhood friends, who are married, decide to go on a trip out of the city to celebrate women's day. These women lie to their husbands about this trip and book a bungalow to stay. An issue arises when they get trapped in the bungalow, which leads to a huge twist.",
        quality:"HD",
        rating: 3.5,
        price: 4.5,
        year: 2022,
        duration: "128 min",
        category:"tv shows",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: perfectmatch,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Perfect Match",
        desc:"Charlie (Terrence J) is a bachelor who's convinced that relationships are dead despite his therapist sister's (Paula Patton) and his friends' attempts to tell him otherwise. On a bet he decides to stay with one woman for one month to prove that he is immune to love. Soon, he meets the beautiful and mysterious Eva (Cassie Ventura) and coaxes her into a casual affair. But as Charlie spends more time with Eva, he begins to question whether he may actually want more than just a one-night-stand.",
        quality:"2K",
        rating: 6.3,
        price: 9.5,
        year: 2022,
        duration: "95 min",
        category:"sports",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: dogwoof,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Dog Woof",
        desc:"Love at first sniff for two bulldogs sparks an unlikely romance between an overworked businesswoman and a pro wrestler in this bark-out-loud comedy. Charmed into accepting a surprise marriage proposal – for her dog! – Ulrika Schmidt falls for Matthew “The Manimal” Pierce while planning their canines’ nuptials. This blissful escape is just what the young executive needs. But the honeymoon is cut short when her overbearing CEO/father steps in to break up the couples. Suddenly, a feel-good dog wedding becomes the battleground where she must choose whether to remain obedient to her father or carve her own path in life.",
        quality:"4K",
        rating: 7.5,
        price: 3,
        year: 2021,
        duration: "96 min",
        category:"documentary",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: easyreach,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Easy Reach",
        desc:"Five childhood friends, who are married, decide to go on a trip out of the city to celebrate women's day. These women lie to their husbands about this trip and book a bungalow to stay. An issue arises when they get trapped in the bungalow, which leads to a huge twist.",
        quality:"HD",
        rating: 7.5,
        price: 5,
        year: 2021,
        duration: "80 min",
        category:"comedy",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: cooking,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Cooking",
        desc:"It's a long holiday weekend at the Lambda Epsilon Zeta sorority house, and a handful of girls stay behind to indulge in three days of partying and strangely delicious meals prepared by the weird new chef. But as the sisters begin to disappear one-by-one, the remaining coeds find themselves trapped in a nightmare of graphic slaughter, involuntary cannibalism, and heaping helpings of gourmet nudity.",
        quality:"4K",
        rating: 4.5,
        price: 4,
        year: 2021,
        duration: "82 min",
        category:"tv shows",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: hikaru,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Hikaru",
        desc:"love story of a mountain man who comes to Tokyo from Hokkaido and a club singer who can no longer sing, with astonishing visual beauty.",
        quality:"2K",
        rating: 7.2,
        price: 7,
        year: 2022,
        duration: "80 min",
        category:"documentary",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: lifequotes,
        thumb1: marvel,
        thumb2: netflix,
        title:"Life Quotes",
        desc:"A team of scientists aboard the International Space Station discover a rapidly evolving life form that caused extinction on Mars and now threatens all life on Earth.",
        quality:"2K",
        rating: 7.5,
        price: 8,
        year: 2022,
        duration: "104 min",
        category:"comedy",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: beachball,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Beachball",
        desc:"Charlie Harrison dreams of being a rock star and, with the help of friends and a gang of local toughs, he arranges a concert in his house for a big time record producer or at least that is what Charlie thought he was arranging.",
        quality:"HD",
        rating: 5.0,
        price: 9,
        year: 2021,
        duration: "77 min",
        category:"sports",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: anotherdream,
        thumb1: marvel,
        thumb2: netflix,
        title:"I Dream in Another Language",
        desc:"A millenary language agonizes: Its last two speakers, Evaristo and Isauro (70's) had a quarrel 50 years ago and haven't spoken to each other since. Martin, a linguist, will undertake the challenge of bringing the two old friends back together and convince them to talk again in order for him to be able to obtain a record of the language. Yet, hidden in the past, in the core of the jungle, lies a secret hidden in the language that makes it difficult to believe that the heart of Zikril will beat again.",
        quality:"HD+",
        rating: 9.1,
        price: 10,
        year: 2022,
        duration: "120 min",
        category:"tv shows",
        top:"top rated"
    },
    {
        id: uuidv4(),
        img: cat,
        thumb1: marvel,
        thumb2: netflix,
        title:"Puss in Boots: The Last Wish",
        desc:"Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        quality:"2K",
        rating: 9.5,
        price: 11,
        year: 2022,
        duration: "103 min",
        category:"comedy",
    },
    {
        id: uuidv4(),
        img: avatar,
        thumb1: marvel,
        thumb2: netflix,
        title:"Avatar: The Way of Water",
        desc:"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        quality:"4K",
        rating: 9.1,
        price: 15,
        year: 2022,
        duration: "240 min",
        category:"documentary",
        new: true
    },
    {
        id: uuidv4(),
        img: sports,
        thumb1: marvel,
        thumb2: netflix,
        title:"Sports",
        desc:"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        quality:"HD",
        rating: 6.2,
        price: 12,
        year: 2021,
        duration: "110 min",
        category:"sports",
    },
    {
        id: uuidv4(),
        img: thor,
        thumb1: marvel,
        thumb2: netflix,
        title:"Thor: Love and Thunder",
        desc:"Thor's retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who - to Thor's surprise - inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late.",
        quality:"HD+",
        rating: 6.3,
        price: 10,
        year: 2022,
        duration: "118 min",
        category:"tv shows",
        new: true
    },
    {
        id: uuidv4(),
        img: blackwidow,
        thumb1: marvel,
        thumb2: netflix,
        title:"Black Widow",
        desc:"In Marvel Studios' action-packed spy thriller 'Black Widow', Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger",
        quality:"2K",
        rating: 6.7,
        price: 11,
        year: 2021,
        duration: "134 min",
        category:"documentary",
        new: true
    },
    {
        id: uuidv4(),
        img: thelastofus,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Last Of Us",
        desc:"After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl, who may be humanity's last hope.",
        quality:"2K",
        rating: 7.1,
        price: 13,
        year: 2022,
        duration: "80 min",
        category:"comedy",
        new: true
    },
    {
        id: uuidv4(),
        img: witcher,
        thumb1: marvel,
        thumb2: netflix,
        title:"The Witcher",
        desc:"The Witcher is a fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.",
        quality:"4K",
        rating: 8.1,
        price: 15,
        year: 2022,
        duration: "80 min",
        category:"2022",
        new: true
    },
    {
        id: uuidv4(),
        img: sportnight,
        thumb1: marvel,
        thumb2: netflix,
        title:"Sports Night",
        desc:"Casey McCall and Dan Rydell are sports anchors and best friends. On Sports Night, their nightly cable program, the two display their unique talent and skills in reporting up-to-the-minute sports news. When they step off-camera, office romances and sports-related hijinks ensue.",
        quality:"4K",
        rating: 8.3,
        price: 8,
        year: 2021,
        duration: "60 min",
        category:"sports",
        new: true
    },
    {
        id: uuidv4(),
        img: breakpoint,
        thumb1: marvel,
        thumb2: netflix,
        title:"Break Point",
        desc:"Follows a select group of top tennis players on and off the court as they compete in gruelling Grand Slams and tournaments all over the world. Their dream: lifting a trophy and becoming number one. As some of tennis' legends reach the twilight of their careers, this is the chance for a new generation to claim the spotlight. Break Point gets up close and personal with these players over a year competing across the globe in the ATP and WTA tours.",
        quality:"HD",
        rating: 7.4,
        price: 7,
        year: 2021,
        duration: "55 min",
        category:"2022",
        new: true
    },
    {
        id: uuidv4(),
        img: wednesdayposter,
        thumb1: marvel,
        thumb2: netflix,
        title:"Wednesday",
        desc:"A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago - all while navigating her new and very tangled relationships at Nevermore.",
        quality:"4K",
        rating: 8.2,
        price: 10,
        year: 2022,
        duration: "65 min",
        category:"2022",
        new: true
    },
    {
        id: uuidv4(),
        img: mayfairwitches,
        thumb1: marvel,
        thumb2: netflix,
        title:"Mayfair Witches",
        desc:"The series will focus on an intuitive young neurosurgeon (Alexandra Daddario) who discovers that she is the unlikely heir to a family of witches. As she grapples with her newfound powers, she must contend with a sinister presence (Jack Huston) that has haunted her family for generations.",
        quality:"4K",
        rating: 6.6,
        price: 9,
        year: 2022,
        duration: "60 min",
        category:"2022",
        new: true
    },

]

export default moviedata;