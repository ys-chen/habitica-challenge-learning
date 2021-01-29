import { badgeList } from 'context/badge';

function Badge({ username }) {
  return (
    <div className="w-8 h-8 p-1.5 rounded-full bg-white">
      <img src={badgeList[username]} alt="class badge" />
    </div>
  );
}

export default Badge;