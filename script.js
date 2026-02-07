// Fetch Fantasy Books
async function fetchFantasyBooks() {
    try {
        const response = await fetch('https://openlibrary.org/search.json?q=fantasy&limit=6');
        const data = await response.json();
        displayBooks(data.docs, 'fantasy-books');
    } catch (error) {
        console.error('Error fetching fantasy books:', error);
    }
}

// Fetch Science Books
async function fetchScienceBooks() {
    try {
        const response = await fetch('https://openlibrary.org/search.json?q=science&limit=6');
        const data = await response.json();
        displayBooks(data.docs, 'science-books');
    } catch (error) {
        console.error('Error fetching science books:', error);
    }
}

// Display books in the specified container
function displayBooks(books, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear loading message
    
    books.forEach(book => {
        const bookCard = `
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h3 class="font-bold text-lg mb-2">${book.title}</h3>
                <p class="text-gray-600 mb-2">by ${book.author_name ? book.author_name[0] : 'Unknown Author'}</p>
                <p class="text-sm text-gray-500">First published: ${book.first_publish_year || 'N/A'}</p>
                ${book.cover_i ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}" class="mt-4 rounded">` : ''}
            </div>
        `;
        container.innerHTML += bookCard;
    });
}

// Call both functions when page loads
fetchFantasyBooks();
fetchScienceBooks();