import * as React from 'react';
import { navigate } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import LibraryLayout from '../layout/libraryLayout.js';
import ContentContainer from '../components/contentContainer.js';
import LoadingSpinner from '../components/loadingSpinner';
import PlaylistCard from '../components/playlistCard';
import ErrorDialog from '../components/errorDialog'
import Button from '../components/button.js';

const ShufflePage = ({ location }) => {
  const [playlists, setPlaylists] = React.useState({})
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const fetchPlaylists = async (token) => {
    const res = await fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).then(response => {
      return response.json()
    }).then(response => {
      console.log(response)
      return {
        error: response.error ? true : false,
        data: response
      }
    }).catch(error => {
      return {
        error: true,
        data: error
      }
    })

    return res
  }

  React.useEffect(async () => {
    // Set loading to true
    setLoading(true);

    // Check for state (state will be null if user navigates to this page directly)
    if (!location.state) {
      navigate('/')
      return
    }

    // Fetch list of playlists for the current user
    const response = await fetchPlaylists(location.state.token)
    console.log(response)

    // Check for error property in API response
    if (response.error) {
      setError(response.data.error);
      setLoading(false);
      return
    }

    // TODO: I think there's a better way to set these using destructuring
    setPlaylists({
      offset: response.data.offset,
      limit: response.data.limit,
      items: response.data.items,
      total: response.data.total
    })

    setLoading(false);

  }, [])

  const handleSelected = (item) => {
    setPlaylists({...playlists, items: playlists.items.filter(element => element.id === item.id)})
  }

  return (
    <LibraryLayout>
      <ContentContainer>
        {
          loading ? <LoadingSpinner /> : (
            error ? <ErrorDialog>Error: <br/> {error.message}</ErrorDialog> : (
              <div>
                  <AnimatePresence>
                <motion.h2 
                  style={{fontSize: "28px", marginBottom: "16px" }}
                  layout
                  initial={{
                    opacity: 0,
                    x: -200
                  }} 
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    x: 200
                  }}
                  transition={{
                    type: "spring",
                    mass: 0.35,
                    stiffness: 75,
                    duration: 0.3
                  }}
                >
                  Select a playlist
                </motion.h2>
                {
                  playlists.items.map((item) => {
                    return (
                      // Check to see if the user owns the current playlist
                      <PlaylistCard 
                        image={item.images.length === 3 ? item.images[1].url : item.images[0].url} 
                        disabled={item.owner.id === location.state.id ? false : true} 
                        key={item.id}
                        id={item.id}
                        onClick={handleSelected}
                        item={item}
                      >
                        <p style={{marginBottom:'4px', fontFamily: 'GothamSSm-Book', fontSize: '18px'}}>
                        {item.name}
                        </p>
                        <p style={{color: '#919496', fontFamily: 'GothamSSm-Book', fontSize: '12px'}}>
                          {item.tracks.total} Songs
                        </p>
                      </PlaylistCard>
                    )
                  })
                }
                <motion.div
                  layout
                  style={{display: 'flex', alignItems: 'center'}}
                  layout
                  initial={{
                    opacity: 0,
                    x: -200
                  }} 
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    x: 200
                  }}
                  transition={{
                    type: "spring",
                    mass: 0.35,
                    stiffness: 75,
                    duration: 0.3
                  }}
                >
                {

                }
                <Button
                  color="white"
                  variant={playlists.items.length === 1 ? "outline" : "disabled"}
                  >
                  SHUFFLE
                </Button>
                  </motion.div>
                </AnimatePresence>
                </div>
            )
          )
        }
      </ContentContainer>
    </LibraryLayout>
  )
}

export default ShufflePage;

/*
If an element gets selected
selectedElement goes form null to string
when that happens, check string against item.id
if string does not match, 
*/