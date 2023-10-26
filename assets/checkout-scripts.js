const isCookieInsurance = document.cookie.split('; ').filter(
    (q) => q.includes('insurance_a=yes') || q.includes('insurance_b=yes')
) || [];
const isInsuranceVariation = window.location.search.replace('?', '').split('&').filter(function (q) {
    return q.includes('insurance_a=yes') || q.includes('insurance_b=yes')
}) || [];
    
if (!isCookieInsurance.length && isInsuranceVariation.length)
    document.cookie = isInsuranceVariation[0] + ';';
    
if (isInsuranceVariation.length || isCookieInsurance.length) {
    const $fieldset = document.querySelector(".step__sections .section--shipping-address .section__content");
    const insuranceSelectorContent = `
        <div class="checkbox-wrapper insurance-selector trust-hide-me">
            <div class="checkbox__input">
                <input type="checkbox" id="insurance" name="insurance" class="input-checkbox" />
            </div>
            <label class="checkbox__label" for="insurance">Yes, I would like to protect my package with premium package protection for just $2.99</label>
        </div>
    `;
        
    if ($fieldset && isCookieInsurance.includes('insurance_b=yes')) {
        $fieldset.innerHTML += insuranceSelectorContent;
        triggerInsuranceToCartEvent();
    }
    
    function triggerInsuranceToCartEvent() {
        try {
            const insuranceTrigger = document.getElementById('insurance');
        
            fetch('/cart.js')
                .then(response => response.json())
                .then(data => {
                    const { items } = data;
        
                    if (items.find(i => i.id.toString() === '41501458006184')) {
                        insuranceTrigger.setAttribute('checked', true);
                    }
                });
        
            insuranceTrigger.addEventListener('change', () => {
                if (insuranceTrigger.checked) {
                    addInsuranceToCart()
                        .then(res => window.location.reload())
                        .catch(e => console.error('addInsuranceToCart error:', error));
                } else {
                    removeInsuranceFromCart()
                        .then(res => window.location.reload())
                        .catch(e => console.error('removeInsuranceFromCart error:', error));
                }
            });
        } catch (error) {
            console.error('triggerInsuranceToCartEvent error:', error);
        }
    }
    
    function removeInsuranceFromCart() {
        return new Promise((resolve, reject) => {
            const data = {
                updates: { 41501458006184: 0 }
            };
        
            fetch('/cart/update.js', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => resolve(response))
            .catch((error) => {
                reject(error);
            });
        })
    }
    
    function addInsuranceToCart() {
        return new Promise((resolve, reject) => {
            const data = {
                updates: { 41501458006184: 1 }
            };
        
            fetch('/cart/update.js', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => resolve(response))
            .catch((error) => {
                reject('Error:', error);
            });
        })
    }
}