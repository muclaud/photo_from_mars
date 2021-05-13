import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Axios from 'axios';

import PhotosList from '../components/PhotosList';
import Search from '../components/Form';

function PhotosPage() {
  const [photos, setphotos] = useState([]);
  const [visible, setVisible] = useState(8);

  const DEMO_KEY = 'dT86b9dRC5v5Y5tYS0VCtDTWh8XmMhIBcIvCn2zk';

  async function getPhotos(CAMERA, DAY, ROBOT) {
    const result = await Axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${ROBOT}/photos?sol=${DAY}&camera=${CAMERA}&api_key=${DEMO_KEY}`
    );
    setphotos(result.data.photos);
  }

  const onFinish = (values) => {
    getPhotos(values.camera, values.date, values.robot);
  };

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <Search onFinish={onFinish} />
        </Grid.Column>
        <PhotosList
          visible={visible}
          showMoreItems={showMoreItems}
          photos={photos}
        />
      </Grid.Row>
    </Grid>
  );
}

export default PhotosPage;
