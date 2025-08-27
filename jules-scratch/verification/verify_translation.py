from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Switch to Hungarian
    page.click("text=HU")
    page.screenshot(path="jules-scratch/verification/verification_hu.png")

    # Switch to English
    page.click("text=EN")
    page.screenshot(path="jules-scratch/verification/verification_en.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
