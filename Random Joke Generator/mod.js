document.addEventListener('DOMContentLoaded', function () {
        
               
    let jokes=[
{
"category": "Programming",
"type": "single",
"joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 0,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 35,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 184,
"safe": false,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 41,
"safe": true,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
"flags": {
"nsfw": true,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": true
},
"safe": false,
"id": 289,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 18,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": true
},
"id": 55,
"safe": false,
"lang": "en"
},
{
"category": "Pun",
"type": "single",
"joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.\n11 years old and he still doesn't know my name is Brian.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 200,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 5,
"safe": true,
"lang": "en"
},
{
"category": "Pun",
"type": "single",
"joke": "Oysters hate to give away their pearls because they are shellfish.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false,
"explicit": false
},
"id": 90,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 37,
"safe": true,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "Stop being homophobic and rude to the LGBTQ+ community. You should be thanking them for saving us plenty of room in heaven.",
"flags": {
    "nsfw": false,
    "religious": true,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 114,
"safe": false,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "My husband and I were happy for 20 years. And then we met.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"safe": true,
"id": 273,
"lang": "en"
},
{
"category": "Pun",
"type": "single",
"joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 185,
"safe": true,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "A perfectionist walked into a bar... apparently, the bar was not set high enough.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"safe": true,
"id": 288,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": true
},
"safe": false,
"id": 307,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": true,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 233,
"safe": false,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 259,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 27,
"safe": false,
"lang": "en"
},
{
"category": "Pun",
"type": "single",
"joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 204,
"safe": false,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "Schrödinger's cat walks into a bar and doesn't.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 197,
"safe": true,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "Never date a baker. They're too kneady.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"safe": true,
"id": 271,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 37,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 41,
"safe": true,
"lang": "en"
},
{
"category": "Pun",
"type": "single",
"joke": "How do you make holy water? You boil the hell out of it.",
"flags": {
    "nsfw": false,
    "religious": true,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 202,
"safe": false,
"lang": "en"
},
{
"category": "Pun",
"type": "single",
"joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 204,
"safe": false,
"lang": "en"
},
{
"category": "Misc",
"type": "single",
"joke": "A neutron walks into a bar and asks for a price on a drink.\nThe barkeeper says: \"For you... no charge!\"",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 73,
"safe": true,
"lang": "en"
},
{
"category": "Programming",
"type": "single",
"joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
},
"id": 180,
"safe": true,
"lang": "en"
},
{
"category": "Dark",
"type": "single",
"joke": "Hey girl are you a school? Because I want to shoot some kids up inside of you.",
"flags": {
    "nsfw": true,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": true
},
"safe": false,
"id": 269,
"lang": "en"
},
{
"category": "Dark",
"type": "single",
"joke": "I was going to tell a dead baby joke. But I decided to abort.",
"flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": true
},
"id": 207,
"safe": false,
"lang": "en"
}
]

let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let container = document.querySelector('.container');
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    container.innerHTML = `<p>${randomJoke.joke}</p>`;
});
});