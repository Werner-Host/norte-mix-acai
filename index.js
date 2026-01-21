const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Norte Mix Açaí - Delivery</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
        }

        :root {
            --primary: #6B1B9A;
            --primary-dark: #4A148C;
            --accent: #FFA726;
            --success: #4CAF50;
            --background: #F5F5F5;
            --surface: #FFFFFF;
            --text-main: #212121;
            --text-secondary: #757575;
            --price-green: #00A86B;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: var(--background);
            color: var(--text-main);
            padding-bottom: 80px;
        }

        /* Header com Banner */
        .header-banner {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            padding: 16px;
            text-align: center;
            position: relative;
        }

        .store-logo {
            width: 100px;
            height: 100px;
            background: white;
            border-radius: 50%;
            margin: 0 auto 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: 800;
            color: var(--primary);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .store-name {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .store-info {
            font-size: 0.85rem;
            opacity: 0.9;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 8px;
        }

        /* Category Tabs */
        .category-tabs {
            background: white;
            display: flex;
            overflow-x: auto;
            gap: 8px;
            padding: 12px 16px;
            border-bottom: 1px solid #E0E0E0;
            position: sticky;
            top: 0;
            z-index: 100;
            -webkit-overflow-scrolling: touch;
        }

        .category-tabs::-webkit-scrollbar {
            display: none;
        }

        .category-tab {
            background: transparent;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-secondary);
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.2s;
        }

        .category-tab.active {
            background: var(--primary);
            color: white;
        }

        /* Main Content */
        main {
            max-width: 600px;
            margin: 0 auto;
            padding: 16px;
        }

        .promo-banner {
            background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
            border: 2px dashed var(--success);
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 20px;
            text-align: center;
        }

        .promo-text {
            color: var(--success);
            font-weight: 700;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        .category-section {
            margin-bottom: 32px;
        }

        .category-title {
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 3px solid var(--primary);
            display: inline-block;
        }

        /* Product Cards - Layout da Imagem */
        .product-card {
            background: white;
            border-radius: 12px;
            padding: 12px;
            margin-bottom: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            display: flex;
            gap: 12px;
            position: relative;
        }

        .product-image-container {
            width: 90px;
            height: 90px;
            flex-shrink: 0;
            position: relative;
            order: -1;
        }

        .product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }

        .product-main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-name {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 4px;
            line-height: 1.3;
        }

        .product-desc {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
            line-height: 1.3;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .product-price-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
        }

        .product-price {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--price-green);
        }



        .add-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .add-btn:active {
            transform: scale(0.95);
        }

        /* Options & Extras */
        .options-section {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #F0F0F0;
        }

        .options-title {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }

        .option-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 0;
            font-size: 0.85rem;
        }

        .option-label {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1;
            cursor: pointer;
        }

        .option-price {
            font-size: 0.75rem;
            color: var(--price-green);
            font-weight: 600;
            margin-right: 8px;
        }

        input[type="radio"] {
            accent-color: var(--primary);
            width: 16px;
            height: 16px;
        }

        /* Toggle Switch for Extras */
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 22px;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.3s;
            border-radius: 22px;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.3s;
            border-radius: 50%;
        }

        .toggle-switch input:checked + .toggle-slider {
            background-color: var(--primary);
        }

        .toggle-switch input:checked + .toggle-slider:before {
            transform: translateX(18px);
        }

        /* Delivery Section */
        .delivery-card {
            background: white;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .delivery-title {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--text-main);
        }

        .delivery-toggle {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;
        }

        .delivery-btn {
            flex: 1;
            padding: 10px;
            border: 2px solid #E0E0E0;
            border-radius: 8px;
            background: white;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s;
            color: var(--text-secondary);
        }

        .delivery-btn.active {
            border-color: var(--primary);
            background: rgba(107, 27, 154, 0.05);
            color: var(--primary);
        }

        .neighborhood-select {
            width: 100%;
            padding: 12px;
            border: 1px solid #E0E0E0;
            border-radius: 8px;
            font-size: 0.95rem;
            background: white;
        }

        .fee-info {
            margin-top: 8px;
            font-size: 0.85rem;
            color: var(--success);
            font-weight: 600;
        }

        .pickup-info {
            margin-top: 12px;
            padding: 12px;
            background: #E8F5E9;
            border-radius: 8px;
            font-size: 0.85rem;
            color: var(--success);
            line-height: 1.4;
        }

        /* Footer Cart */
        .footer-cart {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            padding: 12px 16px;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
            z-index: 200;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .cart-icon-wrapper {
            position: relative;
            cursor: pointer;
        }

        .cart-icon {
            width: 48px;
            height: 48px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        .cart-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: #E53935;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            font-weight: 700;
        }

        .cart-middle {
            flex: 1;
            text-align: center;
        }

        .cart-status-msg {
            font-size: 0.75rem;
            color: var(--text-secondary);
            margin-bottom: 4px;
        }

        .cart-total-value {
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--primary);
        }

        .checkout-btn {
            background: var(--success);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 24px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
            transition: all 0.2s;
        }

        .checkout-btn:disabled {
            background: #BDBDBD;
            box-shadow: none;
            cursor: not-allowed;
        }

        /* Cart Sidebar - Bottom Sheet */
        .cart-sidebar {
            position: fixed;
            bottom: -100%;
            left: 0;
            width: 100%;
            max-height: 80vh;
            background: white;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
            z-index: 1000;
            transition: bottom 0.3s ease;
            display: flex;
            flex-direction: column;
            border-radius: 20px 20px 0 0;
        }

        .cart-sidebar.open {
            bottom: 0;
        }

        .cart-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
        }

        .cart-overlay.show {
            opacity: 1;
            pointer-events: all;
        }

        .cart-header {
            padding: 20px;
            background: var(--primary);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cart-header h3 {
            font-size: 1.3rem;
            font-weight: 700;
        }

        .close-cart {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 4px;
        }

        .cart-items {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            max-height: 40vh;
        }

        .cart-delivery-section {
            padding: 16px;
            border-top: 2px solid #F0F0F0;
            background: #FAFAFA;
        }

        .cart-item {
            background: #F5F5F5;
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }

        .cart-item-info {
            flex: 1;
        }

        .cart-item-name {
            font-weight: 700;
            margin-bottom: 4px;
        }

        .cart-item-details {
            font-size: 0.75rem;
            color: var(--text-secondary);
            line-height: 1.3;
        }

        .cart-item-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;
        }

        .cart-item-price {
            font-weight: 700;
            color: var(--price-green);
        }

        .trash-btn {
            background: none;
            border: none;
            color: #E53935;
            cursor: pointer;
            padding: 4px;
        }

        .empty-cart {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
        }

        .empty-cart svg {
            width: 80px;
            height: 80px;
            opacity: 0.3;
            margin-bottom: 16px;
        }

        .toast {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 2000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
        }

        .toast.show {
            opacity: 1;
        }
    </style>
