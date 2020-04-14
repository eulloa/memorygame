import * as React from 'react';
import blue from '../images/blue.png';
import front from '../images/front.png';
import red from '../images/red.png';

type BoardItemProps = {
   found?: boolean | null;
   item: {
      background: string,
      value: string
   },
   onClick: (e: React.SyntheticEvent) => void;
   selected?: boolean;
}

export const BoardItem = React.memo(({ found, item, onClick, selected }: BoardItemProps) => (
   <div
      className={`${item.value} flip-container board__item ${found ? 'found' : ''} ${selected ? 'selected': ''}`}
      onClick={onClick}
   >
      <div className={`flipper ${selected ? 'hover': ''}`}>
         <section className={`front flipper ${selected ? 'hover': ''}`}>
            <img src={front} alt="front of playing card" />
            <span>{item.value}</span>
         </section>
         <section className="back">
            <img src={item.background === 'red' ? red : blue} alt="back of playing card" />
         </section>
      </div>
   </div>
));
