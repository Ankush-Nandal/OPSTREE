const loadProductsBtn = document.getElementById('loadProductsBtn');
const productContainer = document.getElementById('productContainer');
const sortPrice = document.getElementById('sortPrice');

// Sample data to mimic API response (5 products)
const products = [
  {
    id: 1,
    name: "Snowboard X1",
    price: 299.99,
    description: "Perfect for intermediate riders.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXTIjDYvxk3hCmx1RptwXoDbbuVCi0WNfoQ&s"
  },
  {
    id: 2,
    name: "Snowboard Pro",
    price: 499.99,
    description: "Built for professional riders.",
    image: "https://s3.us-east-1.amazonaws.com/images.gearjunkie.com/uploads/2024/11/never-summer-nokhu-161-df.jpg "
  },
  {
    id: 3,
    name: "Snowboard Beginner",
    price: 199.99,
    description: "Ideal for beginners learning the basics.",
    image: "https://mintsnowboarding.com/wp-content/uploads/2020/08/beginner-snowboarding-pack-list-e1597670822620.jpg"
  },
  {
    id: 4,
    name: "Snowboard X2",
    price: 350.00,
    description: "Best choice for all mountain riding.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDo-8yJMnFqsG728eT7pGZylY-mMaTmCGCSA&s"
  },
  {
    id: 5,
    name: "Snowboard Pro Max",
    price: 699.99,
    description: "Ultimate performance for professionals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcAH15M6v8_nKOj0hCSBNGXtzlUji3ij2IQ&s"
  }
];

// Simulating a fetch call to get products
const fetchProducts = async () => {
  try {
    // Simulating an API delay
    setTimeout(() => {
      displayProducts(products);
    }, 500); // Delay of 0.5 seconds
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Display products on the page
const displayProducts = (products) => {
  productContainer.innerHTML = ''; // Clear existing products

  // Loop through each product to create a product card
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="details">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price}</div>
        <button>Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(productCard); // Add the product card to the container
  });
};

// Sort products by price (low to high or high to low)
const sortProducts = (products, order) => {
  return products.sort((a, b) => {
    return order === 'lowToHigh' ? a.price - b.price : b.price - a.price;
  });
};

// Event listener for the "Load Products" button
loadProductsBtn.addEventListener('click', () => {
  fetchProducts();
});

// Event listener for the price sorting dropdown
sortPrice.addEventListener('change', async (e) => {
  const order = e.target.value; // Get selected sorting option
  const sortedProducts = sortProducts(products, order);
  displayProducts(sortedProducts); // Display sorted products
});