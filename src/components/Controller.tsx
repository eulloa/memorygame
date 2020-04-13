import { BoardData } from '../data/BoardData';

export const hasMatch = (s1: string, s2: string): boolean => s1 === s2;
export const pairsToMatch = BoardData.length / 2;
