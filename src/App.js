import { useState, useEffect } from 'react';
import brand from 'assets/brand.svg';
import Card from 'components/Card';

function App() {
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxc4vXzap0Mx2ZoLyiduNHfn3BKFvVE9bqPgiuLFFa3aRtdcEHcyOlEfA/exec',
      );
      const json = await response.json();
      setCardList(json.sort((a, b) => b.thisWeekSuccessRate - a.thisWeekSuccessRate));
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <header className="p-2.5 bg-purple-900 sticky top-0 w-screen">
        <div className="flex items-center container mx-auto">
          <img className="w-12 mr-3" src={brand} alt="logo" />
          <div className="text-white text-2xl font-bold">Habitica 學習挑戰</div>
        </div>
      </header>
      <div className={`container flex flex-wrap mx-auto my-5 ${isLoading ? 'flex-grow justify-center items-center' : ''}`}>
        {isLoading ? (
          <>
            <svg className="animate-spin h-3 w-3 mr-5 bg-purple-900" viewBox="0 0 24 24" />
            <svg className="animate-spin h-3 w-3 mr-5 bg-purple-700" viewBox="0 0 24 24" />
            <svg className="animate-spin h-3 w-3 mr-5 bg-purple-500" viewBox="0 0 24 24" />
          </>
          
        ) : cardList.length > 0 && cardList.map((d) => <Card key={d.username} {...d} />)}
      </div>
    </div>
  );
}

export default App;
