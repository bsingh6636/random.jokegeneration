// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }


const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a fish wearing a crown? A kingfish!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow become a successful motivational speaker? Because he was outstanding in his field!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you organize a space party? You planet!",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why did the cookie go to the hospital? Because it felt crumbly.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "How do you organize a space party? You planet!",
    "What do you call a fish wearing a crown? A kingfish!",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An impasta!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you organize a space party? You planet!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why did the scarecrow become a successful motivational speaker? Because he was outstanding in his field!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "What do you call a fake noodle? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What's orange and sounds like a parrot? A carrot!",
    "What do you call a fish wearing a crown? A kingfish!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why did the scarecrow become a successful motivational speaker? Because he was outstanding in his field!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "What do you call a fake noodle? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What's orange and sounds like a parrot? A carrot!",
    "What do you call a fish wearing a crown? A kingfish!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer iOS development? Because on iOS, there are no Windows or Gates.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+ALT+DEL.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers always carry a paper? Because you can't fix a paper jam with CTRL+"
  ];
  
  const reload = () =>{
    let joke=Math.floor(Math.random()*jokes.length);
    joke=parseInt(joke)
    console.log(jokes[joke]);
    var jokkes=document.getElementsByClassName('jokes')[0];
    jokkes.innerHTML=jokes[joke]

}
reload();