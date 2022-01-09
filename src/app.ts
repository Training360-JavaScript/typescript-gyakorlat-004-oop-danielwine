// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1, 'Emily', 'female', 16, 100),
    new HumanHero(2, 'George', 'male', 66, 100),
    new HumanHero(3, 'Steven', 'male', 26, 65)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(1, 'Machine 1', 2, 4, 'Clan 1'),
    new TransformerHero(2, 'Machine 2', 1, 2, 'Clan 2'),
    new TransformerHero(3, 'Machine 3', 1, 6, 'Clan 3'),
];
