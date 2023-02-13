const defaultNews = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => showMobiles(data.products))
}
defaultNews()
const showMobiles = (mobiles) => {
    mobiles.forEach(mobile => {
        const container = document.getElementById('mobile-container')
        const div = document.createElement('div')
        div.classList.add('border-2')
        div.innerHTML=`
            <div class="product-thumbnail">
                <img class="p-3 product-image" src=${mobile.thumbnail} alt="">
            </div>
            <h3 class="ml-4 text-2xl">${mobile.title}</h3>
            <p class="text-xl ml-4">Price: ${mobile.price}</p>
            <p class="text-xl ml-4 mb-3">Rating: ${mobile.rating}</p>
        `
        container.appendChild(div)
    });
}
const filterBrand = (value) => {
    const container = document.getElementById('mobile-container')
    container.innerHTML = "";
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => filterItem(data.products))
    const filterItem = (products) => {
        if(value !== 'default'){
            const filteredMobiles = products.filter(product => product.brand === value)
            showMobiles(filteredMobiles)
        }
        else{
            showMobiles(products)
        }
    }
}
const isStock = (value) => {
    const container = document.getElementById('mobile-container')
    container.innerHTML = "";
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => filterItem(data.products))
    const filterItem = (products) => {
        if(value === 'default'){
            showMobiles(products)
        }
        else if(value === 'inStock'){
            const filtered = products.filter(product => product.stock > 0)
            showMobiles(filtered)
        }
        else if(value === 'outStock'){
            const filtered = products.filter(product => product.stock === 0)
            showMobiles(filtered)
        }
    }
}