</head>

<body>
    <!-- Header Banner -->
    <div class="header-banner">
        <img src="https://raw.githubusercontent.com/Werner-Host/norte-mix-acai/refs/heads/main/pratos/teru5r.jpeg" class="store-logo" style="object-fit: cover; padding: 0;">
        <div class="store-name">Norte Mix Açaí</div>
        <div class="store-info">
            <span>⏱️ 30-40 min</span>
            <span>•</span>
            <span>📍 Navegantes - SC</span>
        </div>
    </div>

    <!-- Category Tabs -->
    <div class="category-tabs" id="category-tabs"></div>

    <!-- Main Content -->
    <main>
        <!-- Promo Banner 
        <div class="promo-banner">
            <div class="promo-text">** A cada R$ 15,00 em compras você ganha 1 ponto! Acumule e troque por produtos! **</div>
        </div> -->

        <!-- Products Container -->
        <div id="products-container"></div>

    </main>

    <!-- Cart Overlay -->
    <div id="cart-overlay" class="cart-overlay" onclick="app.toggleCart()"></div>

    <!-- Cart Sidebar -->
    <div id="cart-sidebar" class="cart-sidebar">
        <div class="cart-header">
            <h3>Carrinho</h3>
            <button class="close-cart" onclick="app.toggleCart()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div id="cart-items" class="cart-items"></div>
        
        <!-- Delivery Section Inside Cart -->
        <div class="cart-delivery-section">
            <div class="delivery-title">Como deseja receber?</div>
            <div class="delivery-toggle">
                <button class="delivery-btn active" id="btn-delivery" onclick="app.setDeliveryType('delivery')">Entrega</button>
                <button class="delivery-btn" id="btn-pickup" onclick="app.setDeliveryType('pickup')">Retirada</button>
            </div>
            <div id="neighborhood-container">
                <select id="neighborhood" class="neighborhood-select" onchange="app.updateNeighborhood()">
                    <option value="">-- Selecione o Bairro --</option>
                </select>
                <div class="fee-info" id="fee-display"></div>
            </div>
            <div id="pickup-info" class="pickup-info" style="display:none;">
                <strong>📍 Endereço para Retirada:</strong><br>
                Rua Orlando Ferreira, 222 - Machados<br>
                Navegantes - SC, CEP 88371-320
            </div>
        </div>
    </div>

    <!-- Footer Cart -->
    <footer class="footer-cart">
        <div class="cart-icon-wrapper" onclick="app.toggleCart()" style="display:none;" id="cart-icon-wrapper">
            <div class="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </div>
            <span class="cart-badge" id="cart-badge">0</span>
        </div>
        <div class="cart-middle">
            <div class="cart-status-msg" id="cart-status-msg">Adicione itens ao carrinho</div>
            <div class="cart-total-value">R$ <span id="grand-total">0,00</span></div>
        </div>
        <button class="checkout-btn" id="checkout-btn" disabled onclick="app.sendOrder()">Pedir</button>
    </footer>

    <div id="toast" class="toast"></div>

    <script>
        const commonExtras = [
            { id: 'ex1', name: "Farinha de mandioca (100g)", price: 3.00 },
            { id: 'ex2', name: "Prato com Baião", price: 15.00 },
            { id: 'ex3', name: "Açaí 500ml", price: 20.00 },
            { id: 'ex4', name: "Batata frita 150g", price: 10.00 },
            { id: 'ex5', name: "Ovo frito", price: 3.00 }
        ];

        const products = [
            // Comidas Típicas
            { id: 1, name: "Tacacá", description: "Caldo de tucupi com camarão seco, jambu e goma de tapioca", price: 25.00, category: "Comidas Típicas", image: "https://raw.githubusercontent.com/Werner-Host/norte-mix-acai/refs/heads/main/pratos/7jwup.jpeg", extras: commonExtras },
            { id: 2, name: "Vatapá", description: "Creme com leite de coco, azeite de dendê, camarões e arroz", price: 28.00, category: "Comidas Típicas", image: "https://picsum.photos/seed/vatapa/150/150", extras: commonExtras },
            { id: 3, name: "Maniçoba", description: "Folhas de mandioca triturada, carne de porco, calabresa e defumados", price: 35.00, category: "Comidas Típicas", image: "https://picsum.photos/seed/manicoba/150/150", extras: commonExtras },
            { id: 4, name: "Vataçoba", description: "Combinação de vatapá e maniçoba com arroz", price: 40.00, category: "Comidas Típicas", image: "https://picsum.photos/seed/vatacoba/150/150", extras: commonExtras },

            // Clássico Paraense
            { id: 5, name: "Filé de Dourada", description: "200g filé frito + farinha + açúcar", price: 33.00, category: "Clássico Paraense", image: "https://picsum.photos/seed/dourada/150/150", options: [{ name: "Com Arroz", price: 33.00 }, { name: "Com Baião", price: 35.00 }, { name: "Com Açaí", price: 40.00 }], extras: commonExtras },
            { id: 6, name: "Filé de Gó", description: "Peixe típico da região", price: 30.00, category: "Clássico Paraense", image: "https://picsum.photos/seed/go/150/150", options: [{ name: "Com Arroz", price: 30.00 }, { name: "Com Baião", price: 33.00 }, { name: "Com Açaí", price: 35.00 }], extras: commonExtras },
            { id: 7, name: "À Moda Paraense (com Baião)", description: "Acompanha farinha e açúcar", price: 33.00, category: "Clássico Paraense", image: "https://picsum.photos/seed/paraenseb/150/150", options: [{ name: "Calabresa", price: 33.00 }, { name: "Mortadela", price: 33.00 }, { name: "Charque", price: 38.00 }, { name: "Mista", price: 38.00 }], extras: commonExtras },
            { id: 8, name: "Opções com Açaí", description: "Acompanha açaí 500ml", price: 35.00, category: "Clássico Paraense", image: "https://picsum.photos/seed/paraensea/150/150", options: [{ name: "Calabresa", price: 35.00 }, { name: "Mortadela", price: 35.00 }, { name: "Charque", price: 40.00 }, { name: "Mista", price: 40.00 }, { name: "Camarão", price: 40.00 }], extras: commonExtras },

            // Clássico Amazonense
            { id: 9, name: "Costelinha de Tambaqui", description: "Peixe nobre da Amazônia", price: 40.00, category: "Clássico Amazonense", image: "https://picsum.photos/seed/tambaqui/150/150", options: [{ name: "Com Arroz", price: 40.00 }, { name: "Com Baião", price: 45.00 }, { name: "Com Açaí", price: 48.00 }], extras: commonExtras },
            { id: 10, name: "Pirarucu Frito", description: "Bacalhau da Amazônia", price: 30.00, category: "Clássico Amazonense", image: "https://picsum.photos/seed/pirarucuf/150/150", options: [{ name: "Com Arroz", price: 30.00 }, { name: "Com Baião", price: 35.00 }], extras: commonExtras },
            { id: 11, name: "Filé de Pirarucu", description: "Filé nobre com açaí", price: 40.00, category: "Clássico Amazonense", image: "https://picsum.photos/seed/pirarucu/150/150", options: [{ name: "Com Açaí", price: 40.00 }], extras: commonExtras },
            { id: 12, name: "Pescada Frita", description: "Peixe fresco frito", price: 40.00, category: "Clássico Amazonense", image: "https://picsum.photos/seed/pescadaf/150/150", options: [{ name: "Com Arroz", price: 40.00 }, { name: "Com Baião", price: 45.00 }], extras: commonExtras },
            { id: 13, name: "Filé de Pescada Amarela", description: "Filé premium com açaí", price: 48.00, category: "Clássico Amazonense", image: "https://picsum.photos/seed/pescada/150/150", options: [{ name: "Com Açaí", price: 48.00 }], extras: commonExtras },

            // Pratos Tradicionais
            { id: 14, name: "Carne Assada", description: "Arroz, macarrão, feijão e farinha (quinta, sexta e sábado)", price: 40.00, category: "Pratos Tradicionais", image: "https://picsum.photos/seed/carne/150/150", extras: commonExtras },
            { id: 15, name: "Frango Empanado", description: "Arroz, macarrão, feijão e farinha", price: 30.00, category: "Pratos Tradicionais", image: "https://picsum.photos/seed/frango/150/150", extras: commonExtras },
            { id: 16, name: "Bife Acebolado", description: "Arroz, macarrão, feijão e farinha", price: 30.00, category: "Pratos Tradicionais", image: "https://picsum.photos/seed/bife/150/150", extras: commonExtras },

            // Salgados
            { id: 17, name: "Coxinha de Caranguejo", description: "", price: 15.00, category: "Salgados", image: "https://picsum.photos/seed/c1/150/150" },
            { id: 18, name: "Coxinha de Camarão", description: "", price: 12.00, category: "Salgados", image: "https://picsum.photos/seed/c2/150/150" },
            { id: 19, name: "Coxinha de Charque", description: "", price: 12.00, category: "Salgados", image: "https://picsum.photos/seed/c3/150/150" },
            { id: 20, name: "Coxinha de Frango", description: "", price: 12.00, category: "Salgados", image: "https://picsum.photos/seed/c4/150/150" },
            { id: 21, name: "Torta Salgada", description: "", price: 15.00, category: "Salgados", image: "https://picsum.photos/seed/c5/150/150" },

            // Adicionais
            { id: 22, name: "Farinha de Mandioca (100g)", description: "", price: 3.00, category: "Adicionais", image: "https://picsum.photos/seed/man/150/150" },
            { id: 23, name: "Prato com Baião", description: "", price: 15.00, category: "Adicionais", image: "https://picsum.photos/seed/baiao/150/150" },
            { id: 24, name: "Açaí 500ml", description: "", price: 20.00, category: "Adicionais", image: "https://picsum.photos/seed/acaiex/150/150" },
            { id: 25, name: "Batata Frita 150g", description: "", price: 10.00, category: "Adicionais", image: "https://picsum.photos/seed/batata/150/150" },
            { id: 26, name: "Ovo Frito", description: "", price: 3.00, category: "Adicionais", image: "https://picsum.photos/seed/ovo2/150/150" },

            // Bebidas
            { id: 27, name: "Guaraná da Amazônia 300ml", description: "Amendoim, castanha, guaraná, catuaba, leite e abacate", price: 18.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/g300/150/150" },
            { id: 28, name: "Guaraná da Amazônia 400ml", description: "Coberturas: chocolate, morango, uva ou açaí", price: 20.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/g400/150/150" },
            { id: 29, name: "Limonada 300ml", description: "Água, limão, extrato de guaraná e gelo", price: 10.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/limonada/150/150" },
            { id: 30, name: "Suco de Acerola (300ml)", description: "", price: 6.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/s1/150/150" },
            { id: 31, name: "Suco de Maracujá (300ml)", description: "", price: 6.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/s2/150/150" },
            { id: 32, name: "Suco de Muruci (300ml)", description: "", price: 6.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/s3/150/150" },
            { id: 33, name: "Suco de Cupuaçu (300ml)", description: "", price: 7.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/s4/150/150" },
            { id: 34, name: "Suco de Taperebá (300ml)", description: "Cajá", price: 6.00, category: "Bebidas e Sucos", image: "https://picsum.photos/seed/s5/150/150" }
        ];

        const neighborhoods = [
            { name: "Em frente a Camil", fee: 5.00 },
            { name: "Nossa Senhora das Graças", fee: 7.00 },
            { name: "Machados", fee: 7.00 },
            { name: "Machados (Outro lado BR-470)", fee: 10.00 },
            { name: "Leal", fee: 10.00 },
            { name: "Lear", fee: 10.00 },
            { name: "Porto Nave", fee: 10.00 },
            { name: "Besix", fee: 10.00 },
            { name: "São Domingos", fee: 10.00 },
            { name: "São Paulo", fee: 10.00 },
            { name: "Pedreira", fee: 15.00 },
            { name: "São Pedro", fee: 15.00 },
            { name: "Volta Grande", fee: 15.00 },
            { name: "Meia Praia", fee: 20.00 },
            { name: "Gravatá", fee: 25.00 },
            { name: "Gravatá (Próx. Penha)", fee: 30.00 },
            { name: "Penha", fee: 40.00 },
            { name: "Escalvado", fee: 40.00 },
            { name: "Piçarras", fee: 60.00 }
        ];

        const app = {
            state: {
                cart: [],
                deliveryType: 'delivery',
                selectedNeighborhood: null
            },

            init() {
                this.renderCategoryTabs();
                this.renderNeighborhoods();
                this.renderProducts();
                this.updateTotals();
            },

            formatPrice(val) {
                return val.toFixed(2).replace('.', ',');
            },

            renderCategoryTabs() {
                const tabs = document.getElementById('category-tabs');
                const categories = ["Comidas Típicas", "Clássico Paraense", "Clássico Amazonense", "Pratos Tradicionais", "Salgados", "Adicionais", "Bebidas e Sucos"];
                
                let html = '';
                categories.forEach(cat => {
                    html += \`<button class="category-tab" onclick="app.scrollToCategory('\${cat}')">\${cat}</button>\`;
                });
                tabs.innerHTML = html;
            },

            scrollToCategory(cat) {
                const el = document.getElementById(\`cat-\${cat.replace(/ /g, '-')}\`);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            },

            renderNeighborhoods() {
                const select = document.getElementById('neighborhood');
                neighborhoods.forEach((hood, index) => {
                    const option = document.createElement('option');
                    option.value = index;
                    option.textContent = \`\${hood.name} - R$ \${this.formatPrice(hood.fee)}\`;
                    select.appendChild(option);
                });
            },

            renderProducts() {
                const container = document.getElementById('products-container');
                const categories = {};
                
                products.forEach(p => {
                    if (!categories[p.category]) categories[p.category] = [];
                    categories[p.category].push(p);
                });

                const displayOrder = ["Comidas Típicas", "Clássico Paraense", "Clássico Amazonense", "Pratos Tradicionais", "Salgados", "Adicionais", "Bebidas e Sucos"];
                let html = '';

                displayOrder.forEach(cat => {
                    if (categories[cat]) {
                        html += \`<div class="category-section"><h2 class="category-title" id="cat-\${cat.replace(/ /g, '-')}">\${cat}</h2>\`;
                        categories[cat].forEach(product => {
                            html += this.createProductCard(product);
                        });
                        html += \`</div>\`;
                    }
                });
                container.innerHTML = html;
            },

            createProductCard(product) {
                const hasOptions = product.options && product.options.length > 0;
                const hasExtras = product.extras && product.extras.length > 0;
                const isSimple = !hasOptions && !hasExtras;
                
                let displayPrice = product.price;
                let priceLabel = "R$ " + this.formatPrice(displayPrice);
                if (hasOptions) {
                    const minPrice = Math.min(...product.options.map(o => o.price));
                    priceLabel = "A partir de R$ " + this.formatPrice(minPrice);
                }

                let optionsHtml = '';
                if (hasOptions) {
                    optionsHtml += \`
                        <div class="options-section">
                            <div class="options-title">Escolha uma opção</div>
                            \${product.options.map((opt, idx) => \`
                                <div class="option-item">
                                    <label class="option-label">
                                        <input type="radio" name="opt-\${product.id}" value="\${idx}" data-price="\${opt.price}" onchange="app.calcPrice(\${product.id})" \${idx===0?'checked':''}>
                                        \${opt.name}
                                    </label>
                                    <span class="option-price">R$ \${this.formatPrice(opt.price)}</span>
                                </div>
                            \`).join('')}
                        </div>
                    \`;
                }

                let extrasHtml = '';
                if (hasExtras) {
                    extrasHtml += \`
                        <div class="options-section">
                            <div class="options-title">Adicionais</div>
                            \${product.extras.map((ext, idx) => \`
                                <div class="option-item">
                                    <span class="option-label">\${ext.name}</span>
                                    <span class="option-price">+R$ \${this.formatPrice(ext.price)}</span>
                                    <label class="toggle-switch">
                                        <input type="checkbox" name="ext-\${product.id}" value="\${idx}" data-price="\${ext.price}" onchange="app.calcPrice(\${product.id})">
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                            \`).join('')}
                        </div>
                    \`;
                }

                return \`
                    <div class="product-card">
                        <div class="product-main">
                            <div>
                                <div class="product-name">\${product.name}</div>
                                \${product.description ? \`<div class="product-desc">\${product.description}</div>\` : ''}
                            </div>
                            \${optionsHtml}
                            \${extrasHtml}
                            <div class="product-price-row">
                                <div class="product-price" id="price-\${product.id}">\${priceLabel}</div>
                                <button class="add-btn" onclick="app.addToCart(\${product.id})">Adicionar</button>
                            </div>
                        </div>
                        <div class="product-image-container">
                            <img src="\${product.image}" class="product-img" loading="lazy">
                        </div>
                    </div>
                \`;
            },

            calcPrice(id) {
                const product = products.find(p => p.id === id);
                if (!product) return;

                let currentPrice = 0;

                if (product.options) {
                    const radios = document.getElementsByName(\`opt-\${id}\`);
                    for(let r of radios) {
                        if(r.checked) {
                            currentPrice = parseFloat(r.getAttribute('data-price'));
                            break;
                        }
                    }
                } else {
                    currentPrice = product.price;
                }

                if (product.extras) {
                    const checkboxes = document.getElementsByName(\`ext-\${id}\`);
                    for(let cb of checkboxes) {
                        if(cb.checked) {
                            currentPrice += parseFloat(cb.getAttribute('data-price'));
                        }
                    }
                }

                const displayEl = document.getElementById(\`price-\${id}\`);
                if (displayEl) {
                    displayEl.innerText = "R$ " + this.formatPrice(currentPrice);
                }
            },

            addToCart(id) {
                const product = products.find(p => p.id === id);
                let finalPrice = 0;
                let descParts = [];

                if (product.options) {
                    const radios = document.getElementsByName(\`opt-\${id}\`);
                    let selectedIdx = -1;
                    radios.forEach((r, idx) => { if(r.checked) selectedIdx = idx; });
                    
                    if (selectedIdx >= 0) {
                        const opt = product.options[selectedIdx];
                        finalPrice += opt.price;
                        descParts.push(opt.name);
                    }
                } else {
                    finalPrice += product.price;
                }

                if (product.extras) {
                    const checkboxes = document.getElementsByName(\`ext-\${id}\`);
                    checkboxes.forEach((cb, idx) => {
                        if (cb.checked) {
                            const ext = product.extras[idx];
                            finalPrice += ext.price;
                            descParts.push(\`+ \${ext.name}\`);
                        }
                    });
                }

                this.state.cart.push({
                    uuid: Date.now() + Math.random(),
                    originalId: id,
                    name: product.name,
                    price: finalPrice,
                    qty: 1,
                    desc: descParts.join(', ')
                });

                this.showToast(\`\${product.name} adicionado!\`);
                this.updateTotals();
                
                // Reset extras
                if (product.extras) {
                    const checkboxes = document.getElementsByName(\`ext-\${id}\`);
                    checkboxes.forEach(cb => cb.checked = false);
                    this.calcPrice(id);
                }
            },

            updateTotals() {
                let subtotal = 0;
                let totalItems = 0;

                this.state.cart.forEach(item => {
                    subtotal += item.price * item.qty;
                    totalItems += item.qty;
                });

                let deliveryFee = 0;
                if (this.state.deliveryType === 'delivery' && this.state.selectedNeighborhood) {
                    deliveryFee = this.state.selectedNeighborhood.fee;
                }

                const grandTotal = subtotal + deliveryFee;

                document.getElementById('grand-total').innerText = this.formatPrice(grandTotal);

                const btn = document.getElementById('checkout-btn');
                const cartIcon = document.getElementById('cart-icon-wrapper');
                const cartBadge = document.getElementById('cart-badge');
                const statusMsg = document.getElementById('cart-status-msg');
                const hasDelivery = this.state.deliveryType === 'pickup' || (this.state.deliveryType === 'delivery' && this.state.selectedNeighborhood);
                
                // Update status message
                if (totalItems === 0) {
                    statusMsg.innerText = "Adicione itens ao carrinho";
                } else if (!hasDelivery) {
                    statusMsg.innerText = "Selecione forma de entrega";
                } else {
                    statusMsg.innerText = totalItems + (totalItems === 1 ? ' item' : ' itens');
                }
                
                btn.disabled = !(totalItems > 0 && hasDelivery);
                
                if (totalItems > 0) {
                    cartIcon.style.display = 'block';
                    cartBadge.innerText = totalItems;
                } else {
                    cartIcon.style.display = 'none';
                    document.getElementById('cart-sidebar').classList.remove('open');
                    document.getElementById('cart-overlay').classList.remove('show');
                }

                this.renderCartItems();
            },

            renderCartItems() {
                const container = document.getElementById('cart-items');
                
                if (this.state.cart.length === 0) {
                    container.innerHTML = \`
                        <div class="empty-cart">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <p>Carrinho vazio</p>
                        </div>
                    \`;
                    return;
                }

                let html = '';
                this.state.cart.forEach(item => {
                    const itemTotal = item.price * item.qty;
                    html += \`
                        <div class="cart-item">
                            <div class="cart-item-info">
                                <div class="cart-item-name">\${item.qty}x \${item.name}</div>
                                \${item.desc ? \`<div class="cart-item-details">\${item.desc}</div>\` : ''}
                            </div>
                            <div class="cart-item-right">
                                <span class="cart-item-price">R$ \${this.formatPrice(itemTotal)}</span>
                                <button class="trash-btn" onclick="app.removeItem('\${item.uuid}')">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    \`;
                });
                container.innerHTML = html;
            },

            toggleCart() {
                const sidebar = document.getElementById('cart-sidebar');
                const overlay = document.getElementById('cart-overlay');
                sidebar.classList.toggle('open');
                overlay.classList.toggle('show');
            },

            removeItem(uuid) {
                const item = this.state.cart.find(i => i.uuid == uuid);
                if (!item) return;

                this.state.cart = this.state.cart.filter(i => i.uuid != uuid);
                this.showToast(\`\${item.name} removido\`);
                this.updateTotals();
            },

            setDeliveryType(type) {
                this.state.deliveryType = type;
                document.getElementById('btn-delivery').className = type === 'delivery' ? 'delivery-btn active' : 'delivery-btn';
                document.getElementById('btn-pickup').className = type === 'pickup' ? 'delivery-btn active' : 'delivery-btn';
                
                const neighborhoodContainer = document.getElementById('neighborhood-container');
                const pickupInfo = document.getElementById('pickup-info');

                if (type === 'pickup') {
                    neighborhoodContainer.style.display = 'none';
                    pickupInfo.style.display = 'block';
                    this.state.selectedNeighborhood = null;
                    document.getElementById('neighborhood').value = "";
                } else {
                    neighborhoodContainer.style.display = 'block';
                    pickupInfo.style.display = 'none';
                    document.getElementById('fee-display').innerText = "";
                }
                this.updateTotals();
            },

            updateNeighborhood() {
                const select = document.getElementById('neighborhood');
                const index = select.value;
                
                if (index === "") {
                    this.state.selectedNeighborhood = null;
                    document.getElementById('fee-display').innerText = "";
                } else {
                    this.state.selectedNeighborhood = neighborhoods[index];
                    document.getElementById('fee-display').innerText = \`Taxa: R$ \${this.formatPrice(this.state.selectedNeighborhood.fee)}\`;
                }
                this.updateTotals();
            },

            showToast(msg) {
                const toast = document.getElementById('toast');
                toast.innerText = msg;
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            },

            async sendOrder() {
                const itemsList = this.state.cart.map(i => ({
                    id: i.originalId,
                    name: i.name,
                    details: i.desc,
                    price: i.price,
                    qty: i.qty,
                    total: i.price * i.qty
                }));

                const subtotal = itemsList.reduce((acc, i) => acc + i.total, 0);
                const deliveryFee = this.state.selectedNeighborhood ? this.state.selectedNeighborhood.fee : 0;
                const total = subtotal + deliveryFee;

                const payload = {
                    order: {
                        items: itemsList,
                        delivery: {
                            type: this.state.deliveryType,
                            location: this.state.selectedNeighborhood ? this.state.selectedNeighborhood.name : "Retirada",
                            fee: deliveryFee
                        },
                        totals: {
                            subtotal: subtotal,
                            total: total
                        }
                    }
                };
                
                const btn = document.getElementById('checkout-btn');
                const originalText = btn.innerHTML;
                btn.disabled = true;
                btn.innerText = "Enviando...";

                try {
                    const webhookUrl = 'https://n8n.wernerhost.com.br/webhook-test/f2ff99c8-fc52-464a-81ca-113378db9f69';
                    const res = await fetch(webhookUrl, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(payload)
                    });
                    
                    if (res.ok) {
                        this.showToast("Pedido enviado!");
                        setTimeout(() => window.location.reload(), 2000);
                    } else {
                        this.showToast("Erro ao enviar.");
                    }
                } catch (e) {
                    console.error(e);
                    this.showToast("Sem conexão.");
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            }
        };

        document.addEventListener('DOMContentLoaded', () => {
            app.init();
        });
    </script>
</body>
</html>
`;

return {
    html: htmlContent
};