const nameMyFavoriteDogBreed = (breed) => {
    if (breed === 'schnauzer') {
        let result = "My favorite dog breed is schnauzer"
    }
    else if (breed === 'meow') {
         let result = "I like cats"
    }
    return result
}

const favoriteBreed = nameMyFavoriteDogBreed()

console.log(`When it comes to pets, ${favoriteBreed}`)

export default nameMyFavoriteDogBreed