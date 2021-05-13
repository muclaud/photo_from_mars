import React from 'react';
import { Card, Grid, Image, Message, Icon } from 'semantic-ui-react';

function PhotoCard({ photos, visible }) {
  let photosMarkup;
  if (photos.length < 1) {
    photosMarkup = (
      <Message icon size='huge'>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>Waiting...</Message.Header>
          Choose the parameters...
        </Message.Content>
      </Message>
    );
  } else {
    photosMarkup = photos.slice(0, visible).map((photo) => {
      const { img_src, rover, earth_date, id, camera } = photo;
      return (
        <Grid.Column mobile={16} tablet={8} computer={4} key={id}>
          <Card fluid key={id}>
            <Image
              size='huge'
              as={'a'}
              href={img_src}
              src={img_src}
              alt={rover.name + ' ' + id}
              wrapped
              ui={false}
            />

            <Card.Content>
              <Card.Header>Robot: {rover.name}</Card.Header>
              <Card.Meta>Date: {earth_date}</Card.Meta>
              <Card.Meta>ID: {id}</Card.Meta>
              <Card.Description>{camera.full_name}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
  }
  return <> {photosMarkup}</>;
}

export default PhotoCard;
