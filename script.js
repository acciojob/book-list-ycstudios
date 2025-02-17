//your JS code here. If required.
// Get DOM elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add event listeners
submitBtn.addEventListener('click', addBook);
bookList.addEventListener('click', deleteBook);

// Function to add a new book
function addBook(e) {
    e.preventDefault();
    
    // Get input values
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();
    
    // Validate input
    if (!title || !author || !isbn) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create new row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;
    
    // Add row to table
    bookList.appendChild(row);
    
    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    
    // Focus on title input for next entry
    titleInput.focus();
}

// Function to delete a book
function deleteBook(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
            e.target.closest('tr').remove();
        }
    }
}