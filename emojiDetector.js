function emojiDetector (input){
    let text = input[0];
    let digits = text.match(/\d/g);
    let threshold = 1;
    for (const digit of digits) {
        threshold *= digit;
    }
    console.log(`Cool threshold: ${threshold}`);
    let emojis = text.match(/(:{2}|\*{2})[A-Z][a-z]{2,}\1/gm);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    let coolEmojis = [];
    for (const emoji of emojis) {
        let emojiText = emoji.substring(2,emoji.length-2);
        let emojiCoolnes = 0;
        for (let i = 0; i < emojiText.length; i++){
            let currentChar = emojiText.charCodeAt(i);
            emojiCoolnes += currentChar;
        }
        if(emojiCoolnes>=threshold){
            console.log(emoji);
        }
    }
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);