function menuTab() {
    const content = document.querySelector('#content')

    const section = document.createElement('div')
    section.classList.add('content-box')
    section.setAttribute('id', 'menu')

    const grid = document.createElement('div')
    grid.classList.add('w-layout-grid')
    grid.classList.add('grid')
    section.appendChild(grid)

    const menuCategories = (name) => {
        const category = document.createElement('div')
        category.classList.add('menu-category')
        category.setAttribute('id', name)
        grid.appendChild(category)

        function capitalizeFirstconstter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const h1 = document.createElement('h1')
        h1.textContent = capitalizeFirstconstter(name)
        category.appendChild(h1)

        return category
    }

    const starters = menuCategories('starters')
    const mains = menuCategories('mains')
    const desserts = menuCategories('desserts')

    const menuItems = (name, price, category) => {
        const item = document.createElement('div')
        item.classList.add('menu-item')

        const itemName = document.createElement('div')
        itemName.textContent = name
        item.appendChild(itemName)

        const itemPrice = document.createElement('div')
        itemPrice.textContent = price
        item.appendChild(itemPrice)

        category.appendChild(item)
    };
    
    menuItems('Fries', '$4', starters)
    menuItems('Beef loaded fries', '$6', starters)
    menuItems('Veggie loaded fries', '$6', starters)
    menuItems('Chicken nuggets', '$6', starters)
    menuItems('Beef burger', '$12', mains)
    menuItems('Chicken burger', '$12', mains)
    menuItems('Mushroom burger', '$12', mains)
    menuItems('Vegan burger', '$12', mains)
    menuItems('Apple crumble', '$7', desserts)
    menuItems('Lemon curd tart', '$7', desserts)
    menuItems('Tiramisu', '$7', desserts)
    menuItems('Deep fried icecream', '$7', desserts)

    content.appendChild(section)
}

export default menuTab