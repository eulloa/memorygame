import * as React from 'react';

type GameProps = {
   children: React.ReactChild;
}

export const Game = ({ children }: GameProps) => <div className="game">{children}</div>
