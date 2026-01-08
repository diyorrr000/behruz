// Menu ma'lumotlari (to'g'ri rasmlar bilan)
const menuItems = [
    {
        id: 1,
        name: "Osh",
        description: "An'anaviy o'zbek oshi, go'sht va sabzavotlar bilan",
        price: 35000,
        image: "https://693f9bf49de40f1c26a1f0f8.imgix.net/65ae72b0c4e7537e1684383dda1ced7f.jpg?auto=format&fit=crop&w=1000&q=80",
        category: "milliy"
    },
    {
        id: 2,
        name: "Lag'mon",
        description: "Qo'lda yoyilgan xamir, go'sht va sabzavotlar bilan",
        price: 28000,
        image: "https://693f9bf49de40f1c26a1f0f8.imgix.net/aa8524794a0cf7a1b92f0f7091d112d5.jpg?auto=format&fit=crop&w=1000&q=80",
        category: "milliy"
    },
    {
        id: 3,
        name: "Manti",
        description: "Qo'lda yasalgan manti, qaymoq va ziravorlar bilan",
        price: 25000,
        image: "https://693f9bf49de40f1c26a1f0f8.imgix.net/0c6a9ce95f4e2fa0f4e9e82690253e41.jpg?auto=format&fit=crop&w=1000&q=80",
        category: "milliy"
    },
    {
        id: 4,
        name: "Shashlik",
        description: "Mol go'shtidan tayyorlangan shashlik, piyoz va non bilan",
        price: 20000,
        image: "https://693f9bf49de40f1c26a1f0f8.imgix.net/949e667f5ebaeccd84beb095cd988f56.jpg?auto=format&fit=crop&w=1000&q=80",
        category: "milliy"
    },
    {
        id: 5,
        name: "Pitsa",
        description: "Pishloq, kolbasa, qo'ziqorin va pomidor sousi bilan",
        price: 65000,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "fastfood"
    },
    {
        id: 6,
        name: "Burger",
        description: "Mol go'shti, pishloq, salat va maxsus sous bilan",
        price: 32000,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "fastfood"
    },
    {
        id: 7,
        name: "Kartoshka fri",
        description: "Qovurilgan kartoshka, ketçup yoki mayonez bilan",
        price: 15000,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "fastfood"
    },
    {
        id: 8,
        name: "Coca-Cola",
        description: "0.5L muzlatilgan ichimlik",
        price: 8000,
        image: "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "ichimlik"
    },
    {
        id: 9,
        name: "Choy",
        description: "Yashil yoki qora choy, limon bilan",
        price: 3000,
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "ichimlik"
    },
    {
        id: 10,
        name: "Ko'k choy",
        description: "An'anaviy o'zbek ko'k choyi",
        price: 2000,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "ichimlik"
    },
    {
        id: 11,
        name: "Medovik tort",
        description: "Asal va qaymoqli tort",
        price: 28000,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "desert"
    },
    {
        id: 12,
        name: "Muzqaymoq",
        description: "Vanil, shokolad yoki qulupnay",
        price: 10000,
        image: "https://693f9bf49de40f1c26a1f0f8.imgix.net/muzqaymoq.jpg?auto=format&fit=crop&w=1000&q=80",
        category: "desert"
    }
];

// DOM elementlari
let currentOrderItem = null;

// Sahifa yuklanganda ishga tushadigan funksiyalar
document.addEventListener('DOMContentLoaded', function() {
    // Menyu elementlarini yuklash
    loadMenuItems();
    
    // Filtrlash tugmalarini sozlash
    setupFilterButtons();
    
    // Modal elementlarini sozlash
    setupModal();
    
    // Navbar menyusini sozlash (mobil uchun)
    setupMobileMenu();
    
    // Yangiliklar formasi
    setupNewsletterForm();
    
    // Savat sonini yangilash
    updateCartCount();
});

