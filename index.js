
'use strict';

// Sample data for products with 20 entries
const products = [
    {
        id: 'p1',
        name: 'Classic Blue Denim Jacket',
        description: 'Stylish and warm denim jacket for casual wear. Durable and comfortable.',
        price: 2599,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d2c7ea8-b757-4df8-a14a-7ba9e234ec26.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a92dd2b-f496-4c12-b2be-f4c753aa0b6e.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/690bdc4b-f800-4592-a9b3-2fb6fd880569.png'
        ],
        category: 'Jackets',
        brand: 'DenimCo',
        rating: 4.5,
        reviews: [
            { id: 'r1', userId: 'u1', rating: 5, comment: 'Love this jacket! Fits perfectly.', helpful: 10, verified: true, createdAt: '2023-01-05', userName: 'Alice' },
            { id: 'r2', userId: 'u2', rating: 4, comment: 'Good quality, a bit tight on the sleeves.', helpful: 4, verified: true, createdAt: '2023-02-15', userName: 'Mohi' }
        ],
        stock: 8,
        variants: [
            { id: 'v1', color: 'Blue', size: 'M', price: 2599, stock: 3 },
            { id: 'v2', color: 'Blue', size: 'L', price: 2599, stock: 5 }
        ],
        tags: ['denim', 'casual', 'jackets']
    },
    {
        id: 'p2',
        name: 'Red Cotton T-Shirt',
        description: 'Comfortable red cotton t-shirt with round neckline. Great for everyday wear.',
        price: 499,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05c70f52-e1d4-4f70-8205-9838f5379a38.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9d4053a9-d02c-43f0-a685-4632e6956af1.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f376137b-1c85-474c-aaa2-8ce0bb3b0a41.png'
        ],
        category: 'T-Shirts',
        brand: 'CottonNest',
        rating: 4.0,
        reviews: [
            { id: 'r3', userId: 'u3', rating: 4, comment: 'Soft fabric, true to size.', helpful: 3, verified: true, createdAt: '2023-03-10', userName: 'Rohit' }
        ],
        stock: 15,
        variants: [
            { id: 'v3', color: 'Red', size: 'S', price: 499, stock: 7 },
            { id: 'v4', color: 'Red', size: 'M', price: 499, stock: 8 }
        ],
        tags: ['cotton', 'basic', 'tshirt']
    },
    {
        id: 'p3',
        name: 'Elegant Black Formal Shirt',
        description: 'Perfect black formal shirt made with breathable fabric. Ideal for office and events.',
        price: 1499,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0915e06-6ae5-436e-82ce-505333e6e3e0.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c87e2cf-0800-45c0-85b8-fb89cd1d39b9.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4f17c8a-be3f-41a4-8d17-52503a4a0f30.png'
        ],
        category: 'Shirts',
        brand: 'Formale',
        rating: 4.7,
        reviews: [
            { id: 'r4', userId: 'u4', rating: 5, comment: 'Fits great and looks sharp.', helpful: 7, verified: true, createdAt: '2023-04-01', userName: 'Mohit' }
        ],
        stock: 5,
        variants: [
            { id: 'v5', color: 'Black', size: 'M', price: 1499, stock: 2 },
            { id: 'v6', color: 'Black', size: 'L', price: 1499, stock: 3 }
        ],
        tags: ['formal', 'black', 'shirts']
    },
    {
        id: 'p4',
        name: 'Stylish Grey Hoodie',
        description: 'Comfortable and warm grey hoodie with kangaroo pocket, perfect for casual outings.',
        price: 1999,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/add89acc-713a-4d7c-8feb-465388dd284b.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1458ad5-e500-48d3-8a8e-4dfe993e74cd.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48031967-0dfe-40ee-954b-93ce339166fd.png'
        ],
        category: 'Sweatshirts',
        brand: 'UrbanStyle',
        rating: 4.3,
        reviews: [
            { id: 'r5', userId: 'u5', rating: 4, comment: 'Nice fit, good material.', helpful: 6, verified: true, createdAt: '2023-02-20', userName: 'Amit' }
        ],
        stock: 10,
        variants: [
            { id: 'v7', color: 'Grey', size: 'M', price: 1999, stock: 5 },
            { id: 'v8', color: 'Grey', size: 'L', price: 1999, stock: 5 }
        ],
        tags: ['hoodie', 'casual', 'sweatshirt']
    },
    {
        id: 'p5',
        name: 'Classic White Polo Shirt',
        description: 'Timeless white polo shirt with breathable fabric. Ideal for casual and semi-formal occasions.',
        price: 899,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aaa8d15c-7df0-493e-9a2e-6db67ee03d28.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efc9e90c-6259-4a7a-b684-6b9c7e1192a5.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6ff2703-fee3-4814-aa6f-ff9919c28162.png'
        ],
        category: 'Shirts',
        brand: 'PolosPlus',
        rating: 4.4,
        reviews: [
            { id: 'r6', userId: 'u6', rating: 5, comment: 'Very comfortable and stylish.', helpful: 8, verified: true, createdAt: '2023-05-12', userName: 'Sumit' }
        ],
        stock: 20,
        variants: [
            { id: 'v9', color: 'White', size: 'M', price: 899, stock: 10 },
            { id: 'v10', color: 'White', size: 'L', price: 899, stock: 10 }
        ],
        tags: ['polo', 'casual', 'shirts']
    },
    {
        id: 'p6',
        name: 'Navy Blue Casual Trousers',
        description: 'Comfortable navy blue casual trousers, perfect for daily wear and office.',
        price: 1299,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d414e86d-52c1-4bd9-97b4-57033314d023.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45828663-8b8a-4dca-98fd-6ff6d219e876.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dca5e80b-e746-4b3a-9a69-ab80c0e269da.png'
        ],
        category: 'Trousers',
        brand: 'UrbanStyle',
        rating: 4.1,
        reviews: [
            { id: 'r7', userId: 'u7', rating: 4, comment: 'Fits well and comfortable.', helpful: 5, verified: true, createdAt: '2023-06-20', userName: 'Pallavi' }
        ],
        stock: 12,
        variants: [
            { id: 'v11', color: 'Navy Blue', size: '32', price: 1299, stock: 6 },
            { id: 'v12', color: 'Navy Blue', size: '34', price: 1299, stock: 6 }
        ],
        tags: ['trousers', 'casual', 'navy']
    },
    {
        id: 'p7',
        name: 'Black Leather Jacket',
        description: 'Premium black leather jacket with zipper pockets and stylish look.',
        price: 5999,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df10feb8-46f6-47cb-ab9a-4334168f0317.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c73bd9d-39ce-4e51-9b5d-1f1c80bb66a4.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3121e924-7caa-4164-9937-0aef77893b0c.png'
        ],
        category: 'Jackets',
        brand: 'LeatherLux',
        rating: 4.8,
        reviews: [
            { id: 'r8', userId: 'u8', rating: 5, comment: 'Absolutely love the quality!', helpful: 12, verified: true, createdAt: '2023-07-10', userName: 'Tarum' }
        ],
        stock: 4,
        variants: [
            { id: 'v13', color: 'Black', size: 'M', price: 5999, stock: 2 },
            { id: 'v14', color: 'Black', size: 'L', price: 5999, stock: 2 }
        ],
        tags: ['leather', 'jackets', 'black']
    },
    {
        id: 'p8',
        name: 'Blue Striped Casual Shirt',
        description: 'Light blue striped shirt perfect for casual outings and office wear.',
        price: 1399,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7757092a-fcd0-4101-89b2-e31384c691e8.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb2a38de-5304-4881-8c3f-29fb8b3b566a.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/660e1214-4991-472c-bdb2-34caa307fac6.png'
        ],
        category: 'Shirts',
        brand: 'CasualWear',
        rating: 4.2,
        reviews: [
            { id: 'r9', userId: 'u9', rating: 4, comment: 'Nice fabric and fit.', helpful: 6, verified: true, createdAt: '2023-07-15', userName: 'Vishal' }
        ],
        stock: 14,
        variants: [
            { id: 'v15', color: 'Blue', size: 'M', price: 1399, stock: 7 },
            { id: 'v16', color: 'Blue', size: 'L', price: 1399, stock: 7 }
        ],
        tags: ['striped', 'casual', 'shirts']
    },
    {
        id: 'p9',
        name: 'Green Hoodie with Pockets',
        description: 'Comfortable green hoodie with front pockets, perfect for informal wear.',
        price: 1799,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79bcaeca-9eb9-48d8-a48d-bf0439a9aa56.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd1d597c-b9b9-4aa4-9d7a-b8817023cc6a.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/380c0a72-fac1-4e08-8b14-b643a431af39.png'
        ],
        category: 'Sweatshirts',
        brand: 'HoodieHub',
        rating: 4.4,
        reviews: [
            { id: 'r10', userId: 'u10', rating: 5, comment: 'Super warm and cozy.', helpful: 10, verified: true, createdAt: '2023-08-01', userName: 'Sumit upadhyay' }
        ],
        stock: 18,
        variants: [
            { id: 'v17', color: 'Green', size: 'M', price: 1799, stock: 9 },
            { id: 'v18', color: 'Green', size: 'L', price: 1799, stock: 9 }
        ],
        tags: ['hoodie', 'green', 'casual']
    },
    {
        id: 'p10',
        name: 'Brown Suede Shoes',
        description: 'Stylish brown suede shoes suitable for formal and casual occasions.',
        price: 2999,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a607eb65-80fd-469e-a417-4d6a76b3c76c.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a652893-cd98-441e-917e-5cd16c34623b.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/054cc6ef-99c2-4660-ae10-b0b9ce8bc092.png'
        ],
        category: 'Shoes',
        brand: 'FootwearPro',
        rating: 4.6,
        reviews: [
            { id: 'r11', userId: 'u11', rating: 5, comment: 'Really comfortable to wear.', helpful: 15, verified: true, createdAt: '2023-08-10', userName: 'Amit Upadhyay' }
        ],
        stock: 6,
        variants: [
            { id: 'v19', color: 'Brown', size: '9', price: 2999, stock: 3 },
            { id: 'v20', color: 'Brown', size: '10', price: 2999, stock: 3 }
        ],
        tags: ['shoes', 'brown', 'suede']
    },
    {
        id: 'p11',
        name: 'White Sneakers',
        description: 'Classic white sneakers with comfortable sole and modern design.',
        price: 2499,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9bfa39f-4404-4747-bf11-c34b25471269.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/109d3ac4-114b-4dd8-a553-11baeb010172.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9af017ee-2c36-49ee-8d4c-c568317cfd8b.png'
        ],
        category: 'Shoes',
        brand: 'SneakerWorld',
        rating: 4.5,
        reviews: [
            { id: 'r12', userId: 'u12', rating: 4, comment: 'Good fit and looks great.', helpful: 7, verified: true, createdAt: '2023-08-20', userName: 'Tusli katra' }
        ],
        stock: 20,
        variants: [
            { id: 'v21', color: 'White', size: '9', price: 2499, stock: 10 },
            { id: 'v22', color: 'White', size: '10', price: 2499, stock: 10 }
        ],
        tags: ['sneakers', 'white', 'shoes']
    },
    {
        id: 'p12',
        name: 'Pink Floral Dress',
        description: 'Lovely pink floral dress perfect for spring and summer occasions.',
        price: 1999,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9cbef465-e5b1-4e7f-9620-68017b001a33.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d70c391-b435-4afe-952e-cb32b1e28e34.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c090014-91c3-493a-be26-64f7093534c2.png'
        ],
        category: 'Dresses',
        brand: 'Fashionista',
        rating: 4.7,
        reviews: [
            { id: 'r13', userId: 'u13', rating: 5, comment: 'Beautiful and comfortable.', helpful: 9, verified: true, createdAt: '2023-09-05', userName: 'Mihan katra' }
        ],
        stock: 14,
        variants: [
            { id: 'v23', color: 'Pink', size: 'S', price: 1999, stock: 7 },
            { id: 'v24', color: 'Pink', size: 'M', price: 1999, stock: 7 }
        ],
        tags: ['dress', 'floral', 'pink']
    },
    {
        id: 'p13',
        name: 'Black Formal Trousers',
        description: 'Classic black formal trousers suitable for office wear and formal events.',
        price: 1699,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/646ce822-cc67-40c3-82c3-3a2ce19f8ee9.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4a30d5bb-c73a-47cb-9416-44a9faafbcba.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b0285c0-1c9c-460b-9345-c609f0c30628.png'
        ],
        category: 'Trousers',
        brand: 'Formale',
        rating: 4.3,
        reviews: [
            { id: 'r14', userId: 'u14', rating: 4, comment: 'Good fabric and fit.', helpful: 6, verified: true, createdAt: '2023-09-10', userName: 'Krishna' }
        ],
        stock: 13,
        variants: [
            { id: 'v25', color: 'Black', size: '32', price: 1699, stock: 6 },
            { id: 'v26', color: 'Black', size: '34', price: 1699, stock: 7 }
        ],
        tags: ['formal', 'trousers', 'black']
    },
    {
        id: 'p14',
        name: 'Blue Denim Jeans',
        description: 'Classic blue denim jeans with comfortable fit and durability.',
        price: 2199,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43fdef6c-e087-433d-b7d5-8ac6ae99ebeb.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8136df16-c2fa-4265-9a51-1fecf307b4ff.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7345191-5d7d-431c-853d-e2d1875eb49c.png'
        ],
        category: 'Jeans',
        brand: 'DenimCo',
        rating: 4.6,
        reviews: [
            { id: 'r15', userId: 'u15', rating: 5, comment: 'Great fit and style.', helpful: 8, verified: true, createdAt: '2023-09-15', userName: 'Nasim' }
        ],
        stock: 16,
        variants: [
            { id: 'v27', color: 'Blue', size: '30', price: 2199, stock: 8 },
            { id: 'v28', color: 'Blue', size: '32', price: 2199, stock: 8 }
        ],
        tags: ['denim', 'jeans', 'blue']
    },
    {
        id: 'p15',
        name: 'Orange Summer Shorts',
        description: 'Bright orange summer shorts made of lightweight fabric, perfect for warm days.',
        price: 799,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5864f746-2d03-4a74-9d31-08456749ae24.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb8e09a8-83ae-4b54-ae71-2fadb087a48c.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6236fa6-a9fe-4fa4-9fa7-044aa8432529.png'
        ],
        category: 'Shorts',
        brand: 'SunshineWear',
        rating: 4.2,
        reviews: [
            { id: 'r16', userId: 'u16', rating: 4, comment: 'Very comfortable and fun.', helpful: 5, verified: true, createdAt: '2023-09-20', userName: 'Vivek' }
        ],
        stock: 22,
        variants: [
            { id: 'v29', color: 'Orange', size: 'M', price: 799, stock: 11 },
            { id: 'v30', color: 'Orange', size: 'L', price: 799, stock: 11 }
        ],
        tags: ['shorts', 'summer', 'orange']
    },
    {
        id: 'p16',
        name: 'Purple Winter Scarf',
        description: 'Warm purple scarf perfect for cold weather. Soft and stylish.',
        price: 399,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff33b1d0-ee93-4d27-b2f7-661eed088209.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ecdb3f7-08aa-4adf-9def-e56ecb25a22c.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/770025c6-07e9-4592-822e-c0d04e5b14d2.png'
        ],
        category: 'Accessories',
        brand: 'WinterWear',
        rating: 4.8,
        reviews: [
            { id: 'r17', userId: 'u17', rating: 5, comment: 'Extremely warm and soft.', helpful: 9, verified: true, createdAt: '2023-10-01', userName: 'Sumit' }
        ],
        stock: 30,
        variants: [
            { id: 'v31', color: 'Purple', price: 399, stock: 30 }
        ],
        tags: ['scarf', 'winter', 'purple']
    },
    {
        id: 'p17',
        name: 'Yellow Raincoat',
        description: 'Bright yellow waterproof raincoat with hood. Stay dry and stylish.',
        price: 2499,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc059ba3-5ec0-47fd-b8c3-94c8a6a66e81.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/785eeb42-45f3-4cb1-80a5-fe8a82a3c84f.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/613d9d85-0af3-459f-a294-a6b3e2a61e3b.png'
        ],
        category: 'Outerwear',
        brand: 'RainyDays',
        rating: 4.3,
        reviews: [
            { id: 'r18', userId: 'u18', rating: 4, comment: 'Great for rainy weather.', helpful: 6, verified: true, createdAt: '2023-10-05', userName: 'Rohit' }
        ],
        stock: 8,
        variants: [
            { id: 'v32', color: 'Yellow', size: 'M', price: 2499, stock: 4 },
            { id: 'v33', color: 'Yellow', size: 'L', price: 2499, stock: 4 }
        ],
        tags: ['raincoat', 'yellow', 'outerwear']
    },
    {
        id: 'p18',
        name: 'Beige Cardigan Sweater',
        description: 'Soft beige cardigan sweater with buttons, great for layering.',
        price: 2299,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5da40665-7327-4d40-a074-f566f5311e90.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e2abba42-6587-4d75-b2b4-3682efee268f.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbe1ef7c-5e55-474d-9ca8-a956b8b02907.png'
        ],
        category: 'Sweaters',
        brand: 'CozyClothes',
        rating: 4.6,
        reviews: [
            { id: 'r19', userId: 'u19', rating: 5, comment: 'Perfect for chilly nights.', helpful: 7, verified: true, createdAt: '2023-10-10', userName: 'Sunil' }
        ],
        stock: 14,
        variants: [
            { id: 'v34', color: 'Beige', size: 'M', price: 2299, stock: 7 },
            { id: 'v35', color: 'Beige', size: 'L', price: 2299, stock: 7 }
        ],
        tags: ['cardigan', 'beige', 'sweater']
    },
    {
        id: 'p19',
        name: 'Black Sports Jacket',
        description: 'Lightweight black jacket perfect for outdoor sports and activities.',
        price: 3199,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0539b7f3-4ffe-41de-9de2-845efb7d4b89.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff45996d-cd0d-4e48-9527-6e48fcf713d4.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acf13fc1-8edf-4120-a2a2-9a24b3c37477.png'
        ],
        category: 'Jackets',
        brand: 'Sportz',
        rating: 4.4,
        reviews: [
            { id: 'r20', userId: 'u20', rating: 4, comment: 'Very comfortable and breathable.', helpful: 8, verified: true, createdAt: '2023-10-15', userName: 'Amit upadhyay' }
        ],
        stock: 10,
        variants: [
            { id: 'v36', color: 'Black', size: 'M', price: 3199, stock: 5 },
            { id: 'v37', color: 'Black', size: 'L', price: 3199, stock: 5 }
        ],
        tags: ['sports', 'jacket', 'black']
    },
    {
        id: 'p20',
        name: 'Blue Denim Shorts',
        description: 'Casual blue denim shorts with a relaxed fit for hot summer days.',
        price: 1299,
        images: [
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/893eb7f7-9abd-46de-b004-e6b6405dff8a.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d362b909-eeef-45c8-acea-04c08672b51b.png',
            'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5afe2720-ed79-47c1-8665-624c11289d06.png'
        ],
        category: 'Shorts',
        brand: 'DenimCo',
        rating: 4.1,
        reviews: [
            { id: 'r21', userId: 'u21', rating: 4, comment: 'Good quality and fit.', helpful: 6, verified: true, createdAt: '2023-10-20', userName: 'Pal singh' }
        ],
        stock: 18,
        variants: [
            { id: 'v38', color: 'Blue', size: 'M', price: 1299, stock: 9 },
            { id: 'v39', color: 'Blue', size: 'L', price: 1299, stock: 9 }
        ],
        tags: ['shorts', 'denim', 'blue']
    }
];

