const viewButton = document.getElementById('viewButton');
const products = document.getElementById('moreProducts');
let isViewAll = false;

viewButton.addEventListener('click', function() {
  if (isViewAll) {
    // If currently viewing all, hide excess products
    
      products.style.display = 'none';
    
    viewButton.textContent = 'View All';
  } else {
    // If not viewing all, show all products
    
      products.style.display = '';
   
    viewButton.textContent = 'View Less';
  }
  isViewAll = !isViewAll;
});