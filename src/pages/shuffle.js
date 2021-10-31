import * as React from 'react';
import LibraryLayout from '../layout/libraryLayout.js';
import ContentContainer from '../components/contentContainer.js';
import LoadingSpinner from '../components/loadingSpinner';
import Paper from '../components/paper';
import useLocalState from '../hooks/useLocalState.js';
import ErrorDialog from '../components/errorDialog'
import Button from '../components/button.js';

const ShufflePage = ({ location }) => {
  console.log(location)
  return (
    <LibraryLayout>
      <ContentContainer>

      </ContentContainer>
    </LibraryLayout>
  )
}

export default ShufflePage;