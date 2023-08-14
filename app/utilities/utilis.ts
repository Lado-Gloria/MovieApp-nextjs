export async function getMovies() {
   try {
       const response = await fetch('/api/get-movies', {
           method: 'GET', // Ensure that you are using the correct method
       });

       if (!response.ok) {
           throw new Error('Request failed');
       }

       const result = await response.json();
       return result;
   } catch (error) {
       return error;
   }
}
