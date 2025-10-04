// BEFORE (Likely causing the error - you were probably passing 'headers()' directly)
// import { headers } from 'next/headers';

// export default function NotFound() {
//   // INCORRECT: headers() is a Promise and cannot be used here directly
//   const headersList = headers(); 
//   // ... rest of your code attempting to use headersList in a non-async context
//   return (
//     // ...
//   );
// }


// AFTER (The corrected, asynchronous version)
import { headers } from 'next/headers';

// 1. Make the component 'async'
export default async function NotFound() {
  // 2. Use 'await' to resolve the Promise and get the Headers object
  const headersList = await headers(); 
  
  // Now you can safely use the methods on headersList
  const userAgent = headersList.get('user-agent');

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {/* Example: Displaying some debug info */}
      <p>User Agent: {userAgent}</p> 
    </div>
  );
}