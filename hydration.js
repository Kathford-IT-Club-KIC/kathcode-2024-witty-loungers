let countdownElement = document.getElementById('countdown');
        let takenBtn = document.getElementById('taken-btn');
        let skipBtn = document.getElementById('skip-btn');
        let counterElement = document.getElementById('counter');
        let waterIntakeCounter = 0;

        let interval = 20 * 60; // 20 minutes in seconds
        let countdownInterval;

        function startCountdown() {
            let timeLeft = interval;

            countdownInterval = setInterval(() => {
                let minutes = Math.floor(timeLeft / 60);
                let seconds = timeLeft % 60;
                countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                timeLeft--;

                if (timeLeft < 0) {
                    clearInterval(countdownInterval);
                    notifyUser();
                    startCountdown();
                }
            }, 1000);
        }

        function notifyUser() {
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('Water Reminder', { body: 'Time to drink water!' });
            }
        }

        takenBtn.addEventListener('click', () => {
            waterIntakeCounter++;
            counterElement.textContent = waterIntakeCounter;
            clearInterval(countdownInterval);
            startCountdown();
        });

        skipBtn.addEventListener('click', () => {
            clearInterval(countdownInterval);
            startCountdown();
        });

        if ('Notification' in window && Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    startCountdown();
                }
            });
        } else {
            startCountdown();
        }
