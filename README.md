# How to run Homie Front project

## How to install

1. Clone the repository in desired location
2. Create .env from .env.sample. **If you don't set .env vars, default values will be taken but some request may not work as expected**
4. Execute `yarn install` on root folder. You must see a yarn.lock created


## How to execute

## Run application
1. Run `yarn start` in roo folder.

Once it is running, you will be routed to `/yknx4`. You can change that route if you want but deafult route is the same as previous mentioned.

## Run tests and relevant tests
1. Run `yarn test` in roo folder.

**TEST WERE DONE FOLLOWING [AHA PRINCIPLE](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing "AHA PRINCIPLE") BY KENT C. DODDS**

While 38 test were done, because of lack of time, only some relevant tests were done to demostrate how to handle certain scenarios. In following lines there is a resume of some relevant test files you can check about 2 kind of test done.

### Snapshop test
Being the simpliest of the test, any snapshot is enough to see the *start of the art* in the project. Check for example
`src/Components/HomieBadge/__TESTS__/HomiBadge.test.tsx`

### Unit test
Unit testing was done for two kind of elements in the project; for basic components and stores (mobx contexts). For each case check for example:

**Store:** `src/__TESTS__/Stores/StoreRepos.test.tsx`
**Store:** `src/AppComponents/Header/__TESTS__/HomieHeader.test.tsx`

### Integration tests
AS the most complex tests, these are the most complex and larg of all. Also, can include mock of stores, routes and other functionalities. Check for example:

**With store mock:** `src/AppComponents/Content/HomieReposList/Item/HomieRepoItemSection/__TESTS__/HomieRepoItemModal.test.tsx`

**With High order function (HOF) or callback:** `src/AppComponents/Content/HomieReposList/Item/HomieRepoItemSection/__TESTS__/HomieRepoItemModal.test.tsx`

# Stack and considerations
**UI**
- Antd
- Font Awesome
- Antd Icons

**Testing**
- Jest
- RTL

**Store**
- Mobx

**CSS**
- Plain css

**Package Manager**
- Yarn
- Craco *Comes with antd but is not needed for other tasks*
