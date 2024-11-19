const products = [
    { productName: "Barbell", price: 39.99 },
    { productName: "Belt", price: 24.99 },
    { productName: "Bench", price: 59.99 },
    { productName: "Dumbell", price: 39.99 },
    { productName: "Gloves", price: 19.99 },
    { productName: "Knee Sleeves", price: 14.99 },
    { productName: "Squat Rack", price: 249.99 },
    { productName: "Weight Plate Set", price: 299.99 },
];
function getProductPrice(productName) {
    for (const product of products) {
      if (product.productName === productName) {
        return product.price;
      }
    }
    return null;
  }


  let index = 0;
        const images = document.querySelectorAll('.image-container img');
        function showImage(index) {
          images.forEach((img, i) => {
            if (i === index) {
              img.classList.add('visible');
            } else {
              img.classList.remove('visible'); } });}
        function nextImage() {
          index++;
          if (index >= images.length) {
            index = 0;}
          showImage(index);
        }
        function previousImage() {
          index--;
          if (index < 0) {
            index = images.length - 1;
          }
          showImage(index);
        }