import * as React from 'react';

type BoardItemProps = {
   found?: boolean | null;
   item: {
      front: string,
      type: string,
      value: string
   },
   onClick: (e: React.SyntheticEvent) => void;
}

export const BoardItem = React.memo(({ found, item, onClick }: BoardItemProps) => (
   <div
      className={`${item.value} board__item ${found ? 'found' : ''}`}
      onClick={onClick}
   >
      <section>{item.front}</section>
      {item.type}
      {item.value}
   </div>
));
