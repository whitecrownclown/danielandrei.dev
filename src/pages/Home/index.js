import React from 'react';
import { animated, useTrail } from 'react-spring';
import Card from '../../components/Card';

import { TEXT, IMAGE, ITEMS } from './constants';
import './style.scss';

function itemRenderer({ type, ...item }) {
  switch (type) {
    case TEXT: {
      return <span>{item.text}</span>;
    }
    case IMAGE: {
      return <Card {...item} className="image" />;
    }
    default: {
      return null;
    }
  }
}

export default function Home() {
  const trail = useTrail(ITEMS.length, {
    from: {
      opacity: 0,
      x: -200,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  });

  return (
    <div className="home-wrapper">
      {trail.map((props, key) => {
        return (
          <animated.div
            style={{
              ...props,
              transform: props.x.interpolate(v => `translateX(${v}px)`),
            }}
            className="item"
            key={key}
          >
            {itemRenderer(ITEMS[key])}
          </animated.div>
        );
      })}
    </div>
  );
}
