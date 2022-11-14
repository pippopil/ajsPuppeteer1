let page;

beforeEach(async () => {
  page = await browser.newPage();
  // await page.setDefaultNavigationTimeout(180000);
  jest.setTimeout(30000);
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});


describe("Github page Document tests", () => {
  beforeEach(async () => {
    await page.goto("https://docs.github.com/en");
  });

  test("The h1 main content'", async () => {
    const firstLink = await page.$("main a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    console.log(title);
    expect(title).toEqual("GitHub Documentation");
  });

  test("The first main link attribute", async () => {
    const actual = await page.$eval("main a", (link) =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("/en/get-started");
  });
});

describe("Github page Shop tests", () => {
  beforeEach(async () => {
  await page.goto("https://thegithubshop.com/");
  });

  test("The h1 main content'", async () => {
    const firstLink = await page.$("main a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    console.log(title);
    expect(title).toEqual("Product Drop Fall 2022 – GitHub");
  });
});