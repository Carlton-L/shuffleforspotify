import * as React from 'react';
import { navigate } from 'gatsby';
import { motion } from 'framer-motion';
import LibraryLayout from '../layout/libraryLayout';
import ContentContainer from '../components/contentContainer';
import LoadingSpinner from '../components/loadingSpinner';
import Paper from '../components/paper';
import ErrorDialog from '../components/errorDialog';
import Button from '../components/button';

const CallbackPage = ({ location }) => {
  const [state, setState] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Fetch user data from a given Sotify API token
  const fetchUser = async (token) => {
    const res = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json()).then((response) => ({
        error: !!response.error,
        data: response
      }))
      .catch((err) => ({
      // NOTE: I don't think this catch statement will ever fire
        error: true,
        data: err
      }));

    return res;
  };

  React.useEffect(async () => {
    // Set loading to true
    setLoading(true);

    // Get params from hash and query params (if present)
    const params = new URLSearchParams(location.hash.substr(1));
    const loginError = new URLSearchParams(location.search.substr(1));

    // Check for error param (present if user denied access)
    if (loginError.get('error')) {
      setError({ status: '401', message: 'User declined permissions' });
      setLoading(false);
      return;
    }

    // NOTE: Due to the absence of a state variable, it's possible a user could access this page without a valid token

    // Get access token from url hash params
    const token = params.get('access_token');

    // Fetch user data from Spotify API
    const response = await fetchUser(token);

    // Check for error property in API response
    if (response.error) {
      setError(response.data.error);
      setLoading(false);
      return;
    }

    // Check and set user's premium status and name
    const premium = response.data.product === 'premium';
    const name = response.data.display_name;
    const { id } = response.data;

    // Set state to be passed to next page
    setState({
      token,
      premium,
      name,
      id
    });

    // Set loading to false
    setLoading(false);
  }, []);

  return (
    <LibraryLayout>
      <ContentContainer>
        {loading && <LoadingSpinner /> }
        {
            error ? (
              <ErrorDialog>
                Error:
                <br />
                {' '}
                {error.message}
              </ErrorDialog>
            ) : (
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
                <h2 style={{ fontSize: '28px', marginLeft: '20px' }}>Choose a method</h2>
                <Paper>
                  <Button
                    gutterTop
                    color="primary"
                    onClick={
                    () => navigate('/shuffle', { state })
                  }
                  >
                    Shuffle Playlist
                  </Button>
                  <p style={{ marginBottom: '20px' }}>
                    SHUFFLE A PLAYLIST
                    <br />
                    IN PLACE
                    <br />
                  </p>
                  <Button
                    gutterTop
                    color="white"
                    variant="outline"
                    onClick={
                    () => navigate('/sort', { state })
                  }
                  >
                    Sort Playlist
                  </Button>
                  <p style={{ marginBottom: '20px' }}>
                    SORT A PLAYLIST USING
                    <br />
                    A VARIETY OF FILTERS
                    <br />
                  </p>
                  <p style={{ margin: '20px' }}>--- OR ---</p>
                  <Button
                    gutterTop
                    variant={state.premium ? 'disabled' : 'disabled'}
                  // disabled={!state.premium}
                    disabled
                  >
                    SHUFFLE LIBRARY
                  </Button>
                  <p style={{ marginBottom: '20px' }}>
                    {state.premium ? (
                      <>
                        SHUFFLE SONGS FROM
                        <br />
                        YOUR LIBRARY DIRECTLY
                        <br />
                        INTO YOUR QUEUE
                        <br />
                        (COMING SOON)
                      </>
                    ) : (
                      <>
                        ONLY AVAILABLE WITH
                        <br />
                        SPOTIFY PREMIUM
                      </>
                    )}
                  </p>
                </Paper>
              </motion.div>
            )

        }
      </ContentContainer>
    </LibraryLayout>
  );
};

export default CallbackPage;
