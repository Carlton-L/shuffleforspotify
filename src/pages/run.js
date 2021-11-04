import * as React from 'react';
import { navigate } from 'gatsby-link';
import { motion, AnimatePresence } from 'framer-motion';

import LibraryLayout from '../layout/libraryLayout.js';
import ContentContainer from '../components/contentContainer.js';
import LoadingSpinner from '../components/loadingSpinner';
import ErrorDialog from '../components/errorDialog';
import PlaylistCard from '../components/playlistCard.js';


// Total tracks: location.state.list.tracks.total
// Playlist ID: location.state.list.id
// Library

const fetchSongs = () => {

}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

const shuffleArray = (inputArray) => {
  // Split array into two chunks
  // If the length of the split array is > 2, recursively run the function on the first half
  // if the length of the split array is > 2, recursively run the function on the second half
  // Swap the order of the elements
  // Concatenate

  if(inputArray.length > 2) {
    const array1 = inputArray.splice(Math.round(inputArray.length/2))
    //console.log(inputArray, array1)
    const shuffledArray1 = shuffleArray(array1)
    const shuffledArray2 = shuffleArray(inputArray.reverse())
    //console.log(shuffledArray1)
    return shuffledArray2.concat(shuffledArray1)
  } else if (inputArray.length === 2) {
    const x = inputArray[0]
    inputArray[0] = inputArray[1]
    inputArray[1] = x
    return inputArray
  } else {
    return inputArray
  }

}

const RunPage = ({ location }) => {
  const [loaded, setLoaded] = React.useState(50);
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    // Check for state (state will be null if user navigates to this page directly)
    if (!location.state) {
      navigate('/');
      return
    }

    const shuffled = shuffleArray(array)
    console.log(shuffled)
    console.log(shuffleArray(shuffled))

    console.log(location.state)

  }, [])
  
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
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3
            }}
        >
          <motion.h2 
            key="1"
            style={{fontSize: "28px", marginBottom: "16px" }}
            layout
          >
            { songs.length < location.state.list.tracks.total ? 'Retrieving songs...' : (
              <>
              {location.state.method === 'shuffle' && 'Shuffling...'}
              {location.state.method === 'sort' && 'Sorting...'}
              {location.state.method === 'queue' && 'Queueing...'}
              </>
              )
            }
          </motion.h2>
          <AnimatePresence>
            <PlaylistCard
              image={location.state.list.images.length === 3 ? location.state.list.images[1].url : location.state.list.images[0].url} 
              disabled={true} 
              key={location.state.list.id}
              id={location.state.list.id}
              item={location.state.list}
              loaded={loaded}
              >
              <p style={{color: '#fff', marginBottom:'4px', fontFamily: 'GothamSSm-Book', fontSize: '18px'}}>
              {location.state.list.name}
              </p>
              <p style={{color: '#919496', fontFamily: 'GothamSSm-Book', fontSize: '12px'}}>
                {location.state.list.tracks.total} Songs
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
                  type: "spring",
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
  )
}

export default RunPage;