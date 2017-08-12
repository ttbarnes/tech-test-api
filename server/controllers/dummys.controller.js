const mockData = [
  {
    name: 'Mr. Dummy A',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/513343414/960x0.jpg?fit=scale',
    dob: new Date(),
    id: 123456,
    favourites: [
      {
        title: 'House 1',
        thumbnail: 'http://www.geeky-gadgets.com/wp-content/uploads/2009/07/james-may-lego-house.jpg'
      },
      {
        title: 'House 2',
        thumbnail: 'http://www.ibrickcity.com/wp-content/gallery/5891/lego-5891-apple-tree-house-city-ibrickcity-11.jpg'
      },
      {
        title: 'House 3',
        thumbnail: 'http://4.bp.blogspot.com/-XoS1ARfUN7o/TgmW3l6HHKI/AAAAAAAAAJs/khGMC4LBqnU/s1600/4954-1.jpg'
      }
    ]
  },
  {
    name: 'Mr. Dummy B',
    imageUrl: 'https://www.stillbreathing.co.uk/wp-content/uploads/2015/11/crash-testing-dummies.jpg',
    dob: new Date(),
    id: 7890,
    favourites: [
      {
        title: 'House 1',
        thumbnail: 'http://4.bp.blogspot.com/-XoS1ARfUN7o/TgmW3l6HHKI/AAAAAAAAAJs/khGMC4LBqnU/s1600/4954-1.jpg'
      },
      {
        title: 'House 2',
        thumbnail: 'http://www.ibrickcity.com/wp-content/gallery/5891/lego-5891-apple-tree-house-city-ibrickcity-11.jpg'
      },
      {
        title: 'House 3',
        thumbnail: 'http://www.geeky-gadgets.com/wp-content/uploads/2009/07/james-may-lego-house.jpg'
      }
    ]
  },
  {
    name: 'Mr. Dummy C',
    imageUrl: 'https://gdblogs.shu.ac.uk/b3023955/wp-content/uploads/sites/75/2014/10/TXf7Z.jpg',
    dob: new Date(),
    id: 111,
    favourites: [
      {
        title: 'House 1',
        thumbnail: 'http://www.geeky-gadgets.com/wp-content/uploads/2009/07/james-may-lego-house.jpg'
      },
      {
        title: 'House 2',
        thumbnail: 'http://www.ibrickcity.com/wp-content/gallery/5891/lego-5891-apple-tree-house-city-ibrickcity-11.jpg'
      },
      {
        title: 'House 3',
        thumbnail: 'http://4.bp.blogspot.com/-XoS1ARfUN7o/TgmW3l6HHKI/AAAAAAAAAJs/khGMC4LBqnU/s1600/4954-1.jpg'
      }
    ]
  },
  {
    name: 'Bill',
    imageUrl: 'https://i.pinimg.com/736x/e5/73/f8/e573f8eb9155a47a83fd105b33891f63--costumes-canada-crash-test-dummies.jpg',
    dob: new Date(),
    id: 2222,
    favourites: [
      {
        title: 'House 1',
        thumbnail: 'http://www.geeky-gadgets.com/wp-content/uploads/2009/07/james-may-lego-house.jpg'
      },
      {
        title: 'House 2',
        thumbnail: 'http://www.ibrickcity.com/wp-content/gallery/5891/lego-5891-apple-tree-house-city-ibrickcity-11.jpg'
      },
      {
        title: 'House 3',
        thumbnail: 'http://4.bp.blogspot.com/-XoS1ARfUN7o/TgmW3l6HHKI/AAAAAAAAAJs/khGMC4LBqnU/s1600/4954-1.jpg'
      }
    ]
  },
  {
    name: 'Ben',
    imageUrl: 'https://i.pinimg.com/236x/a1/56/11/a15611a2d834d4aba5124dd67d9981bb--crash-test-dummies-lego-figures.jpg',
    dob: new Date(),
    id: 55555,
    favourites: [
      {
        title: 'House 1',
        thumbnail: 'http://www.geeky-gadgets.com/wp-content/uploads/2009/07/james-may-lego-house.jpg'
      },
      {
        title: 'House 2',
        thumbnail: 'http://www.ibrickcity.com/wp-content/gallery/5891/lego-5891-apple-tree-house-city-ibrickcity-11.jpg'
      },
      {
        title: 'House 3',
        thumbnail: 'http://4.bp.blogspot.com/-XoS1ARfUN7o/TgmW3l6HHKI/AAAAAAAAAJs/khGMC4LBqnU/s1600/4954-1.jpg'
      }
    ]
  }
];

/**
 * Get dummys list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res) {
  res.json(mockData);
}

export default { list };