// Users sample data (simplified)
const users = [
    {
        id: 'u1',
        email: 'alice@example.com',
        name: 'Alice',
        addresses: ['123 Wonderland Drive, Imagineland'],
        paymentMethods: ['Credit Card'],
        wishlist: [],
        orderHistory: []
    }
];
let currentUserId = 'u1'; // default logged in user

// Cart state - persist in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Wishlist state - persist in localStorage
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// State for filters and sorting
let activeFilters = {
    categories: new Set(),
    brands: new Set(),
    maxPrice: 10000
};
let sortMethod = 'popularity';
// Products page size and pagination
const pageSize = 8;
let currentPage = 1;

// DOM elements
const productGridEl = document.getElementById('productGrid');
const cartCountEl = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalPriceEl = document.getElementById('cartTotalPrice');
const checkoutBtnEl = document.getElementById('checkoutBtn');
const filterCategoriesEl = document.getElementById('filterCategories');
const filterBrandsEl = document.getElementById('filterBrands');
const priceRangeEl = document.getElementById('priceRange');
const priceMaxLabelEl = document.getElementById('priceMaxLabel');
const sortSelectEl = document.getElementById('sortSelect');
const paginationEl = document.getElementById('pagination');
const productDetailModalEl = document.getElementById('productDetailModal');
const detailCloseBtn = document.getElementById('detailCloseBtn');
const detailMainImgTag = document.getElementById('detailMainImgTag');
const detailMainImage = document.getElementById('detailMainImage');
const detailThumbnailsEl = document.getElementById('detailThumbnails');
const detailNameEl = document.getElementById('detailName');
const detailPriceEl = document.getElementById('detailPrice');
const detailDescriptionEl = document.getElementById('detailDescription');
const detailRatingEl = document.getElementById('detailRating');
const detailAddCartBtn = document.getElementById('detailAddCartBtn');
const detailWishlistBtn = document.getElementById('detailWishlistBtn');
const reviewsContainerEl = document.getElementById('reviewsContainer');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const checkoutModalEl = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutForm = document.getElementById('checkoutForm');

