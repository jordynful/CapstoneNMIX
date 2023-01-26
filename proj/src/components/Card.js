import React from 'react';

// import Card from '../../../shared/components/UIElements/Card';
// import PictureItem from './PictureItem';
// import Button from '../../../shared/components/FormElements/Button';
import '../MenuList.css';

const Card = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No items found. Maybe create one?</h2>
          <Button to="/places/new">Create Item</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list horizontal">

        <PictureItem
          key={props._id}
          id={props.id}
          image={props.imageUrl}
          title={props.title}
          description={props.description}
          facts = {props.facts}
          _id={props._id}
        />
      
    </ul>
  );
};

export default Card;