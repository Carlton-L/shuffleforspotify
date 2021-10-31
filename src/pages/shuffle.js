import * as React from 'react';
import LibraryLayout from '../layout/libraryLayout.js';
import ContentContainer from '../components/contentContainer.js';
import LoadingSpinner from '../components/loadingSpinner';
import Paper from '../components/paper';
import ErrorDialog from '../components/errorDialog'
import Button from '../components/button.js';

const ShufflePage = ({ location }) => {
  const [playlists, setPlaylists] = React.useState({})
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  console.log(location)

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

  // Fetch list of playlists for the current user
  const response = fetchPlaylists(location.state.token)

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

  return (
    <LibraryLayout>
      <ContentContainer>
        {
          loading ? <LoadingSpinner /> : (
            error ? <ErrorDialog>Error: <br/> {error.message}</ErrorDialog> : (
              <>
                <h2 style={{fontSize: "28px", textAlign: "left"}}>Select a playlist</h2>
                
              </>
            )
          )
        }
      </ContentContainer>
    </LibraryLayout>
  )
}

export default ShufflePage;