// Utility - Format price to INR
function formatPrice(val) {
    return '₹' + val.toLocaleString('en-IN');
}

// Utility - Create rating stars with count
function renderRatingStars(rating, count) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<span class="material-icons" aria-hidden="true">star</span>';
    }
    if (halfStar) {
        starsHtml += '<span class="material-icons" aria-hidden="true">star_half</span>';
    }
    const totalStars = halfStar ? fullStars + 1 : fullStars;
    for (let i = totalStars; i < 5; i++) {
        starsHtml += '<span class="material-icons" aria-hidden="true">star_outline</span>';
    }
    const label = `Rated ${rating.toFixed(1)} stars${count ? ' by ' + count + ' reviews' : ''}`;
    return { html: starsHtml, label };
}

// Filter data - categories and brands from product list
const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueBrands = [...new Set(products.map(p => p.brand))];

// Render Filters
function renderFilters() {
    // Categories
    filterCategoriesEl.innerHTML = '';
    uniqueCategories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'filter-item';
        const id = 'cat-' + category.replace(/\s+/g, '').toLowerCase();
        div.innerHTML = `
          <label for="${id}">
            <input type="checkbox" id="${id}" name="category" value="${category}" ${activeFilters.categories.has(category) ? 'checked' : ''} />
            ${category}
          </label>`;
        filterCategoriesEl.appendChild(div);
    });
    // Brands
    filterBrandsEl.innerHTML = '';
    uniqueBrands.forEach(brand => {
        const div = document.createElement('div');
        div.className = 'filter-item';
        const id = 'brand-' + brand.replace(/\s+/g, '').toLowerCase();
        div.innerHTML = `
          <label for="${id}">
            <input type="checkbox" id="${id}" name="brand" value="${brand}" ${activeFilters.brands.has(brand) ? 'checked' : ''} />
            ${brand}
          </label>`;
        filterBrandsEl.appendChild(div);
    });
    // Price range
    priceRangeEl.value = activeFilters.maxPrice;
    priceMaxLabelEl.textContent = formatPrice(activeFilters.maxPrice);
}

