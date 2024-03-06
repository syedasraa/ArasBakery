const data = {
  users: [
    {
      name: 'Asra',
      email: 'asra@gmail.com',
      password: '123456',
      isAdmin: true,
    },
    {
      name: 'Aliya',
      email: 'Aliya@gmail.com',
      password: 'misbah',
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Strawberry & Vanilla Cake',
      slug: 'Strawberry-&-Vanilla-Cake',
      Category: 'Classic Cakes',
      image: '/images/Strawberry1.jpg',
      price: 400,
      countInStock: 10,
      rating: 4.5,
      description:
        'Indulge in the exquisite delight of a velvety vanilla sponge delicately layered with a luscious patisserie cream with strawberry filling and decorated with fresh berries.',
      incredients:
        'Flour, Eggs, Cream, Vanilla Extract, Cream Patissiere, Strawberry filling, fresh Strawberries',
    },
    {
      // _id: '2',
      name: 'Snickers Cake',
      slug: 'Snickers-Cake',
      Category: 'Classic Cakes',
      image: '/images/snickerscake1.jpg',
      price: 550,
      countInStock: 10,
      rating: 4.5,
      description:
        'A decadent chocolate sponge cake filled with a luscious $nickers cream, crunchy roasted peanuts, and gooey caramel. The entire cake is generously covered with a rich and velvety chocolate ganache.',
      incredients:
        'Flour, eggs, peanuts, sour cream, vanilla, caramel, chocolate.',
    },
    {
      // _id: '3',
      name: 'Honey Cake',
      slug: 'Honey-Cake',
      Category: 'Classic Cakes',
      image: '/images/Honey_Cake_1_85b6e6f423.webp',
      price: 300,
      countInStock: 0,
      rating: 4.4,
      description:
        'Our bestseller signature cake is made with honey sponge layers, sweetened sour cream, crushed walnuts, honey sponge crumbles and fresh berries.',
      incredients:
        'Honey, flour, double cream, sour cream, eggs, vanilla, walnuts, fresh berries, and white chocolate.',
    },
    {
      // _id: '4',
      name: 'Classic Carrot Cake',
      slug: 'Classic-Carrot-Cake',
      Category: 'Classic Cakes',
      image: '/images/Carrot_cake111.jpg',
      price: 450,
      countInStock: 10,
      rating: 4.5,
      description:
        'Classic carrot sponge with soft cream cheese between the layers decorated with fresh fruit and nuts mix.',
      incredients:
        'Cinnamon, eggs, carrots, flour, nutmeg, cloves, walnuts, pecan nuts, dairy, hazelnut, cream cheese.',
    },

    {
      // _id: '5',
      name: 'Chocolate Cheesecake',
      slug: 'Chocolate-Cheesecake',
      Category: 'Classic Cakes',
      image: '/images/choc-cheesecake1.jpg',
      price: 450,
      countInStock: 20,
      rating: 4.5,
      description:
        'Rich soft chocolate cheesecake with biscuit base topped with fresh berries and chocolate shavings.',
      incredients:
        'Flour, eggs, double cream, dark chocolate, biscuit, vanilla, soft cheese.',
    },
    {
      // _id: '6',
      name: 'Strawberry Cheesecake',
      slug: 'Strawberry-Cheesecake',
      Category: 'Classic Cakes',
      image: '/images/strawberry_cheesecake.webp',
      price: 600,
      countInStock: 11,
      rating: 4.5,
      description:
        'This luscious, indulgently rich cheesecake topped with fresh berries (ultimately a winning combination) will bring you the sweetest memories that count!',
      incredients:
        'Biscuit crumble, pistachio, Philadelphia cheese, sour cream, gelatine, strawberry filling, fresh berries.',
    },

    {
      // _id: '7',
      name: 'Classic Chocolate Cake',
      slug: 'Classic-Chocolate-Cake',
      Category: 'Classic Cakes',
      image: '/images/classic_choc_cake11.jpg',
      countInStock: 5,
      price: 450,
      rating: 4.5,
      description:
        'Chocolate sponge cake with chocolate cream and house-made raspberry jam, finished with chocolate glazing, rose buds and raspberry crumbles.',
      incredients:
        'Cocoa powder, dairy, flour, vanilla, eggs, chocolate, house-made raspberry jam.',
    },

    {
      // _id: '8',
      name: 'San Sebastian Cheesecake',
      slug: 'San-Sebastian-Cheesecake',
      Category: 'Classic Cakes',
      image: '/images/sansebastiancake.webp',
      price: 450,
      countInStock: 4,
      rating: 4.5,
      description: 'Delicious baked vanilla cheesecake decorated with berries.',
      incredients:
        'Philadelphia cheese, vanilla, corn flour, whipping cream, eggs, fresh berries.',
    },
    {
      // _id: '9',
      name: 'Red Velvet Cake',
      slug: 'Red-Velvet-Cake',
      Category: 'Classic Cakes',
      image: '/images/EgglessRedVelvetCake1.webp',
      price: 500,
      countInStock: 1,
      rating: 4.5,
      description:
        'A feast for the eyes, our Red Velvet cake is made by layering a cocoa and buttermilk sponge with our signature cream cheese & lime juice frosting. It is intentionally slightly sour in order to balance the sweetness of the cake. The hint of tartness cuts through the creaminess and sweetness, leading to the perfectly balanced red velvet cake.',
      incredients:
        'Sugar, flour, butter, cream cheese, lemon juice, edible colour, eggs.',
    },
    {
      // _id: '10',
      name: 'Strawberry Pastry',
      slug: 'Strawberry-Pastry',
      Category: 'Pastries',
      image: '/images/Strawberrypastry.webp',
      price: 100,
      countInStock: 3,
      rating: 4.5,
      description:
        'Fresh strawberries, on layers of fresh cream, strawberry jam & layers of soft vanilla cake.',
      incredients:
        'Refined flour, sugar, salt, vanilla essence, oil, dairy cream, strawberry.',
    },
    {
      // _id: '11',
      name: 'Chocolate Strawberry Pastry',
      slug: 'Chocolate-Strawberry-Pastry',
      Category: 'Pastries',
      image: '/images/chocolate-strawberry-pastry1.webp',
      price: 120,
      countInStock: 2,
      rating: 4.5,
      description:
        'Layers of creamy chocolate mousse & moist chocolate sponge, topped with fresh strawberries.',
      incredients:
        'Dark chocolate, strawberry, cocoa butter, cream, sugar, flour, oil, coffee powder',
    },
    {
      // _id: '12',
      name: 'Pistachio Rose & Raspberry Pastry',
      slug: 'Pistachio-Rose-&-Raspberry-Pastry',
      Category: 'Pastries',
      image: '/images/Raspberry_Pastry.webp',
      price: 115,
      countInStock: 7,
      rating: 4.5,
      description:
        'Soft pistachio sponge layered with cream cheese and hose made raspberry jam and decorated with blackberries and rose petals.',
      incredients:
        'Pistachio, mascarpone cheese, double cream, sour cream, vanilla, eggs, pistachios, home-made raspberry jam, rose water, rose petals, and fresh berries.',
    },
  ],
};
export default data;
