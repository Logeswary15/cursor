document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('itineraryForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const messageBox = document.getElementById('message');

    // REPLACE THIS WITH YOUR ACTUAL N8N WEBHOOK URL
    const WEBHOOK_URL = 'https://YOUR-N8N-INSTANCE.com/webhook/travel-itinerary';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic Validation
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!validateForm(data)) return;

        // UI Loading State
        setLoading(true);
        hideMessage();

        try {
            // Simulate API call to n8n Webhook
            // In a real scenario, this would be a fetch call:
            /*
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) throw new Error('Submission failed');
            */

            // For demo purposes (since we don't have a live backend):
            console.log("Sending data to n8n:", data);

            // Artificial delay to simulate processing
            await new Promise(resolve => setTimeout(resolve, 1500));

            // NOTE: To make this actually work, uncomment the fetch block above
            // and use a valid n8n Webhook URL.

            showMessage('success', 'Itinerary request sent! Check your email shortly.');
            form.reset();

        } catch (error) {
            console.error(error);
            showMessage('error', 'Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    });

    function validateForm(data) {
        if (!data.destination || data.destination.length < 3) {
            showMessage('error', 'Please enter a valid destination.');
            return false;
        }
        if (data.days < 1 || data.days > 30) {
            showMessage('error', 'Trip duration must be between 1 and 30 days.');
            return false;
        }
        if (data.budget < 100) {
            showMessage('error', 'Budget seems a bit low for a trip.');
            return false;
        }
        return true;
    }

    function setLoading(isLoading) {
        submitBtn.disabled = isLoading;
        if (isLoading) {
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-block';
        } else {
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
        }
    }

    function showMessage(type, text) {
        messageBox.textContent = text;
        messageBox.className = `message-box ${type}`;
        messageBox.style.display = 'block';

        // Auto hide after 5 seconds
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 5000);
    }

    function hideMessage() {
        messageBox.style.display = 'none';
    }
});