// Filter products according to active filters
function filterProducts() {
    let filtered = products.filter(p => {
        if (activeFilters.categories.size && !activeFilters.categories.has(p.category)) return false;
        if (activeFilters.brands.size && !activeFilters.brands.has(p.brand)) return false;
        if (p.price > activeFilters.maxPrice) return false;
        return true;
    });
    return filtered;
}

// Sort products by current sorting method
function sortProducts(list) {
    switch (sortMethod) {
        case 'price-asc':
            return list.slice().sort((a, b) => a.price - b.price);
        case 'price-desc':
            return list.slice().sort((a, b) => b.price - a.price);
        case 'rating-desc':
            return list.slice().sort((a, b) => b.rating - a.rating);
        case 'newest':
            // no timestamp so randomize (simulate newest first)
            return list.slice().sort(() => Math.random() - 0.5);
        case 'popularity':
        default:
            // Sort by sum of reviews helpful votes (simulate popularity)
            return list.slice().sort((a, b) => {
                const aHelp = a.reviews.reduce((acc, r) => acc + r.helpful, 0);
                const bHelp = b.reviews.reduce((acc, r) => acc + r.helpful, 0);
                return bHelp - aHelp;
            });
    }
}

// Pagination rendering based on total pages
function renderPagination(totalPages) {
    paginationEl.innerHTML = '';
    if (totalPages <= 1) return;

    function createPageBtn(page) {
        const btn = document.createElement('button');
        btn.textContent = page;
        btn.disabled = page === currentPage;
        btn.style.margin = '0 4px';
        btn.style.fontWeight = page === currentPage ? '700' : '400';
        btn.style.borderRadius = '6px';
        btn.style.padding = '6px 12px';
        btn.style.border = '1px solid #ddd';
        btn.style.background = page === currentPage ? '#7c3aed' : 'transparent';
        btn.style.color = page === currentPage ? 'white' : '#444';
        btn.style.cursor = page === currentPage ? 'default' : 'pointer';
        btn.setAttribute('aria-label', 'Go to page ' + page);
        btn.addEventListener('click', () => {
            currentPage = page;
            renderProducts();
        });
        return btn;
    }

    // For simplicity show first 5 pages or total pages if less
    let pagesToShow = Math.min(5, totalPages);
    const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - pagesToShow + 1));

    for (let i = 0; i < pagesToShow; i++) {
        paginationEl.appendChild(createPageBtn(startPage + i));
    }
}

