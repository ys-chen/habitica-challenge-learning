import Badge from 'components/Badge';
import Pie from 'components/Pie';

function Card({username, target, content, minPerWeek, minCost, targetMininutes, payMinutes, totalSuccessRate, thisWeekpayMinutes, thisWeekSuccessRate }) {
  return (
    <div className="p-5 md:p-2 w-full lg:w-1/3 xl:w-1/4">
      <div className="flex shadow-md bg-white overflow-hidden rounded">
        <div className="bg-purple-700 px-2 py-3">
          <Badge username={username} />
        </div>
        <div className="p-2 w-full">
          <div className="flex flex-wrap items-baseline justify-between">
            <div className="font-bold flex-shrink-0">🎯 {target}</div>
            <div className="mt-2 text-sm text-gray-600">@{username}</div>
          </div>
          <div className="text-sm text-gray-600">{content}</div>
          <hr className="my-1" />
          <div className="flex items-center">
            <ul className="flex-shrink-0 text-sm">
              <li>每週預計投入：{minPerWeek} 分鐘</li>
              <li>本週實際投入：{thisWeekpayMinutes} 分鐘</li>
              <li>挑戰預計投入：{targetMininutes} 分鐘</li>
              <li>挑戰實際投入：{payMinutes} 分鐘</li>
            </ul>
            <Pie title="本週達成率" value={thisWeekSuccessRate * 100} />
            {/* <Pie title="挑戰達成率" value={totalSuccessRate * 100} /> */}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Card;