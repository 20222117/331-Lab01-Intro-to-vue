const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const cart = ref([]); 
        const premium = ref(true);

        function updateCart(id) {
            cart.value.push(id); 
        }

        function removeFromCart(id) {
            const index = cart.value.indexOf(id);
            if (index > -1) {
                cart.value.splice(index, 1); 
            }
        }

        const uniqueCart = computed(() => [...new Set(cart.value)]); 

        function countInCart(id) {
            return cart.value.filter((item) => item === id).length; 
        }

        return {
            cart,
            premium,
            updateCart,
            removeFromCart,
            uniqueCart,
            countInCart,
        };
    },
});

app.component('product-display', productDisplay);
app.component('review-form', reviewForm);
app.component('review-list',reviewList);
app.mount('#app');
