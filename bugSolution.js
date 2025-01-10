function incrementCounter(docRef) {
  docRef.get().then((doc) => {
    if (doc.exists) {
      const currentCount = doc.data().count || 0; // Solution: Use the || operator to provide a default value if 'count' is undefined
      const newCount = currentCount + 1;
      docRef.update({ count: newCount });
    } else {
      docRef.set({count:1}); //Solution: create a new document if it doesn't exist 
    }
  }).catch((error) => {
    console.error("Error incrementing counter: ", error);
  });
} 