// Render product grid
function renderProducts() {
    const filteredProducts = filterProducts();
    const sortedProducts = sortProducts(filteredProducts);
    const totalPages = Math.ceil(sortedProducts.length / pageSize);
    currentPage = Math.min(currentPage, totalPages || 1);
    const pagedProducts = sortedProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    renderPagination(totalPages);

    productGridEl.innerHTML = '';
    if (pagedProducts.length === 0) {
        productGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align:center; font-size:1.2rem; color:#777;">No products found matching filters.</p>';
        return;
    }

    pagedProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.setAttribute('role', 'listitem');
        const { html: ratingStars, label: ratingLabel } = renderRatingStars(product.rating, product.reviews.length);
        card.innerHTML = `
          <div class="product-image-container" aria-label="${product.name}, product image">
            <img src="${product.images[0]}" alt="${product.name} image" loading="lazy" />
          </div>
          <div class="product-info">
            <div class="product-name" title="${product.name}">${product.name}</div>
            <div class="rating" aria-label="${ratingLabel}" role="img">${ratingStars} (${product.reviews.length})</div>
            <div class="product-price">${formatPrice(product.price)}</div>
          </div>
          <div class="product-actions">
            <button class="add-cart-btn" aria-label="Add ${product.name} to cart" data-product-id="${product.id}">
              <span class="material-icons" aria-hidden="true">shopping_cart</span> Add to Cart
            </button>
            <button class="wishlist-btn" aria-label="Toggle wishlist for ${product.name}" data-product-id="${product.id}">
              <span class="material-icons" aria-hidden="true">favorite</span> Wishlist
            </button>
            <button class="quickview-btn" aria-label="Quick view details of ${product.name}" data-product-id="${product.id}">
              <span class="material-icons" aria-hidden="true">visibility</span> Quick View
            </button>
          </div>`;
        // Highlight wishlist if in wishlist
        if (wishlist.includes(product.id)) {
            card.querySelector('button.wishlist-btn').classList.add('active');
            card.querySelector('button.wishlist-btn span.material-icons').textContent = 'favorite';
        }
        productGridEl.appendChild(card);
    });
    updateCartUI();
}

