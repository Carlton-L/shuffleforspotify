import * as React from 'react';
import LibraryLayout from '../layout/libraryLayout.js';
import ContentContainer from '../components/contentContainer.js';
import LoadingSpinner from '../components/loadingSpinner';
import Paper from '../components/paper';
import useLocalState from '../hooks/useLocalState.js';
import ErrorDialog from '../components/errorDialog'
import Button from '../components/button.js';

const CallbackPage = ({ location }) => {
  const [state, setState] = useLocalState('userState', false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  const fetchUser = async (token) => {
    const res = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).then(response => {
      return response.json()
    }
    ).then(response => {
        console.log(response)
        return {
          error: false,
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
    
    // Check to see if state object already populated (e.g. this page was navigated to using back button)
    if (!state) {
      const params = new URLSearchParams(location.hash.substr(1));
      const loginError = new URLSearchParams(location.search.substr(1))

      // Check for error param (present if user denied access)
      if (loginError.get("access_denied")) {
        setError({ message: "User declined permissions"});
        setLoading(false);
        setState(false);
        return
      }

      // NOTE: Due to the absence of a state variable, it's possible a user could access this page without a valid token

      const token = params.get("access_token");
      const createdAt = Math.round(new Date() /1000);
      const expires = params.get("expires_in");
      
      const user = await fetchUser(token)
      console.log(user)

      if (user.error) {
        setError(user.data.error);
        setLoading(false);
        setState(false);
        return
      }

      const premium = user.data.product === 'premium' ? true : false;
      const name = user.data.display_name;

      setState({
        token,
        createdAt,
        expires,
        premium,
        name
      })

      // Get current timestamp
    } else {
      // Re-use same state object that's in localStorage
    }

    // Set loading to false
    setLoading(false);

  }, [])

  return (
    <LibraryLayout>
      <ContentContainer>
        {
          loading ? <LoadingSpinner /> : (
            error ? <ErrorDialog>Error: <br/> {error.message}</ErrorDialog> : (
              <>
                <h2 style={{fontSize: "28px", textAlign: "left"}}>Choose a method</h2>
              <Paper>
                <Button variant={state.premium ? 'filled' : 'disabled'} disabled={!state.premium}>Add to Queue</Button>
                <Button color="white">Shuffle Playlist</Button>
                --- OR ---
                <Button color="white" variant="outline">Sort Playlist</Button>
              </Paper>
              </>
            )
            // `Henlo, ${typeof window === 'undefined' ? '' : state.name}`
          )
        }
        {
          // Need to check if window exists, because without it state will be undefined (or maybe false), and state.name will be unavailable
          
        }
      </ContentContainer>
    </LibraryLayout>
  )
}

export default CallbackPage;