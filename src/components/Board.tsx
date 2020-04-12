import * as React from 'react';
import { useState } from 'react';
import { BoardData } from '../data/BoardData';
import { BoardItem } from './BoardItem';

type BoardProps = {
   children? : React.ReactChild;
};

const hasMatch = (s1: string, s2: string): boolean => s1 === s2;

export const Board = ({ children }: BoardProps) => {
   const [board, setBoard] = useState<any>(BoardData);
   const [indexOne, setIndexOne] = useState<number | null>(null);
   const [indexTwo, setIndexTwo] = useState<number | null>(null);
   const [selectedValueOne, setSelectedValueOne] = useState<string>('');
   const [selectedValueTwo, setSelectedValueTwo] = useState<string>('');

   const onClickHandler = (index: number) => (e: React.SyntheticEvent) => {
      const value = e.currentTarget.className[0];
      console.log(value, index);

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

   if (selectedValueOne && selectedValueTwo) {
      if (hasMatch(selectedValueOne, selectedValueTwo)) {
         // TODO: user has found a match, show the matching pair face up
         console.log('match');
         reset();
      } else {
         console.log('no match')
         reset();
      }
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
            />
         ))}
      </div>
   )
}
