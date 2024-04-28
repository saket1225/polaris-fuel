import styles from '../styles/scroller.module.css'

export default function Scroller() {
    const categories = [
      { 
          name: 'Food', 
          color: 'salmon',
          assets: [
              { name: 'Pizza', image: '/path/to/pizza.jpg', cost: '$10', url: 'https://example.com/pizza' },
              { name: 'Burger', image: '/path/to/burger.jpg', cost: '$8', url: 'https://example.com/burger' },
              { name: 'Sushi', image: '/path/to/sushi.jpg', cost: '$12', url: 'https://example.com/sushi' },
              { name: 'Salad', image: '/path/to/salad.jpg', cost: '$7', url: 'https://example.com/salad' }
          ]
      },
      { 
          name: 'Clothes',
          color: 'skyblue',
          assets: [
              { name: 'Shirt', image: '/path/to/shirt.jpg', cost: '$20', url: 'https://example.com/shirt' },
              { name: 'Pants', image: '/path/to/pants.jpg', cost: '$25', url: 'https://example.com/pants' },
              { name: 'Hat', image: '/path/to/hat.jpg', cost: '$15', url: 'https://example.com/hat' },
              { name: 'Socks', image: '/path/to/socks.jpg', cost: '$5', url: 'https://example.com/socks' }
          ]
      },
      { 
          name: 'Tech',
          color: 'limegreen',
          assets: [
              { name: 'Laptop', image: '/path/to/laptop.jpg', cost: '$999', url: 'https://example.com/laptop' },
              { name: 'Phone', image: '/path/to/phone.jpg', cost: '$699', url: 'https://example.com/phone' },
              { name: 'Tablet', image: '/path/to/tablet.jpg', cost: '$499', url: 'https://example.com/tablet' },
              { name: 'Watch', image: '/path/to/watch.jpg', cost: '$199', url: 'https://example.com/watch' }
          ]
      }
    ];


    return (
      <div className={styles.snappyContainer}>
          {categories.map((category, index) => (
              <section key={index} className={styles.category} style={{ backgroundColor: category.color }}>
                  <h2>{category.name}</h2>
                  <div className={styles.assetContainer}>
                      {category.assets.map((asset, assetIndex) => (
                          <div key={assetIndex} className={styles.asset}>
                              {asset.image && <img src={asset.image} alt={asset.name} className={styles.assetImage} />}
                              <p>{asset.name} - {asset.cost}</p>
                              <a target="_blank" href={asset.url} className={styles.button}>Buy {category.name}</a>
                          </div>
                      ))}
                  </div>
              </section>
          ))}
      </div>
    );
}
