const puppeteer = require('puppeteer');

async function testImagesLoad() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:80'); // Adjust the URL to your testing environment

    const images = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => ({
            src: img.src,
            loaded: img.complete && img.naturalHeight !== 0
        }));
    });

    console.log('Image Load Test Results:');
    images.forEach(img => {
        console.log(`${img.src} - Loaded: ${img.loaded}`);
    });

    await browser.close();

    // Check if any image failed to load and throw an error if so
    const allLoaded = images.every(img => img.loaded);
    if (!allLoaded) {
        throw new Error('One or more images failed to load.');
    }
}

testImagesLoad().catch(error => {
    console.error(error);
    process.exit(1); // Exit with error for the CI to detect failure
});
