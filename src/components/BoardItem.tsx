import * as React from 'react';

type BoardItemProps = {
   found?: boolean | null;
   item: {
      background: string,
      front: string,
      type: string,
      value: string
   },
   onClick: (e: React.SyntheticEvent) => void;
   selected?: boolean;
}

export const BoardItem = React.memo(({ found, item, onClick, selected }: BoardItemProps) => (
   <div
      className={`${item.value} board__item ${found ? 'found' : ''} ${selected ? 'selected': ''} bg-${item.background}`}
      onClick={onClick}
   >
      <section>
         {item.front}
      </section>
      <section className={`${selected ? '' : 'hide'}`}>
         {item.type}
         {item.value}
      </section>
   </div>
));
