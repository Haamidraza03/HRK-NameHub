import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import SearchBar      from './components/SearchBar';
import WelcomeScreen  from './components/WelcomeScreen';
import UserGrid       from './components/UserGrid';
import UserDetail     from './components/UserDetail';
import Footer from './components/Footer';

function App() {

  const [query, setQuery]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [users, setUsers]       = useState([]);
  const [selected, setSelected] = useState(null);

  // 1. Search users by full name
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSelected(null);
    try {
      const res = await axios.get(
        `https://api.github.com/search/users`,
        { params: { q: `fullname:${query}`, per_page: 30 } }
      );
      setUsers(res.data.items);
    } catch (err) {
      console.error(err);
      alert('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  // 2. Fetch full profile + repos for a single user
  const loadDetails = async (login) => {
    setLoading(true);
    try {
      const [profileRes, reposRes] = await Promise.all([
        axios.get(`https://api.github.com/users/${login}`),
        axios.get(`https://api.github.com/users/${login}/repos`, {
          params: { per_page: 100, sort: 'updated' }
        })
      ]);
      setSelected({
        profile: profileRes.data,
        repos: reposRes.data
      });
    } catch (err) {
      console.error(err);
      alert('Error loading user details');
    } finally {
      setLoading(false);
    }
  };

  // 3. Reset to user grid
  const backToGrid = () => setSelected(null);

  // Decide which main area to render
  let mainArea;
  if (loading) {
    mainArea = (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" />
        <div>Searching for "{query}"...</div>
      </div>
    );
  } else if (selected) {
    mainArea = <UserDetail data={selected} onBack={backToGrid} />;
  } else if (users.length > 0) {
    mainArea = <UserGrid users={users} onSelect={loadDetails} />;
  } else {
    mainArea = <WelcomeScreen />;
  }

  useEffect(()=>{
    AOS.init({once:"true"});
  },[])

  return (
      <>
    <Container className="py-5 mt-0 text-white">
        {mainArea}
        <center>
        <SearchBar
        query={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />
      </center>
    <Footer/>
    </Container>
      </>
  );
}

export default App;