// Menyu elementlarini yuklash
function loadMenuItems(filter = 'all') {
    const menuContainer = document.getElementById('menu-items');
    
    // Filtrlash
    let filteredItems = menuItems;
    if (filter !== 'all') {
        filteredItems = menuItems.filter(item => item.category === filter);
    }
    
    // Menyu kartalarini yaratish
    let menuHTML = '';
    filteredItems.forEach(item => {
        menuHTML += `
            <div class="menu-card" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name}" class="menu-card-img">
                <div class="menu-card-content">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <p class="menu-card-desc">${item.description}</p>
                    <p class="menu-card-price">${formatPrice(item.price)} so'm</p>
                    <div class="menu-card-footer">
                        <span class="category">${getCategoryName(item.category)}</span>
                        <button class="btn order-btn" data-id="${item.id}">Buyurtma berish</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    menuContainer.innerHTML = menuHTML;
    
    // Buyurtma tugmalariga event listener qo'shish
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            openOrderModal(itemId);
        });
    });
}

// Kategoriya nomini olish
function getCategoryName(category) {
    const categoryNames = {
        'milliy': 'Milliy Taom',
        'fastfood': 'Fast Food',
        'ichimlik': 'Ichimlik',
        'desert': 'Desert'
    };
    
    return categoryNames[category] || category;
}

// Filtrlash tugmalarini sozlash
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktiv tugmani o'zgartirish
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Menyuni filtrlash
            const filter = this.getAttribute('data-filter');
            loadMenuItems(filter);
        });
    });
}

// Modal oynasini ochish
function openOrderModal(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    currentOrderItem = item;
    
    // Modal ma'lumotlarini to'ldirish
    document.getElementById('modal-title').textContent = `${item.name} buyurtma qilish`;
    document.getElementById('order-item-name').textContent = `Taom: ${item.name}`;
    document.getElementById('order-item-price').textContent = `Narxi: ${formatPrice(item.price)} so'm`;
    
    // Modalni ochish
    document.getElementById('order-modal').style.display = 'flex';
    
    // Formani tozalash
    document.getElementById('order-form').reset();
    document.getElementById('order-quantity').value = 1;
}

// Modal oynasini sozlash
function setupModal() {
    const orderModal = document.getElementById('order-modal');
    const successModal = document.getElementById('success-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const closeSuccessButton = document.getElementById('close-success-modal');
    
    // Modalni yopish
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            orderModal.style.display = 'none';
        });
    });
    
    closeSuccessButton.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Modal tashqarisini bosganda yopish
    window.addEventListener('click', function(event) {
        if (event.target === orderModal) {
            orderModal.style.display = 'none';
        }
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    // Buyurtma formasi
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Forma ma'lumotlarini olish
        const name = document.getElementById('customer-name').value;
        const phone = document.getElementById('customer-phone').value;
        const address = document.getElementById('customer-address').value;
        const quantity = parseInt(document.getElementById('order-quantity').value);
        const notes = document.getElementById('order-notes').value;
        
        // Buyurtma obyektini yaratish
        const order = {
            id: Date.now(),
            itemId: currentOrderItem.id,
            itemName: currentOrderItem.name,
            price: currentOrderItem.price,
            quantity: quantity,
            total: currentOrderItem.price * quantity,
            customerName: name,
            customerPhone: phone,
            customerAddress: address,
            notes: notes,
            date: new Date().toISOString()
        };
        
        // Buyurtmani saqlash (localStorage)
        saveOrder(order);
        
        // Modalni yopish
        orderModal.style.display = 'none';
        
        // Muvaffaqiyat modalini ko'rsatish
        successModal.style.display = 'flex';
        
        // Savat sonini yangilash
        updateCartCount();
        
        // Formani tozalash
        orderForm.reset();
    });
}

// Buyurtmani saqlash (localStorage)
function saveOrder(order) {
    // Mavjud buyurtmalarni olish
    let orders = JSON.parse(localStorage.getItem('restaurantOrders')) || [];
    
    // Yangi buyurtmani qo'shish
    orders.push(order);
    
    // Yangilangan buyurtmalarni saqlash
    localStorage.setItem('restaurantOrders', JSON.stringify(orders));
}

// Savatdagi buyurtmalar sonini yangilash
function updateCartCount() {
    const orders = JSON.parse(localStorage.getItem('restaurantOrders')) || [];
    document.getElementById('cart-count').textContent = orders.length;
}

// Mobil menyuni sozlash
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Menyu havolalarini bosganda yopish (mobil uchun)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}

// Yangiliklar formasi
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            // Emailni saqlash (localStorage)
            let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];
            
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
                
                // Xabar ko'rsatish
                alert("Rahmat! Siz yangiliklarning muxbiri bo'ldingiz.");
            } else {
                alert("Siz allaqachon obuna bo'lgansiz!");
            }
            
            // Formani tozalash
            emailInput.value = '';
        }
    });
}

// Narxni formatlash (3 xonali guruhlash)
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Sana va vaqtni formatlash
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('uz-UZ') + ' ' + date.toLocaleTimeString('uz-UZ');
}

// Admin panel uchun buyurtmalarni ko'rish (agar kerak bo'lsa)
function viewOrders() {
    const orders = JSON.parse(localStorage.getItem('restaurantOrders')) || [];
    
    if (orders.length === 0) {
        console.log("Hozircha buyurtmalar yo'q");
        return;
    }
    
    console.log("=== Barcha Buyurtmalar ===");
    orders.forEach(order => {
        console.log(`
            ID: ${order.id}
            Taom: ${order.itemName}
            Miqdor: ${order.quantity}
            Jami: ${formatPrice(order.total)} so'm
            Mijoz: ${order.customerName}
            Telefon: ${order.customerPhone}
            Sana: ${formatDate(order.date)}
            ----------------------------
        `);
    });
}

// Sahifa yuklanganda buyurtmalarni ko'rsatish (console da)
window.onload = function() {
    // Har 5 soniyada savatni yangilash
    setInterval(updateCartCount, 5000);
    
    // Skroll qilganda navbar effekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
};