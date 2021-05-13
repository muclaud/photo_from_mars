import React from 'react';

import { Grid, Button } from 'semantic-ui-react';
import PhotoCard from './PhotoCard';

function PhotosList({ visible, showMoreItems, photos }) {
  return (
    <Grid.Column width={11}>
      <Grid>
        <PhotoCard visible={visible} photos={photos} />
      </Grid>
      {photos.length > 8 ? (
        <Button fluid onClick={showMoreItems}>
          Add more photos
        </Button>
      ) : null}
    </Grid.Column>
  );
}

export default PhotosList;
