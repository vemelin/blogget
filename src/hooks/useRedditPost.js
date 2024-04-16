import {useEffect, useState} from 'react';
import {URL} from '../components/api/const';

const useRedditPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Reddit posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${URL}/best.json?limit=10`);
        const data = await response.json();
        setPosts(data.data.children.map(child => child.data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Reddit posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return [posts, loading];
};

export default useRedditPost;