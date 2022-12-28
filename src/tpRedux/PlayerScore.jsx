import { useSelector } from 'react-redux';
export const PlayerScore = () => {
  const player1JeuxGanges = useSelector(
    (state) => state.player1JeuxGanges
  );
  const player2JeuxGanges = useSelector(
    (state) => state.player2JeuxGanges
  );
  return (
    <div>
      <div className="player-games">
        <p>Player 2</p>
        <p>{player1JeuxGanges} jeux gagnés</p>
      </div>
      <div className="player-games">
        <p>Player 2</p>
        <p>{player2JeuxGanges} jeux gagnés</p>
      </div>
    </div>
  );
};
