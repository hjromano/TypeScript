// Enum

//enum Direction {
   // North=1,
   // South,
   // East,
   // West
//}

//const pos = {
    //x: 100,
   // y: 230,
   // direction: Direction.East
//}

//enum ClothingSize {
  //  Small = 'P',
   // Medium = 'M',
   // Large = 'G',
    //ExtraLarge = 'GG'
//}

//const cloth = {
  //  color: 'red',
   // size: ClothingSize.Medium
//}

enum ButtonStyle {
    Green,
    Blue,
    Red,
    Gray
}
interface Button {
    label: string;
    emoji: string;
    style: ButtonStyle;
}

const button: Button = {
    label: 'Click me',
    emoji: '👍',
    style: ButtonStyle.Green
}