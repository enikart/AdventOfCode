export default function calculateLetterPoint(letter: string): number {
    // As said in the exercise, the values between a -> z and between A -> Z are linear
    // As are the ascii code for alphabet !
    // So if the ascii code is > 90 (Uppercase stops at 89) its a lowercase.
    if (letter.charCodeAt(0) > 90) {
        // Lowercase starts at 1 on our exercise but 97 on ascii table so ascii code - 96 = points
        return letter.charCodeAt(0) - 96;
    } else {
        // Uppercases starts at 27 on our exercise but 65 on ascii table so ascii code - 38 = points
        return letter.charCodeAt(0) - 38;
    }
}