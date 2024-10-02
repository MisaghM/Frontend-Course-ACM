import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import PageLayout from 'components/layout/PageLayout';
import Hero from 'components/home/Hero';
import Cards from 'components/home/Cards';
import About from 'components/home/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/stylesheets/global.css';
import 'assets/stylesheets/cards.css';
import 'assets/stylesheets/home.css';

const fetchRestaurants = async query => {
  const response = await fetch(`/api/restaurants?${query}`);
  if (response.ok) {
    const body = await response.json();
    return body.data.pageList;
  }
  toast.error('Error fetching home restaurants');
  return [];
}

function Home() {
  useEffect(() => { document.title = 'Home'; }, []);

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const queryTopRating = new URLSearchParams({ page: 1, sort: 'rating' });
    const fetchLists = async () => {
      const resList = await fetchRestaurants(queryTopRating);
      setRestaurants(resList.slice(0, 6));
    }
    fetchLists();
  }, []);

  return (
    <PageLayout>
      <Hero />
      <Cards topText="Top Restaurants in Mizdooni" restaurants={restaurants} />
      <About />
    </PageLayout>
  );
}

export default Home;
