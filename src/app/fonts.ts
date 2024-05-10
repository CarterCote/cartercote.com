import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'


export const drukWide = localFont({
    src: "../../public/fonts/Druk-Wide-Bold.ttf",
    display: "swap",
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
});

// export const aeonik_bold = localFont({
//     src: "../../public/fonts/Aeonik-Bold.otf",
//     display: "swap",
// });

// export const aeonik_regular = localFont({
//     src: "../../public/fonts/Aeonik-Regular.otf",
//     display: "swap",
// });