// Update cart count UI
function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalCount;
    cartCountEl.setAttribute('aria-label', `Shopping cart with ${totalCount} items`);
}

// Update cart UI in sidebar
function updateCartUI() {
    updateCartCount();
    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty" tabindex="0">Your cart is empty.</p>';
        checkoutBtnEl.disabled = true;
        checkoutBtnEl.setAttribute('aria-disabled', 'true');
        cartTotalPriceEl.textContent = formatPrice(0);
        return;
    }
    // Render cart items
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (!product) return;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', `${product.name} in cart, quantity ${cartItem.quantity}, price ${formatPrice(cartItem.price * cartItem.quantity)}`);
        div.innerHTML = `
          <div class="cart-item-thumbnail" aria-hidden="true">
            <img src="${product.images[0]}" alt="${product.name} thumbnail" loading="lazy" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">${formatPrice(cartItem.price * cartItem.quantity)}</div>
            <div class="quantity-controls" aria-label="Adjust quantity for ${product.name}">
              <button class="quantity-decrease" aria-label="Decrease quantity" ${cartItem.quantity <= 1 ? 'disabled' : ''}>&#8722;</button>
              <span class="quantity" aria-live="polite">${cartItem.quantity}</span>
              <button class="quantity-increase" aria-label="Increase quantity" ${cartItem.quantity >= product.stock ? 'disabled' : ''}>&#43;</button>
              <button class="remove-item-btn" aria-label="Remove item from cart" title="Remove" style="background:none; color: #ef4444; margin-left: auto; font-weight: 700;">&times;</button>
            </div>
          </div>
        `;
        // Add event listeners for quantity & remove buttons
        div.querySelector('.quantity-increase').addEventListener('click', () => updateCartQuantity(cartItem.id, cartItem.quantity + 1));
        div.querySelector('.quantity-decrease').addEventListener('click', () => updateCartQuantity(cartItem.id, cartItem.quantity - 1));
        div.querySelector('.remove-item-btn').addEventListener('click', () => removeFromCart(cartItem.id));
        cartItemsEl.appendChild(div);
    });
    // Update total price
    let totalPrice = 0;
    cart.forEach(item => totalPrice += item.price * item.quantity);
    cartTotalPriceEl.textContent = formatPrice(totalPrice);
    checkoutBtnEl.disabled = cart.length === 0;
    checkoutBtnEl.setAttribute('aria-disabled', (cart.length === 0).toString());
}

