import * as React from 'react';
import { navigate } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import LibraryLayout from '../layout/libraryLayout.js';
import ContentContainer from '../components/contentContainer.js';
import LoadingSpinner from '../components/loadingSpinner';
import ErrorDialog from '../components/errorDialog';
import PlaylistCard from '../components/playlistCard.js';

// Total tracks: location.state.list.tracks.total
// Playlist ID: location.state.list.id
// Library

// Create an array of length n where each element is equal to its index
const createArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
};

const RunPage = ({ location }) => {
  const [loaded, setLoaded] = React.useState(50);
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    // Check for state (state will be null if user navigates to this page directly)
    if (!location.state) {
      navigate('/');
    }
  }, []);

  return (
    <LibraryLayout>
      <ContentContainer>
        <motion.div
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
            type: 'spring',
            mass: 0.35,
            stiffness: 75,
            duration: 0.3
          }}
        >
          <motion.h2
            key="1"
            style={{ fontSize: '28px', marginBottom: '16px' }}
            layout
          >
            { songs.length < location.state.list.tracks.total ? 'Retrieving songs...' : (
              <>
                {location.state.method === 'shuffle' && 'Shuffling...'}
                {location.state.method === 'sort' && 'Sorting...'}
                {location.state.method === 'queue' && 'Queueing...'}
              </>
            )}
          </motion.h2>
          <AnimatePresence>
            <PlaylistCard
              image={location.state.list.images.length === 3 ? location.state.list.images[1].url : location.state.list.images[0].url}
              disabled
              key={location.state.list.id}
              id={location.state.list.id}
              item={location.state.list}
              loaded={loaded}
            >
              <p style={{
                color: '#fff', marginBottom: '4px', fontFamily: 'GothamSSm-Book', fontSize: '18px'
              }}
              >
                {location.state.list.name}
              </p>
              <p style={{ color: '#919496', fontFamily: 'GothamSSm-Book', fontSize: '12px' }}>
                {location.state.list.tracks.total}
                {' '}
                Songs
              </p>
            </PlaylistCard>
            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: 100
                }}
                transition={{
                  type: 'spring',
                  mass: 0.35,
                  stiffness: 75,
                  duration: 0.3,
                  delay: 0.75
                }}
              >
                <ErrorDialog>
                  Do not close the browser window or navigate away from this page
                </ErrorDialog>
              </motion.div>
            </AnimatePresence>
          </AnimatePresence>
        </motion.div>
      </ContentContainer>
    </LibraryLayout>
  );
};

export default RunPage;

/*
The secret to finding the most efficient way to get to a Fisher-Yates shuffle:
1) Create an algorithm that can find the longest string of items that are in the same order
e.g 3, 10, 4, 2, 7, 8, 9, 1, 5, 6:
3, 4, 7, 8, 9 are all in the same order (least to greatest) as they would be on a number line.
Therefore, when doing a sort, these numbers would not have to move. The others could move around them.

+++ ONCE TIME A NUMBER IS MOVED, IT CAN NEVER BE MOVED AGAIN
??? I CAN SAVE TIME BY IDENTIFYING GROUPS OF NUMBERS THAT ARE IN THE EXACT SAME ORDER (e.g. [3,4])
    ANY STRING THAT INCLUDES THE FIRST OF THESE NUMBERS AUTOMATICALLY CONTAINS ALL OF THEM.
    ALSO, IF THOSE NUMBERS ARE NOT PART OF THE LONGEST STRING AND DO NEED TO MOVE, THEY CAN BE
    MOVED IN A SINGLE OPERATION.

Algorithm variations:
1) Assume you can move single songs from any position in the list to any other position
2) Assume you can move single songs from any position to the end of the array
3) Assume you can move the song at the front/back of the array to any position
4) Variation 1 plus you can move any consecutive range of songs to any other position

--- Steps: ---
First, download a list of all the songs
Second, iterate through the list of songs, and create a new array
  consisting of song IDs and a number (sequentially representing
  the starting order)
Third, shuffle the new array using Fisher-Yates
Fourth, iterate over the array and find all groups of songs that
  are in the EXACT same order (e.g. [3,4,5] or [8,9]), treat these
  groups as a single object in the next step
Fifth, iterate over the new array and locate the longest string of
  songs that are still in ascending order after the shuffle
  (these are the songs that will not need to move)

--- Algorithm: ---

*/
