import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const blogPosts = [
  {
    title: "Punjab's Groundwater Crisis",
    image: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*70RjX_EooNtIkTwc",
    excerpt: "Exploring the alarming depletion of groundwater resources in Punjab.",
    link: "https://medium.com/@vermaisha7664/punjabs-groundwater-crisis-the-hidden-threat-beneath-our-feet-c4a2aa2e217f"
  },
  {
    title: "Choking on Progress",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*n5g6BwJPd1YBgP8X",
    excerpt: "The impact of air pollution on India's life expectancy.",
    link: "https://medium.com/@vermaisha7664/choking-on-progress-the-alarming-impact-of-air-pollution-on-indias-life-expectancy-b5633292a53b"
  },
  {
    title: "Hidden Costs of Growth",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*bO5j61t99jzhnygI.jpg",
    excerpt: "Environmental disasters in Himachal Pradesh.",
    link: "https://medium.com/@vermaisha7664/the-hidden-costs-of-growth-environmental-disasters-in-himachal-pradesh-f6298c1832e7"
  },
  {
    title: "Pollution of Rivers in India",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*84-AcR-DLoLrUy0KSdQBlg.jpeg",
    excerpt: "The cost of religious practices on river pollution.",
    link: "https://medium.com/@vermaisha7664/pollution-of-rivers-in-india-the-cost-of-religious-practices-0bf202fe7199"
  },
  {
    title: "Saving Green Heritage of Punjab",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_ALT3ciX9elJSn0hTYHeqA.jpeg",
    excerpt: "Strategies to preserve Punjab's rich green heritage.",
    link: "https://medium.com/@vermaisha7664/saving-green-heritage-of-punjab-2ee67930e36e"
  }
];

function Cards() {
  return (
    <div className="py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>Latest Environmental Insights</h2>
        <div className="d-flex overflow-auto pb-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="card me-3 flex-shrink-0" style={{ width: '300px' }}>
              <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ color: '#34495e' }}>{post.title}</h5>
                <p className="card-text flex-grow-1" style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>{post.excerpt}</p>
                <a href={post.link} className="btn btn-dark mt-auto" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                  Read on Medium
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;