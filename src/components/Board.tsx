import * as React from 'react';
import { useEffect, useState } from 'react';
import { BoardItem } from './BoardItem';
import { BoardData } from '../data/BoardData';
import { hasMatch, pairsToMatch } from './Controller';

type BoardProps = {
   children? : React.ReactChild;
};

export const Board = ({ children }: BoardProps) => {
   const [board, setBoard] = useState<any>(BoardData);
   const [indexOne, setIndexOne] = useState<number | null>(null);
   const [indexTwo, setIndexTwo] = useState<number | null>(null);
   const [matchedPairs, setMatchedPairs] = useState<number>(0);
   const [selectedValueOne, setSelectedValueOne] = useState<string>('');
   const [selectedValueTwo, setSelectedValueTwo] = useState<string>('');
   useEffect(() => checkMatch(), [selectedValueTwo]);

   const onClickHandler = (index: number) => (e: React.SyntheticEvent) => {
      const value = e.currentTarget.className[0];

      if (!selectedValueOne) { 
         setSelectedValueOne(value);
         setIndexOne(index);
         return;
      }
      if (!selectedValueTwo) { 
         setSelectedValueTwo(value);
         setIndexTwo(index);
         return;
      }
   }

   const reset = () => {
      setIndexOne(null);
      setIndexTwo(null);
      setSelectedValueOne('');
      setSelectedValueTwo('');
   }

   const checkMatch = () => {
      if (Boolean(selectedValueOne) && Boolean(selectedValueTwo)) {
         if (hasMatch(selectedValueOne, selectedValueTwo)) {
            const updatedBoard = board.map((boardItem: any, i: number) => {
               boardItem.found = i === indexOne || i === indexTwo ? true : boardItem.found;
               return boardItem;
            });
            setBoard(updatedBoard);
            setMatchedPairs(matchedPairs => matchedPairs + 1);
            reset();
         } else {
            reset();
         }
      }
   }

   if (matchedPairs === pairsToMatch) {
      return <p>You win!</p>;
   }

   return (
      <div className="board">
         {children ? children : null}
         {board.map(((data: any, i: number) => 
            <BoardItem
               found={data.found}
               item={data}
               key={`board-item-${i}`}
               onClick={onClickHandler(i)}
               selected={i === indexOne || i === indexTwo ? true : false}
            />
         ))}
      </div>
   )
}