// Add product to cart - with quantity (default 1)
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (product.stock <= 0) {
        alert('This product is out of stock.');
        return;
    }
    // Check if product already in cart
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        const newQty = existing.quantity + quantity;
        if (newQty > product.stock) {
            alert('Quantity exceeds stock level.');
            return;
        }
        existing.quantity = newQty;
    } else {
        cart.push({
            id: crypto.randomUUID(),
            productId,
            quantity,
            price: product.price,
            addedAt: new Date().toISOString()
        });
    }
    saveCart();
    updateCartUI();
    showCartNotification(product.name);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Save wishlist to localStorage
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Update cart quantity
function updateCartQuantity(cartItemId, newQuantity) {
    if (newQuantity < 1) return;
    const item = cart.find(ci => ci.id === cartItemId);
    if (!item) return;
    const product = products.find(p => p.id === item.productId);
    if (newQuantity > product.stock) {
        alert('Quantity exceeds stock level.');
        return;
    }
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
}

// Remove item from cart
function removeFromCart(cartItemId) {
    cart = cart.filter(ci => ci.id !== cartItemId);
    saveCart();
    updateCartUI();
}

// Show temporary notification on cart addition
function showCartNotification(productName) {
    if (!('Notification' in window)) return;
    // Using alert fallback for now (can be replaced with toast)
    // For accessibility, simple alert role
    // alert(`${productName} added to cart.`);
    const notification = document.createElement('div');
    notification.textContent = `'${productName}' added to cart!`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = '#7c3aed';
    notification.style.color = 'white';
    notification.style.padding = '10px 16px';
    notification.style.borderRadius = '12px';
    notification.style.zIndex = '3000';
    notification.style.boxShadow = '0 4px 14px rgba(124, 58, 174, 0.7)';
    notification.style.fontWeight = '700';
    notification.style.userSelect = 'none';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2500);
}

// Toggle wishlist item
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }
    saveWishlist();
    renderProducts();
}

// Render product detail modal
let currentDetailProduct = null;
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentDetailProduct = product;

    // Set main image and thumbnails
    detailMainImgTag.src = product.images[0];
    detailMainImgTag.alt = `${product.name} main image`;
    detailThumbnailsEl.innerHTML = '';
    product.images.forEach((imgUrl, idx) => {
        const thumb = document.createElement('div');
        thumb.className = 'detail-thumb' + (idx === 0 ? ' selected' : '');
        thumb.setAttribute('role', 'listitem');
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = `${product.name} image ${idx + 1}`;
        thumb.appendChild(img);
        thumb.addEventListener('click', () => {
            detailMainImgTag.src = imgUrl;
            detailMainImgTag.alt = `${product.name} image ${idx + 1}`;
            detailThumbnailsEl.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('selected'));
            thumb.classList.add('selected');
        });
        detailThumbnailsEl.appendChild(thumb);
    });
    detailNameEl.textContent = product.name;
    detailPriceEl.textContent = formatPrice(product.price);
    detailDescriptionEl.textContent = product.description;
    // Show rating
    const { html: starsHTML, label } = renderRatingStars(product.rating, product.reviews.length);
    detailRatingEl.innerHTML = starsHTML + ` (${product.reviews.length})`;
    detailRatingEl.setAttribute('aria-label', label);

    // Add to cart button
    detailAddCartBtn.onclick = () => {
        addToCart(product.id);
    };
    // Wishlist button styling and toggle
    if (wishlist.includes(product.id)) {
        detailWishlistBtn.classList.add('active');
    } else {
        detailWishlistBtn.classList.remove('active');
    }
    detailWishlistBtn.onclick = () => {
        toggleWishlist(product.id);
        if (wishlist.includes(product.id)) {
            detailWishlistBtn.classList.add('active');
        } else {
            detailWishlistBtn.classList.remove('active');
        }
        renderProducts();
    };

    // Render reviews
    renderReviews(product.reviews);

    // Show modal
    productDetailModalEl.classList.add('active');
    productDetailModalEl.focus();
}
function closeProductDetail() {
    productDetailModalEl.classList.remove('active');
}

