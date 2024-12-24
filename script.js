document.getElementById('enterButton').addEventListener('click', async () => {
    // Play the prank audio
    document.getElementById('prankAudio').play();

    // Remove the overlay
    document.getElementById('overlay').style.display = 'none';

    // Fetch user information
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();

    // Additional scary data
    const scaryInfo = [
        `IP Address: ${data.ip}`,
        `City: ${data.city}`,
        `Region: ${data.region}`,
        `Country: ${data.country_name}`,
        `Timezone: ${data.timezone}`,
        `Latitude: ${data.latitude}`,
        `Longitude: ${data.longitude}`,
        `Postal Code: ${data.postal}`,
        `ISP: ${data.org}`,
        `Screen Resolution: ${window.screen.width}x${window.screen.height}`,
        `Browser Language: ${navigator.language}`,
        `Platform: ${navigator.platform}`,
        `Cookies Enabled: ${navigator.cookieEnabled}`,
        `User Agent: ${navigator.userAgent}`,
        `Local Time: ${new Date().toLocaleString()}`,
        `Device Memory: ${navigator.deviceMemory || "Unavailable"} GB`,
        `Hardware Concurrency: ${navigator.hardwareConcurrency || "Unavailable"} threads`,
        `Online Status: ${navigator.onLine ? "Online" : "Offline"}`,
        `Referer: ${document.referrer || "None"}`,
        `Color Depth: ${window.screen.colorDepth}-bit`,
        `Preferred Languages: ${(navigator.languages || ["Unavailable"]).join(", ")}`,
        `Touch Support: ${('ontouchstart' in window || navigator.maxTouchPoints > 0) ? "Yes" : "No"}`,
        `History Length: ${window.history.length} pages visited in this session`,
        `Navigator Vendor: ${navigator.vendor || "Unknown"}`,
        `Time Since Page Load: ${Math.round(performance.now() / 1000)} seconds`,
    ];

    const infoContainer = document.getElementById('info');
    infoContainer.style.display = 'block';
    infoContainer.innerHTML = '<h2>Your Info:</h2>'; // Reset content

    // Display each piece of info with a delay
    for (let i = 0; i < scaryInfo.length; i++) {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = scaryInfo[i];
            infoContainer.appendChild(p);
        }, i * 200); // 200ms delay between each
    }
});
