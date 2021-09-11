import React from 'react';
import Card from '../../components/Card';

import { TEXT, IMAGE, ITEMS } from './constants';
import './style.scss';

function itemRenderer({ type, ...item }, key) {
  switch (type) {
    case TEXT: {
      return <span key={key}>{item.text}</span>;
    }
    case IMAGE: {
      return <Card key={key} {...item} className="image" />;
    }
    default: {
      return null;
    }
  }
}

export default function Home() {
  return (
    <div className="home-wrapper">
      {ITEMS.map((item, index) => itemRenderer(item, index))}
    </div>
  );
}
