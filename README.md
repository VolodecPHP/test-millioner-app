# Table of Contents

- [Table of Contents](#table-of-contents)
- [Test task overview](#test-task-overview)
- [How to run the application](#how-to-run-the-application)
- [Architecture overview](#architecture-overview)
- [Application decisions](#application-decisions-and-what-can-be-improvedimportant)

[VERCEL LINK](https://test-millioner-app.vercel.app/)

Have a questions ragarding the task? Please, contact me directly via telegram: [@Volodec_1](https://t.me/Volodec_1)
## Test task overview

I've implemented base "Who wants to be a millionaire" game using Next.JS and TypeScript. Application contains 3 main pages: "Home/Start", "Game" and "Results". Tasks checklist:

- ✅ Implement the game logic
- ✅ Adapt the game for mobile devices and large screens
- ✅ Use Next.js and Typescript
- ✅ Use JSON as a configuration file for questions, make config extensible
- ✅ Deployed to Vercel
- ✅ Create MD file with instructions on how to run the application
- ✅ Add pre-commit and pre-push hooks to run tests and linters

## How to run the application

1. Step 1 - install dependencies:

```bash
	npm install
```

2. Step 2 - run the application:

```bash
	npm run dev
```

3. Step 3 - visit the vercel deployment link if needed:

[Test Millioner App](https://test-millioner-app.vercel.app/)

## Architecture overview

The application contains 3 main pages:
- **Home/Start** - the entry of the application, where user can start the game.
- **Game** - the main game page, where user can answer the questions.
- **Results** - the results page, where user can see the results of the game.

Homepage and Results page are static pages, so nothing interesting here. They can be fully generated on the server side, and served as static pages. The results page get's `score` from query params, but the VIEW component is reused in `Suspense`, so the source code of the page contains the same attributes, tags, texts etc

Game page is wrapped in a `GameProvider` - the brains of the application. But the logic is pretty simple. We just export `currentState` of the game and `dispatch` actions that are used to go to the next questions or end the game.

Provider receives `questions` and `injections` as props. Injections are used to remove all the timeouts in tests, so we can test the game logic without waiting for the timeouts to finish. So it's really easy to add unit tests.

I've also updated page metadata, please take a look at this beauty:

![Game Page](readme.png)

## Application decisions and what can be improved(!!!IMPORTANT!!!)

First of all, a lot of simplifications were made to the task, so I could focus on the main logic of the game. For example, I didn't use the mobile-first approach, as I don't know the target audience of the application, if it is mainly mobile users, I would definitely use the mobile-first approach here.

In real world application, I would definitely ask the following questions to the PRODUCT OWNER / PRODUCT ANALYST / DESIGNER, before starting the implementation:

1. What about authentication? Do we need it? If yes, what kind of authentication do we need? Do we need to store user data?
2. What are our sources of traffic? Do we care about the URL structure? Do we need to use dynamic routing? Are we planning of adding the A/B testing in the future?
3. Why do we need the Next.JS at all? Do we need the server-side rendering? Do we need the static generation? Do we care about the SEO?
4. What about our users? Is it mainly mobile users? Do we need to support the desktop version? Do we need to support the large screens? What about older browsers? What about the accessibility?
5. Can we share the user state in the SEARCH_PARAMS? Maybe we want to use cookies?
6. Do we need to save user progress across page reloads? Maybe user can share the progress using the URL?
7. What about analytics? What actions do we need to track? Should we save user sessions?

Other simplifications, and potential improvements:

1. Images are not fully optimized. In real life, I would use different image formats for different devices(if needed, maybe our target audience is mainly mobile users, so we can just use low-resolution images).
2. Styles are not perfect. A lot of spaces, sizes are using hardcoded values, I would use CSS variables for those properties(as I did with colors).
3. No internationalization. I would definitely add it, as it is a common requirement for the applications.
4. No currency logic, currently the `$` is hardcoded.
5. I am passing data to the results page using query params, in real project I would prefer using cookies or backend API to store the data, but for the sake of simplicity I used query params.
6. I used "Desktop first" approach, as I am working on the desktop apps for the last 1.5 years, and it's just simpler for me. If the target audience is mainly mobile users, I would definitely use the mobile-first approach.
7. I've added 2 simple unit tests, but in real life, in this type of applications I would prefer something like Playwright for E2E testing, as it' faster to write and easier to maintain.
8. I've added `eslint-a11y` rules just as an example, in real project I would definitely configure it properly, also I would add the `prettier`, but I didn't have time for that here.
9. I've added simple animations using `framer-motion`, but in real life I would use more complex animations. I would animate sidebar, mobile menu, maybe I would add "confetti" animation on the results page, etc.
