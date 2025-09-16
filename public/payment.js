// Payment page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');
    const emailInput = document.getElementById('email');
    const cardNameInput = document.getElementById('cardName');
    const payButton = document.getElementById('payButton');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const cardForm = document.getElementById('cardForm');

    // Payment method switching
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            this.classList.add('active');

            const method = this.dataset.method;
            handlePaymentMethodChange(method);
        });
    });

    function handlePaymentMethodChange(method) {
        if (method === 'card') {
            cardForm.style.display = 'block';
            cardForm.style.animation = 'fadeIn 0.5s ease';
        } else {
            cardForm.style.display = 'none';
            // For PayPal and Apple Pay, you would typically redirect or open modal
            if (method === 'paypal') {
                // Simulate PayPal redirect
                console.log('Redirecting to PayPal...');
            } else if (method === 'applepay') {
                // Simulate Apple Pay process
                console.log('Opening Apple Pay...');
            }
        }
    }

    // Card number formatting
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        if (formattedValue.length > 19) {
            formattedValue = formattedValue.substr(0, 19);
        }
        e.target.value = formattedValue;

        // Card type detection
        detectCardType(value);
        validateCardNumber(value);
    });

    // Expiry date formatting
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
        validateExpiry(value);
    });

    // CVV input (numbers only)
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        validateCVV(e.target.value);
    });

    // Email validation
    emailInput.addEventListener('blur', function(e) {
        validateEmail(e.target.value);
    });

    // Card name validation
    cardNameInput.addEventListener('blur', function(e) {
        validateCardName(e.target.value);
    });

    // Card type detection
    function detectCardType(number) {
        const cardType = getCardType(number);
        // You can add visual indicators for card type here
        console.log('Card type:', cardType);
    }

    function getCardType(number) {
        const patterns = {
            visa: /^4/,
            mastercard: /^5[1-5]/,
            amex: /^3[47]/,
            discover: /^6(?:011|5)/
        };

        for (const [type, pattern] of Object.entries(patterns)) {
            if (pattern.test(number)) {
                return type;
            }
        }
        return 'unknown';
    }

    // Validation functions
    function validateCardNumber(number) {
        const cleanNumber = number.replace(/\s/g, '');
        const isValid = cleanNumber.length >= 13 && cleanNumber.length <= 19 && /^[0-9]+$/.test(cleanNumber);

        showError('cardError', isValid ? '' : 'Please enter a valid card number');
        cardNumberInput.classList.toggle('error', !isValid && cleanNumber.length > 0);

        return isValid;
    }

    function validateExpiry(expiry) {
        const [month, year] = expiry.split('/');
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        let isValid = true;
        let errorMessage = '';

        if (!month || !year) {
            isValid = false;
            errorMessage = 'Please enter expiry date';
        } else if (parseInt(month) < 1 || parseInt(month) > 12) {
            isValid = false;
            errorMessage = 'Invalid month';
        } else if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            isValid = false;
            errorMessage = 'Card has expired';
        }

        showError('expiryError', errorMessage);
        expiryInput.classList.toggle('error', !isValid && expiry.length > 0);

        return isValid;
    }

    function validateCVV(cvv) {
        const isValid = cvv.length >= 3 && cvv.length <= 4;
        showError('cvvError', isValid ? '' : 'Please enter a valid CVV');
        cvvInput.classList.toggle('error', !isValid && cvv.length > 0);

        return isValid;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);

        showError('emailError', isValid ? '' : 'Please enter a valid email address');
        emailInput.classList.toggle('error', !isValid && email.length > 0);

        return isValid;
    }

    function validateCardName(name) {
        const isValid = name.trim().length >= 2;
        showError('nameError', isValid ? '' : 'Please enter cardholder name');
        cardNameInput.classList.toggle('error', !isValid && name.length > 0);

        return isValid;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    // Form validation
    function validateForm() {
        const cardNumber = cardNumberInput.value.replace(/\s/g, '');
        const expiry = expiryInput.value;
        const cvv = cvvInput.value;
        const email = emailInput.value;
        const cardName = cardNameInput.value;

        return validateCardNumber(cardNumber) &&
               validateExpiry(expiry) &&
               validateCVV(cvv) &&
               validateEmail(email) &&
               validateCardName(cardName);
    }

    // Payment processing
    payButton.addEventListener('click', function(e) {
        e.preventDefault();

        if (!validateForm()) {
            // Scroll to first error
            const firstError = document.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // Start loading state
        payButton.disabled = true;
        document.querySelector('.button-text').style.display = 'none';
        document.querySelector('.loading-spinner').style.display = 'inline-block';
        payButton.style.cursor = 'not-allowed';

        // Simulate payment processing
        setTimeout(() => {
            // Reset button state
            payButton.disabled = false;
            document.querySelector('.button-text').style.display = 'inline';
            document.querySelector('.loading-spinner').style.display = 'none';
            payButton.style.cursor = 'pointer';

            // Show success message
            showSuccessMessage();
        }, 3000);
    });

    function showSuccessMessage() {
        // Create success modal
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div style="background: white; padding: 40px; border-radius: 16px; text-align: center; max-width: 400px; margin: 20px;">
                    <div style="width: 60px; height: 60px; background: #48bb78; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                        <i class="fas fa-check" style="color: white; font-size: 24px;"></i>
                    </div>
                    <h2 style="color: #2d3748; margin-bottom: 16px;">Payment Successful!</h2>
                    <p style="color: #718096; margin-bottom: 24px;">Your payment has been processed successfully. You will receive a confirmation email shortly.</p>
                    <button onclick="this.closest('div').remove()" style="background: #4299e1; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        Continue
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Real-time form validation feedback
    const inputs = [cardNumberInput, expiryInput, cvvInput, emailInput, cardNameInput];
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Remove error styling on input
            this.classList.remove('error');
            const errorId = this.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });

    // Prevent form submission on Enter key
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
            e.preventDefault();
            payButton.click();
        }
    });

    // Auto-advance focus for better UX
    cardNumberInput.addEventListener('input', function(e) {
        if (e.target.value.replace(/\s/g, '').length === 16) {
            expiryInput.focus();
        }
    });

    expiryInput.addEventListener('input', function(e) {
        if (e.target.value.length === 5) {
            cvvInput.focus();
        }
    });

    cvvInput.addEventListener('input', function(e) {
        if (e.target.value.length === 3) {
            cardNameInput.focus();
        }
    });
});

// Additional utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Security features
function maskCardNumber(cardNumber) {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (cleanNumber.length < 4) return cardNumber;

    const masked = cleanNumber.slice(0, -4).replace(/./g, '*') + cleanNumber.slice(-4);
    return masked.match(/.{1,4}/g).join(' ');
}

// Disable right-click and text selection for security
document.addEventListener('contextmenu', function(e) {
    if (e.target.type === 'password' || e.target.id === 'cardNumber') {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', function(e) {
    if (e.target.type === 'password' || e.target.id === 'cardNumber') {
        e.preventDefault();
    }
});