// Render reviews list
function renderReviews(reviews) {
    reviewsContainerEl.innerHTML = '<h4 style="font-weight:700; color:#7c3aed; user-select:none;">Customer Reviews</h4>';
    if (!reviews.length) {
        reviewsContainerEl.innerHTML += '<p>No reviews yet for this product.</p>';
        return;
    }
    reviews.forEach(review => {
        const { html: starsHTML, label } = renderRatingStars(review.rating);
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `
          <div class="review-header">
            <div class="review-username">${review.userName || 'Anonymous'}</div>
            <div class="review-rating" aria-label="${label}" role="img">${starsHTML}</div>
          </div>
          <div class="review-comment">${escapeHTML(review.comment)}</div>
        `;
        reviewsContainerEl.appendChild(div);
    });
}

// Escape HTML to prevent XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
}

// Cart sidebar toggle (for smaller screens)
function toggleCartSidebar() {
    const expanded = cartToggleBtn.getAttribute('aria-expanded') === 'true';
    cartToggleBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    document.querySelector('aside.cart-sidebar').style.display = expanded ? 'none' : 'flex';
}

// Checkout modal open and close
function openCheckoutModal() {
    checkoutModalEl.classList.add('active');
    checkoutForm.reset();
    clearFormErrors();
    document.getElementById('checkoutSuccessMsg').style.display = 'none';
    checkoutModalEl.focus();
}
function closeCheckoutModal() {
    checkoutModalEl.classList.remove('active');
}

// Validate checkout form
function validateCheckoutForm() {
    let valid = true;
    clearFormErrors();
    const nameInput = checkoutForm.name;
    const emailInput = checkoutForm.email;
    const addressInput = checkoutForm.address;
    const paymentSelect = checkoutForm.payment;

    if (!nameInput.value.trim()) {
        showError('nameError', 'Name is required');
        valid = false;
    }
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        showError('emailError', 'Valid email is required');
        valid = false;
    }
    if (!addressInput.value.trim()) {
        showError('addressError', 'Shipping address is required');
        valid = false;
    }
    if (!paymentSelect.value) {
        showError('paymentError', 'Payment method is required');
        valid = false;
    }
    return valid;
}
function showError(id, msg) {
    document.getElementById(id).textContent = msg;
}
function clearFormErrors() {
    ['nameError', 'emailError', 'addressError', 'paymentError'].forEach(id => {
        document.getElementById(id).textContent = '';
    });
}

// Handle checkout form submit
checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateCheckoutForm()) return;
    // Simulate order placement
    setTimeout(() => {
        document.getElementById('checkoutSuccessMsg').style.display = 'block';
        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();

        // Close modal after short delay
        setTimeout(() => {
            closeCheckoutModal();
        }, 3000);
    }, 1000);
});

// Global click handlers for product action buttons
productGridEl.addEventListener('click', e => {
    const addBtn = e.target.closest('button.add-cart-btn');
    if (addBtn) {
        const productId = addBtn.dataset.productId;
        addToCart(productId);
        return;
    }
    const wishlistBtn = e.target.closest('button.wishlist-btn');
    if (wishlistBtn) {
        const productId = wishlistBtn.dataset.productId;
        toggleWishlist(productId);
        return;
    }
    const quickViewBtn = e.target.closest('button.quickview-btn');
    if (quickViewBtn) {
        const productId = quickViewBtn.dataset.productId;
        openProductDetail(productId);
        return;
    }
});

// Filter change handlers
filterCategoriesEl.addEventListener('change', e => {
    if (e.target.name === 'category') {
        if (e.target.checked) {
            activeFilters.categories.add(e.target.value);
        } else {
            activeFilters.categories.delete(e.target.value);
        }
        currentPage = 1;
        renderProducts();
    }
});
filterBrandsEl.addEventListener('change', e => {
    if (e.target.name === 'brand') {
        if (e.target.checked) {
            activeFilters.brands.add(e.target.value);
        } else {
            activeFilters.brands.delete(e.target.value);
        }
        currentPage = 1;
        renderProducts();
    }
});
priceRangeEl.addEventListener('input', e => {
    const maxVal = parseInt(e.target.value, 10);
    activeFilters.maxPrice = maxVal;
    priceMaxLabelEl.textContent = formatPrice(maxVal);
    currentPage = 1;
    renderProducts();
});
sortSelectEl.addEventListener('change', e => {
    sortMethod = e.target.value;
    currentPage = 1;
    renderProducts();
});

// Close modals on close buttons
detailCloseBtn.addEventListener('click', closeProductDetail);
checkoutCloseBtn.addEventListener('click', closeCheckoutModal);

// Keyboard accessibility: close modals on Esc key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (productDetailModalEl.classList.contains('active')) {
            closeProductDetail();
        }
        if (checkoutModalEl.classList.contains('active')) {
            closeCheckoutModal();
        }
    }
});

// Cart toggle button handler (for mobile/tablet)
cartToggleBtn.addEventListener('click', () => {
    toggleCartSidebar();
});

// Checkout button handler
checkoutBtnEl.addEventListener('click', () => {
    openCheckoutModal();
});

// Initialize UI with filters and products
function init() {
    renderFilters();
    renderProducts();
    // Set cart sidebar display based on screen width initially
    if (window.innerWidth < 769) {
        document.querySelector('aside.cart-sidebar').style.display = 'none';
    }
}
init();